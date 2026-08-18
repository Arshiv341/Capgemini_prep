import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { getAssessment, updateAssessment, getMistakes } from '../services/storageService';
import { findQuestionById, calculateAssessmentResults } from '../services/assessmentEngine';
import { AssessmentState, AssessmentStageState, AssessmentQuestion, QuestionStatus, MCQQuestion, SpeakingPrompt, BusinessWritingPrompt, CodingProblem } from '../types';
import { PrimaryButton, SecondaryButton, LoadingState } from '../components/UI';
import { Clock, ShieldAlert, Award, Grid, X, ArrowLeft, ArrowRight, Trash2, HelpCircle, AlertTriangle, Check, Volume2, Mic, Play } from 'lucide-react';

export const MockTestScreen: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // 1. Declare All State Hooks at the Top
  const [state, setState] = useState<AssessmentState | null>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [currentStageIdx, setCurrentStageIdx] = useState(0);
  const [currentQIdx, setCurrentQIdx] = useState(0);
  
  // Timers & Submission Modal states
  const [remainingTime, setRemainingTime] = useState<number>(0);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Subjective / Coding Round workspace inputs
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [writtenSubject, setWrittenSubject] = useState('');
  const [writtenBody, setWrittenBody] = useState('');
  const [spokenRecorded, setSpokenRecorded] = useState(false);
  const [codeEditorVal, setCodeEditorVal] = useState('');
  const [codeLang, setCodeLang] = useState<'cpp' | 'java' | 'c'>('cpp');

  // Spoken preparation & speaking secondary counters
  const [speakingPrepTime, setSpeakingPrepTime] = useState(30);
  const [speakingSpeakTime, setSpeakingSpeakTime] = useState(60);
  const [speakingTimerType, setSpeakingTimerType] = useState<'IDLE' | 'PREPARATION' | 'SPEAKING'>('IDLE');

  // Audio plays tracker
  const [listeningPlays, setListeningPlays] = useState<Record<string, number>>({});

  // 2. Resolve Current Section & Question Helper Variables Safely
  const currentStage = state?.stages?.[currentStageIdx] as AssessmentStageState;
  const assessmentQ = currentStage?.questions?.[currentQIdx] as AssessmentQuestion;
  const qData = assessmentQ ? findQuestionById(assessmentQ.questionId) : null;
  const aqType = qData?.section === 'coding' ? 'CODING' :
                 qData?.section === 'speaking' ? 'SPEAKING' :
                 qData?.section === 'writing' ? 'WRITING' : 'MCQ';

  // 3. Load & Restore State from Storage
  useEffect(() => {
    if (!id) {
      setStatus('error');
      return;
    }
    const saved = getAssessment(id);
    if (saved && saved.isActive) {
      setState(saved);
      setCurrentStageIdx(saved.currentStageIndex);
      
      const activeStage = saved.stages[saved.currentStageIndex];
      if (activeStage) {
        setCurrentQIdx(activeStage.currentQuestionIndex);
      }
      setStatus('ready');
    } else {
      setStatus('error');
    }
  }, [id]);

  // 4. Expiration Timer calculation
  useEffect(() => {
    if (state && state.isActive) {
      const diffMs = state.expiresAt - Date.now();
      const diffSecs = Math.max(0, Math.round(diffMs / 1000));
      setRemainingTime(diffSecs);

      if (diffSecs <= 0) {
        handleStageTimeout(state);
      }
    }
  }, [state?.expiresAt, state?.isActive]);

  // Countdown timer loop
  useEffect(() => {
    let timerId: any;
    if (state && state.isActive && remainingTime > 0) {
      timerId = setInterval(() => {
        setRemainingTime((prev) => {
          if (prev <= 1) {
            clearInterval(timerId);
            handleStageTimeout(state);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [state?.isActive, state?.expiresAt, remainingTime]);

  // 5. Speaking simulator timers
  useEffect(() => {
    let speakTimerId: any;
    if (speakingTimerType === 'PREPARATION' && speakingPrepTime > 0) {
      speakTimerId = setInterval(() => {
        setSpeakingPrepTime((prev) => {
          if (prev <= 1) {
            setSpeakingTimerType('SPEAKING');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (speakingTimerType === 'SPEAKING' && speakingSpeakTime > 0) {
      speakTimerId = setInterval(() => {
        setSpeakingSpeakTime((prev) => {
          if (prev <= 1) {
            setSpeakingTimerType('IDLE');
            setSpokenRecorded(true);
            updateQuestionStatus('answered', 'AUDIO_DATA_RECORDED');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(speakTimerId);
  }, [speakingTimerType, speakingPrepTime, speakingSpeakTime]);

  // 6. Navigation confirmations preventing exit
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (state?.isActive) {
        e.preventDefault();
        e.returnValue = 'Assessment is in progress. Leaving will lose progress.';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [state?.isActive]);

  // 7. Sync question values on load
  useEffect(() => {
    if (state && assessmentQ) {
      // Mark visited
      if (!state.visited[assessmentQ.questionId]) {
        markVisited(assessmentQ.questionId);
      }

      // Load answers into states
      const savedAns = state.answers[assessmentQ.questionId];
      if (aqType === 'MCQ') {
        setSelectedOption(savedAns !== undefined ? Number(savedAns) : null);
      } else if (aqType === 'WRITING') {
        const val = savedAns as { subject?: string; body: string } | undefined;
        setWrittenSubject(val?.subject || '');
        setWrittenBody(val?.body || '');
      } else if (aqType === 'SPEAKING') {
        setSpokenRecorded(savedAns === 'AUDIO_DATA_RECORDED');
        setSpeakingTimerType('IDLE');
        setSpeakingPrepTime(30);
        setSpeakingSpeakTime(60);
      } else if (aqType === 'CODING') {
        setCodeEditorVal(typeof savedAns === 'string' ? savedAns : '');
      }
    }
  }, [currentQIdx, currentStageIdx, state?.id]);

  // 8. Local helper functions
  const markVisited = (qId: string) => {
    setState((prev) => {
      if (!prev) return null;
      const updated = {
        ...prev,
        visited: { ...prev.visited, [qId]: true }
      };
      updateAssessment(updated);
      return updated;
    });
  };

  const getQuestionStatus = (qId: string, currentState: AssessmentState): QuestionStatus => {
    const isVisited = currentState.visited[qId];
    const hasAnswer = currentState.answers[qId] !== undefined;
    const isMarked = currentState.reviewFlags[qId] === true;

    if (!isVisited) return 'not-visited';
    if (isMarked && hasAnswer) return 'answered-and-marked';
    if (isMarked) return 'marked-for-review';
    if (hasAnswer) return 'answered';
    return 'not-answered';
  };

  const updateQuestionStatus = (newStatus: QuestionStatus, answerVal?: any) => {
    if (!state || !assessmentQ) return;

    setState((prev) => {
      if (!prev) return null;
      
      const updatedStages = [...prev.stages];
      const stage = { ...updatedStages[prev.currentStageIndex] };
      const qList = [...stage.questions];
      const aq = { ...qList[currentQIdx] };

      aq.status = newStatus;
      if (answerVal !== undefined) {
        aq.userAnswer = answerVal;
      }
      qList[currentQIdx] = aq;
      stage.questions = qList;
      updatedStages[prev.currentStageIndex] = stage;

      const updatedAnswers = { ...prev.answers };
      if (answerVal !== undefined) {
        if (answerVal === null || answerVal === '') {
          delete updatedAnswers[aq.questionId];
        } else {
          updatedAnswers[aq.questionId] = answerVal;
        }
      }

      const updatedReview = { ...prev.reviewFlags };
      if (newStatus === 'marked-for-review' || newStatus === 'answered-and-marked') {
        updatedReview[aq.questionId] = true;
      } else {
        updatedReview[aq.questionId] = false;
      }

      const updated = {
        ...prev,
        stages: updatedStages,
        answers: updatedAnswers,
        reviewFlags: updatedReview
      };

      // Set current flat questions
      updated.questions = stage.questions;
      updated.currentQuestionIndex = currentQIdx;

      updateAssessment(updated);
      return updated;
    });
  };

  const handleOptionSelect = (idx: number) => {
    setSelectedOption(idx);
  };

  const handleSaveAndNext = () => {
    let ans: any = undefined;
    let newStatus: QuestionStatus = 'not-answered';

    if (aqType === 'MCQ') {
      if (selectedOption !== null) {
        ans = selectedOption;
        newStatus = state?.reviewFlags[assessmentQ.questionId] ? 'answered-and-marked' : 'answered';
      }
    } else if (aqType === 'WRITING') {
      if (writtenBody.trim().length > 0) {
        ans = { subject: writtenSubject, body: writtenBody };
        newStatus = 'answered';
      }
    } else if (aqType === 'SPEAKING') {
      if (spokenRecorded) {
        ans = 'AUDIO_DATA_RECORDED';
        newStatus = 'answered';
      }
    } else if (aqType === 'CODING') {
      if (codeEditorVal.trim().length > 0) {
        ans = codeEditorVal;
        newStatus = 'answered';
      }
    }

    updateQuestionStatus(newStatus, ans);
    navigateQuestion(currentQIdx + 1);
  };

  const handleClearResponse = () => {
    setSelectedOption(null);
    setWrittenSubject('');
    setWrittenBody('');
    setSpokenRecorded(false);
    setCodeEditorVal('');

    if (!state || !assessmentQ) return;

    setState((prev) => {
      if (!prev) return null;
      const updatedStages = [...prev.stages];
      const stage = { ...updatedStages[prev.currentStageIndex] };
      const qList = [...stage.questions];
      const aq = { ...qList[currentQIdx] };

      aq.status = 'not-answered';
      aq.userAnswer = undefined;
      qList[currentQIdx] = aq;
      stage.questions = qList;
      updatedStages[prev.currentStageIndex] = stage;

      const updatedAnswers = { ...prev.answers };
      delete updatedAnswers[aq.questionId];

      const updated = {
        ...prev,
        stages: updatedStages,
        answers: updatedAnswers
      };

      updateAssessment(updated);
      return updated;
    });
  };

  const handleMarkForReview = () => {
    let ans: any = undefined;
    let newStatus: QuestionStatus = 'marked-for-review';

    if (aqType === 'MCQ') {
      if (selectedOption !== null) {
        ans = selectedOption;
        newStatus = 'answered-and-marked';
      }
    }

    updateQuestionStatus(newStatus, ans);
    navigateQuestion(currentQIdx + 1);
  };

  const navigateQuestion = (idx: number) => {
    if (state && idx >= 0 && idx < currentStage.questions.length) {
      setState((prev) => {
        if (!prev) return null;
        const updatedStages = [...prev.stages];
        updatedStages[prev.currentStageIndex].currentQuestionIndex = idx;
        const updated = { ...prev, stages: updatedStages, currentQuestionIndex: idx };
        updateAssessment(updated);
        return updated;
      });
      setCurrentQIdx(idx);
    }
  };

  const handleStageTimeout = (currentState: AssessmentState) => {
    alert(`Time is up for the ${currentState.stages[currentState.currentStageIndex].stageName} section! Auto-submitting section answers.`);
    transitionToNextSection(currentState);
  };

  const transitionToNextSection = (currentState: AssessmentState) => {
    const nextIdx = currentState.currentStageIndex + 1;
    if (nextIdx < currentState.stages.length) {
      const nextStage = currentState.stages[nextIdx];
      const durationSecs = nextStage.timeRemainingSeconds;

      const updated: AssessmentState = {
        ...currentState,
        currentStageIndex: nextIdx,
        questions: nextStage.questions,
        currentQuestionIndex: 0,
        expiresAt: Date.now() + (durationSecs * 1000)
      };

      if (nextStage.questions.length > 0) {
        updated.visited[nextStage.questions[0].questionId] = true;
      }

      setState(updated);
      setCurrentStageIdx(nextIdx);
      setCurrentQIdx(0);
      setRemainingTime(durationSecs);
      updateAssessment(updated);
    } else {
      handleSubmitTest(currentState);
    }
  };

  const handleSubmitTest = (currentState: AssessmentState) => {
    const gradedState = {
      ...currentState,
      isActive: false,
      status: 'submitted' as const
    };
    const results = calculateAssessmentResults(gradedState);
    
    // Save to history and update locally
    const history = JSON.parse(localStorage.getItem('capgemini-prep:assessment-results') || '[]');
    history.push(results);
    localStorage.setItem('capgemini-prep:assessment-results', JSON.stringify(history));

    updateAssessment(gradedState);
    setIsSubmitModalOpen(false);
    navigate(`/mock/${results.id}/result`);
  };

  const getStatsForModal = () => {
    if (!state) return { answered: 0, unanswered: 0, marked: 0 };
    let answered = 0;
    let unanswered = 0;
    let marked = 0;

    currentStage.questions.forEach((aq) => {
      const status = getQuestionStatus(aq.questionId, state);
      if (status === 'answered' || status === 'answered-and-marked') {
        answered++;
      } else {
        unanswered++;
      }
      if (status === 'marked-for-review' || status === 'answered-and-marked') {
        marked++;
      }
    });

    return { answered, unanswered, marked };
  };

  const formatTimer = (secs: number) => {
    const min = Math.floor(secs / 60).toString().padStart(2, '0');
    const sec = (secs % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
  };

  // --- AUDIO SYNTHESIS & PLAYBACK HANDLERS ---
  const handlePlayAudio = (text: string, qId: string) => {
    const played = listeningPlays[qId] || 0;
    if (played >= 2) {
      alert('Maximum of 2 plays allowed for listening comprehension.');
      return;
    }

    setListeningPlays((prev) => ({ ...prev, [qId]: played + 1 }));

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Speech synthesis is not supported on this browser.');
    }
  };

  const startSpeakingSimulation = () => {
    setSpeakingPrepTime(30);
    setSpeakingSpeakTime(60);
    setSpeakingTimerType('PREPARATION');
  };

  // --- RENDERING SUB-SECTIONS ---
  const renderMCQBody = () => {
    if (!qData) return null;
    return (
      <div className="space-y-4">
        {qData.options.map((opt: string, idx: number) => {
          const isSel = selectedOption === idx;
          return (
            <button
              key={idx}
              onClick={() => handleOptionSelect(idx)}
              className={`w-full text-left px-4 py-3.5 border rounded-lg text-xs md:text-sm transition duration-150 flex items-center justify-between cursor-pointer ${
                isSel
                  ? 'bg-blue-500/10 border-blue-500 text-blue-600 font-bold shadow-inner'
                  : 'bg-card border-border-primary hover:bg-muted-bg/60 text-foreground'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-5 h-5 flex items-center justify-center rounded text-[10px] font-bold ${
                  isSel ? 'bg-blue-500 text-white' : 'bg-muted-bg border border-border-primary/60 text-muted-text'
                }`}>
                  {idx + 1}
                </span>
                <span>{opt}</span>
              </div>
            </button>
          );
        })}
      </div>
    );
  };

  const renderReadingBody = () => {
    if (!qData) return null;
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <div className="p-4 bg-muted-bg border border-border-primary rounded-xl overflow-y-auto max-h-[50vh] text-xs leading-relaxed text-foreground/80">
          <h4 className="font-bold text-foreground mb-2 text-xs uppercase tracking-wider">Passage context</h4>
          <p className="whitespace-pre-wrap">{qData.passage}</p>
        </div>
        <div className="space-y-4">
          {renderMCQBody()}
        </div>
      </div>
    );
  };

  const renderListeningBody = () => {
    if (!qData) return null;
    const played = listeningPlays[qData.id] || 0;
    return (
      <div className="space-y-5">
        <div className="p-5 bg-card border border-border-primary rounded-xl flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[10px] text-muted-text font-bold uppercase">Audio panel</span>
            <p className="text-xs text-foreground font-semibold">Listen to the prompt to answer the question.</p>
          </div>
          <button
            onClick={() => handlePlayAudio(qData.audioText, qData.id)}
            disabled={played >= 2}
            className="flex items-center gap-2 px-4 py-2 bg-foreground text-background font-bold text-xs rounded-lg hover:opacity-90 disabled:opacity-30 cursor-pointer"
          >
            <Volume2 size={14} />
            <span>{played === 0 ? 'Play Audio' : `Play Again (${2 - played} left)`}</span>
          </button>
        </div>
        {renderMCQBody()}
      </div>
    );
  };

  const renderSpeakingBody = () => {
    if (!qData) return null;
    const prompt = qData as SpeakingPrompt;
    return (
      <div className="p-6 bg-card border border-border-primary rounded-xl flex flex-col items-center justify-center space-y-6 text-center max-w-lg mx-auto shadow-sm">
        <Mic size={36} className={speakingTimerType === 'SPEAKING' ? 'text-rose-500 animate-pulse' : 'text-blue-500'} />
        
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-muted-text uppercase">Speaking Topic prompt</span>
          <p className="text-xs text-foreground font-semibold px-2">{prompt.prompt}</p>
        </div>

        {speakingTimerType === 'IDLE' && !spokenRecorded && (
          <PrimaryButton onClick={startSpeakingSimulation} className="text-xs">
            Start Speaking Drill
          </PrimaryButton>
        )}

        {speakingTimerType === 'PREPARATION' && (
          <div className="space-y-1">
            <p className="text-xs text-amber-500 font-bold uppercase">Preparation Timer</p>
            <p className="text-2xl font-black text-foreground">{speakingPrepTime}s</p>
          </div>
        )}

        {speakingTimerType === 'SPEAKING' && (
          <div className="space-y-1">
            <p className="text-xs text-rose-500 font-bold uppercase animate-pulse">Speak Now</p>
            <p className="text-2xl font-black text-foreground">{speakingSpeakTime}s</p>
          </div>
        )}

        {spokenRecorded && (
          <span className="text-xs text-emerald-500 font-bold p-1 px-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center gap-1">
            <Check size={12} />
            Response Complete (Audio data simulated)
          </span>
        )}
      </div>
    );
  };

  const renderWritingBody = () => {
    return (
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Subject Line..."
          value={writtenSubject}
          onChange={(e) => setWrittenSubject(e.target.value)}
          className="w-full bg-card border border-border-primary p-3 rounded-lg text-foreground text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
        />
        <textarea
          rows={8}
          placeholder="Draft your business email reply here. Structure correctly with greetings and signatures..."
          value={writtenBody}
          onChange={(e) => setWrittenBody(e.target.value)}
          className="w-full bg-card border border-border-primary p-4 rounded-lg text-foreground text-xs leading-relaxed focus:ring-1 focus:ring-blue-500 focus:outline-none"
        />
        <div className="text-[10px] text-muted-text text-right font-bold uppercase">
          Words: {writtenBody.trim().split(/\s+/).filter(Boolean).length}
        </div>
      </div>
    );
  };

  const renderCodingBody = () => {
    if (!qData) return null;
    const prob = qData as CodingProblem;
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Left side problem spec */}
        <div className="p-4 bg-muted-bg border border-border-primary rounded-xl overflow-y-auto max-h-[50vh] text-xs space-y-4">
          <div className="space-y-1">
            <h4 className="font-black text-foreground text-sm leading-tight">{prob.title}</h4>
            <p className="text-[10px] text-muted-text font-bold uppercase">Topic: {prob.topics.join(', ')}</p>
          </div>
          <p className="leading-relaxed whitespace-pre-wrap text-foreground/80">{prob.description}</p>
          
          <div className="space-y-1 border-t border-border-primary/50 pt-2">
            <span className="font-bold text-foreground block uppercase text-[10px]">Constraints</span>
            <ul className="list-disc list-inside space-y-0.5 text-muted-text">
              {prob.constraints.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>

          <div className="space-y-2 border-t border-border-primary/50 pt-2">
            <span className="font-bold text-foreground block uppercase text-[10px]">Examples</span>
            {prob.examples.map((ex, i) => (
              <div key={i} className="p-2.5 bg-card border border-border-primary/45 rounded-lg space-y-1">
                <p><strong>Input:</strong> <code className="font-mono text-blue-500">{ex.input}</code></p>
                <p><strong>Output:</strong> <code className="font-mono text-emerald-500">{ex.output}</code></p>
              </div>
            ))}
          </div>
        </div>

        {/* Right side editor */}
        <div className="space-y-4 flex flex-col justify-between">
          <div className="space-y-2 flex-1 flex flex-col">
            <div className="flex items-center justify-between bg-card border border-border-primary border-b-0 p-2.5 rounded-t-lg text-xs">
              <div className="flex gap-2">
                {(['cpp', 'java', 'c'] as const).map(lang => (
                  <button
                    key={lang}
                    onClick={() => setCodeLang(lang)}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase cursor-pointer ${codeLang === lang ? 'bg-muted-bg text-blue-500' : 'text-muted-text'}`}
                  >
                    {lang === 'cpp' ? 'C++' : lang === 'java' ? 'Java' : 'C'}
                  </button>
                ))}
              </div>
              <span className="text-[10px] font-mono text-muted-text uppercase font-bold">{codeLang} active</span>
            </div>
            <textarea
              rows={12}
              placeholder="// Write your code solution here. Ensure syntax matches selected language..."
              value={codeEditorVal}
              onChange={(e) => setCodeEditorVal(e.target.value)}
              className="w-full flex-1 bg-muted-bg text-blue-600 dark:text-blue-400 font-mono text-[11px] leading-relaxed p-4 rounded-b-lg border border-border-primary focus:outline-none resize-none"
              spellCheck={false}
            />
          </div>
        </div>
      </div>
    );
  };

  const renderQuestionBody = () => {
    if (!qData) return <div className="p-4 text-xs text-muted-text italic">Loading question parameters...</div>;

    switch (qData.section) {
      case 'situational-awareness':
      case 'grammar':
      case 'technical':
      case 'pseudocode':
        return renderMCQBody();
      case 'reading':
        return renderReadingBody();
      case 'listening':
        return renderListeningBody();
      case 'speaking':
        return renderSpeakingBody();
      case 'writing':
        return renderWritingBody();
      case 'coding':
        return renderCodingBody();
      default:
        return (
          <div className="p-6 border border-rose-500/20 bg-rose-500/5 rounded-xl text-center text-xs text-rose-500">
            Unsupported question section type: {qData.section}
          </div>
        );
    }
  };

  // 9. Early Checks for Routing Status (Must show Shell, never blank!)
  const modalStats = getStatsForModal();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans select-none transition-colors duration-150 relative">
      
      {/* Dynamic Header */}
      <header className="bg-card text-foreground px-6 py-4 flex items-center justify-between border-b border-border-primary shadow-sm z-10">
        <div className="space-y-0.5">
          <h1 className="text-sm font-black tracking-tight text-foreground">{state ? state.name : 'Capgemini Assessment Mock'}</h1>
          <div className="flex items-center gap-2 text-[10px] text-muted-text font-bold uppercase tracking-wider">
            <span>Stage: <strong className="text-foreground">{currentStage ? currentStage.stageName : 'Assessment'}</strong></span>
            <span>&bull;</span>
            <span>Question {currentQIdx + 1} of {currentStage ? currentStage.questions.length : 0}</span>
          </div>
        </div>

        {/* Timers */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-muted-bg px-3.5 py-1.5 border border-border-primary rounded-lg text-xs font-mono font-bold text-red-500">
            <Clock size={14} />
            <span>Time Remaining: {formatTimer(remainingTime)}</span>
          </div>

          {status === 'ready' && (
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-1.5 text-foreground hover:bg-muted-bg rounded border border-border-primary cursor-pointer"
            >
              <Grid size={16} />
            </button>
          )}
        </div>
      </header>

      {/* Main Workspace Frame */}
      <div className="flex-1 flex overflow-hidden relative">
        {status === 'loading' && <LoadingState message="Loading assessment questions..." />}
        
        {status === 'error' && (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4 bg-background">
            <ShieldAlert className="text-rose-500 animate-bounce" size={44} />
            <h3 className="text-base font-black text-foreground">Assessment not found or expired.</h3>
            <p className="text-xs text-muted-text max-w-sm leading-relaxed">
              We couldn't locate active configurations or parameters for this test ID. Ensure the test configuration exists.
            </p>
            <div className="flex gap-3 pt-2">
              <SecondaryButton onClick={() => navigate('/dashboard')}>Return to Dashboard</SecondaryButton>
              <PrimaryButton onClick={() => navigate('/mock/new')}>Create New Mock</PrimaryButton>
            </div>
          </div>
        )}

        {status === 'ready' && state && (
          <>
            {/* Left Content Column */}
            <main className="flex-1 p-6 overflow-y-auto flex flex-col justify-between bg-background">
              <div className="space-y-6 max-w-4xl mx-auto w-full">
                
                {/* Section title */}
                <div className="space-y-1">
                  <span className="text-[10px] px-2.5 py-0.5 bg-muted-bg border border-border-primary rounded-full text-foreground font-bold uppercase tracking-wider">
                    {assessmentQ?.section.replace('-', ' ')}
                  </span>
                  <h4 className="text-foreground font-bold text-sm md:text-base leading-snug mt-2">
                    {qData?.question || 'Question Loading...'}
                  </h4>
                </div>

                {/* Question body custom renderers */}
                {renderQuestionBody()}

              </div>

              {/* Bottom navigation buttons */}
              <div className="flex items-center justify-between border-t border-border-primary pt-6 mt-6 max-w-4xl mx-auto w-full">
                <div className="flex gap-3">
                  <SecondaryButton
                    disabled={currentQIdx === 0}
                    onClick={() => navigateQuestion(currentQIdx - 1)}
                    className="flex items-center gap-1 py-1.5 px-3 text-xs"
                  >
                    <ArrowLeft size={12} />
                    Previous
                  </SecondaryButton>

                  <SecondaryButton
                    onClick={handleClearResponse}
                    className="flex items-center gap-1 py-1.5 px-3 text-xs"
                  >
                    <Trash2 size={12} />
                    Clear
                  </SecondaryButton>
                </div>

                <div className="flex gap-3">
                  {aqType === 'MCQ' && (
                    <SecondaryButton
                      onClick={handleMarkForReview}
                      className="py-1.5 px-3 text-xs text-indigo-500"
                    >
                      Mark Review
                    </SecondaryButton>
                  )}

                  {currentQIdx < currentStage.questions.length - 1 ? (
                    <PrimaryButton
                      onClick={handleSaveAndNext}
                      className="py-1.5 px-4 text-xs font-bold uppercase tracking-wider"
                    >
                      Save & Next
                    </PrimaryButton>
                  ) : (
                    currentStageIdx < state.stages.length - 1 ? (
                      <PrimaryButton
                        onClick={() => {
                          handleSaveAndNext();
                          const nextIdx = currentStageIdx + 1;
                          transitionToNextSection(state);
                        }}
                        className="py-1.5 px-4 text-xs font-bold uppercase bg-emerald-600 hover:bg-emerald-500 text-white border-0"
                      >
                        Finish Section &rarr;
                      </PrimaryButton>
                    ) : (
                      <PrimaryButton
                        onClick={() => {
                          handleSaveAndNext();
                          setIsSubmitModalOpen(true);
                        }}
                        className="py-1.5 px-4 text-xs font-bold uppercase bg-rose-600 hover:bg-rose-500 text-white border-0"
                      >
                        Submit Test
                      </PrimaryButton>
                    )
                  )}
                </div>
              </div>
            </main>

            {/* Right Question Palette Sidebar */}
            <aside className={`w-72 bg-card border-l border-border-primary p-5 flex flex-col justify-between transition-all duration-300 lg:flex ${
              isSidebarOpen ? 'fixed inset-y-0 right-0 z-50 flex' : 'hidden lg:flex'
            }`}>
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-border-primary pb-3">
                  <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">Question Palette</h3>
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="lg:hidden p-1 text-muted-text hover:text-foreground cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Palette button grid */}
                <div className="grid grid-cols-5 gap-2 max-h-[50vh] overflow-y-auto pr-1">
                  {currentStage.questions.map((aq, idx) => {
                    const isSelected = currentQIdx === idx;
                    const status = getQuestionStatus(aq.questionId, state);
                    
                    let btnCls = 'bg-muted-bg border-border-primary/50 text-muted-text hover:bg-border-primary/30';
                    
                    if (status === 'answered') {
                      btnCls = 'bg-emerald-500 border-emerald-500 text-white font-bold';
                    } else if (status === 'not-answered') {
                      btnCls = 'bg-rose-500 border-rose-500 text-white font-bold';
                    } else if (status === 'marked-for-review') {
                      btnCls = 'bg-indigo-500 border-indigo-500 text-white font-bold';
                    } else if (status === 'answered-and-marked') {
                      btnCls = 'bg-violet-600 border-violet-600 text-white font-bold relative after:absolute after:w-1.5 after:h-1.5 after:bg-emerald-400 after:rounded-full after:top-0.5 after:right-0.5';
                    }

                    if (isSelected) {
                      btnCls += ' ring-2 ring-blue-500 ring-offset-2 ring-offset-card';
                    }

                    return (
                      <button
                        key={aq.questionId}
                        onClick={() => { navigateQuestion(idx); setIsSidebarOpen(false); }}
                        className={`w-full aspect-square flex items-center justify-center rounded border text-xs font-bold transition cursor-pointer ${btnCls}`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>

                {/* Palette Legend */}
                <div className="space-y-2 border-t border-border-primary pt-4">
                  <span className="text-[9px] font-bold text-muted-text uppercase tracking-wider">Legend</span>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-muted-text font-semibold">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3.5 h-3.5 bg-emerald-500 rounded flex-shrink-0" />
                      <span>Answered</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3.5 h-3.5 bg-rose-500 rounded flex-shrink-0" />
                      <span>Not Answered</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3.5 h-3.5 bg-indigo-500 rounded flex-shrink-0" />
                      <span>Review</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3.5 h-3.5 bg-muted-bg border border-border-primary/50 rounded flex-shrink-0" />
                      <span>Not Visited</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Final Submit trigger */}
              <div className="border-t border-border-primary pt-4">
                <button
                  onClick={() => setIsSubmitModalOpen(true)}
                  className="w-full py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow cursor-pointer text-center border-0"
                >
                  Submit Entire Test
                </button>
              </div>
            </aside>
          </>
        )}
      </div>

      {/* 10. Submit Confirmation Modal (Item 17) */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" onClick={() => setIsSubmitModalOpen(false)} />
          
          <div className="bg-card border border-border-primary rounded-xl max-w-md w-full p-6 shadow-2xl relative z-10 space-y-5 animate-fadeIn text-foreground font-sans">
            <div className="space-y-1.5">
              <h3 className="text-base font-extrabold text-foreground">Submit Assessment?</h3>
              <p className="text-xs text-muted-text leading-relaxed">
                Review your section question metrics below before auto-grading your score.
              </p>
            </div>

            <div className="p-4 bg-muted-bg rounded-lg border border-border-primary grid grid-cols-3 gap-2 text-center text-xs">
              <div className="space-y-0.5">
                <span className="text-lg font-black text-emerald-500">{modalStats.answered}</span>
                <p className="text-[10px] text-muted-text font-bold uppercase">Answered</p>
              </div>
              <div className="space-y-0.5 border-x border-border-primary/60">
                <span className="text-lg font-black text-rose-500">{modalStats.unanswered}</span>
                <p className="text-[10px] text-muted-text font-bold uppercase">Unanswered</p>
              </div>
              <div className="space-y-0.5">
                <span className="text-lg font-black text-indigo-500">{modalStats.marked}</span>
                <p className="text-[10px] text-muted-text font-bold uppercase">For Review</p>
              </div>
            </div>

            <div className="flex gap-3 justify-end">
              <SecondaryButton onClick={() => setIsSubmitModalOpen(false)} className="py-2 px-4 text-xs font-bold uppercase border border-border-primary">
                Continue Test
              </SecondaryButton>
              <button
                onClick={() => handleSubmitTest(state!)}
                className="py-2 px-4 text-xs font-bold uppercase bg-rose-600 hover:bg-rose-500 text-white rounded-lg cursor-pointer border-0 shadow"
              >
                Submit Assessment
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default MockTestScreen;
