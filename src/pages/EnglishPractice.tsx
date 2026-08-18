import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PageContainer,
  PrimaryButton,
  SecondaryButton,
  LoadingState,
  EmptyState
} from '../components/UI';
import { PracticeQuestion } from '../components/assessment/PracticeQuestion';
import {
  Volume2,
  Mic,
  FileText,
  MessageSquare,
  AlertTriangle,
  Play,
  RotateCcw,
  BookOpen,
  ArrowRight,
  Sparkles
} from 'lucide-react';

// Import databases
import { grammarQuestions } from '../data/english/grammar';
import { situationalQuestions } from '../data/english/situational';
import { readingPassages } from '../data/english/reading';
import { listeningQuestions } from '../data/english/listening';
import { speakingPrompts } from '../data/english/speaking';
import { writingPrompts } from '../data/english/writing';

import { getAttempts, updateDailyChallengeProgress } from '../services/storageService';

type TabType = 'situational' | 'reading' | 'listening' | 'speaking' | 'writing' | 'grammar';

const EnglishPractice: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('situational');
  const [questionIndex, setQuestionIndex] = useState(0);

  // States for Listening
  const [audioPlays, setAudioPlays] = useState<Record<string, number>>({});
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [listeningSubmitted, setListeningSubmitted] = useState(false);
  const [listeningSelection, setListeningSelection] = useState<number | null>(null);

  // States for Speaking
  const [prepTimeLeft, setPrepTimeLeft] = useState(30);
  const [speakTimeLeft, setSpeakTimeLeft] = useState(60);
  const [speakingState, setSpeakingState] = useState<'idle' | 'preparing' | 'recording' | 'finished'>('idle');
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [micError, setMicError] = useState<string | null>(null);

  // States for Business Writing
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [writingSubmitted, setWritingSubmitted] = useState(false);

  // Reset indices on tab switch
  useEffect(() => {
    setQuestionIndex(0);
    setListeningSubmitted(false);
    setListeningSelection(null);
    stopSynthesis();
    resetSpeakingState();
    resetWritingState();
  }, [activeTab]);

  // Speaking Timers
  useEffect(() => {
    let interval: any;
    if (speakingState === 'preparing' && prepTimeLeft > 0) {
      interval = setInterval(() => {
        setPrepTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (speakingState === 'preparing' && prepTimeLeft === 0) {
      startRecording();
    } else if (speakingState === 'recording' && speakTimeLeft > 0) {
      interval = setInterval(() => {
        setSpeakTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (speakingState === 'recording' && speakTimeLeft === 0) {
      stopRecording();
    }

    return () => clearInterval(interval);
  }, [speakingState, prepTimeLeft, speakTimeLeft]);

  // Cleanup audio
  useEffect(() => {
    return () => {
      stopSynthesis();
    };
  }, []);

  const stopSynthesis = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  };

  const handleSpeak = (text: string, id: string) => {
    if (!window.speechSynthesis) {
      alert('Text-to-speech is not supported in this browser.');
      return;
    }

    const currentPlays = audioPlays[id] || 0;
    if (currentPlays >= 2) {
      alert('You have reached the maximum of 2 plays for this audio.');
      return;
    }

    stopSynthesis();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
    
    setAudioPlays((prev) => ({
      ...prev,
      [id]: currentPlays + 1,
    }));
  };

  // Speaking module recording logic
  const resetSpeakingState = () => {
    setPrepTimeLeft(30);
    setSpeakTimeLeft(60);
    setSpeakingState('idle');
    setAudioChunks([]);
    setAudioUrl(null);
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
    }
  };

  const startPreparation = () => {
    resetSpeakingState();
    setSpeakingState('preparing');
  };

  const startRecording = async () => {
    setSpeakingState('recording');
    setAudioChunks([]);
    setAudioUrl(null);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setAudioChunks((prev) => [...prev, event.data]);
        }
      };

      recorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        stream.getTracks().forEach(track => track.stop());
      };

      recorder.start();
      setMediaRecorder(recorder);
    } catch (err: any) {
      console.warn('Microphone permission denied', err);
      setMicError('Microphone access denied. You can still practice speaking in Self-Evaluation mode.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      mediaRecorder.stop();
    }
    setSpeakingState('finished');
    updateDailyChallengeProgress('speaking', 1);
  };

  // Writing state reset
  const resetWritingState = () => {
    setEmailSubject('');
    setEmailBody('');
    setWritingSubmitted(false);
  };

  const handleWritingSubmit = () => {
    if (emailBody.trim().length === 0) return;
    setWritingSubmitted(true);
    updateDailyChallengeProgress('writing', 1);
  };

  // Quick launch of English assessment mock
  const handleLaunchMock = () => {
    navigate('/mock/new', { state: { preset: 'English Only' } });
  };

  return (
    <PageContainer>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <BookOpen className="text-blue-400" />
            English Communication Simulator
          </h2>
          <p className="text-xs text-slate-400">
            Practice workplace situation chats, listening speed tests, emails, and pronunciation checkers.
          </p>
        </div>
        <PrimaryButton 
          onClick={handleLaunchMock}
          className="flex items-center justify-center gap-2 text-xs font-semibold py-2.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md uppercase tracking-wider"
        >
          <Sparkles size={14} />
          Start 28-Task Assessment Mock
        </PrimaryButton>
      </div>

      {/* Tabs Row */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800/80 pb-3">
        {[
          { id: 'situational', name: 'Situational Awareness', icon: <MessageSquare size={16} /> },
          { id: 'grammar', name: 'Grammar & Correction', icon: <FileText size={16} /> },
          { id: 'reading', name: 'Reading Passages', icon: <BookOpen size={16} /> },
          { id: 'listening', name: 'Listening Comprehension', icon: <Volume2 size={16} /> },
          { id: 'speaking', name: 'Spoken Topics', icon: <Mic size={16} /> },
          { id: 'writing', name: 'Business Writing', icon: <FileText size={16} /> },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as TabType)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            {tab.icon}
            {tab.name}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="min-h-[50vh]">
        
        {/* Tab 1: Situational Awareness */}
        {activeTab === 'situational' && (
          <div className="space-y-4">
            {situationalQuestions.length > 0 ? (
              <div className="max-w-3xl mx-auto space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Question {questionIndex + 1} of {situationalQuestions.length}</span>
                  <span>Practice Mode</span>
                </div>
                <PracticeQuestion
                  question={situationalQuestions[questionIndex]}
                  onNext={() => setQuestionIndex((prev) => Math.min(situationalQuestions.length - 1, prev + 1))}
                  onPrevious={() => setQuestionIndex((prev) => Math.max(0, prev - 1))}
                  showNavigation={true}
                />
              </div>
            ) : (
              <EmptyState title="No questions loaded" description="Run generating scripts to build bank." />
            )}
          </div>
        )}

        {/* Tab 2: Grammar */}
        {activeTab === 'grammar' && (
          <div className="space-y-4">
            {grammarQuestions.length > 0 ? (
              <div className="max-w-3xl mx-auto space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Question {questionIndex + 1} of {grammarQuestions.length}</span>
                  <span>Practice Mode</span>
                </div>
                <PracticeQuestion
                  question={grammarQuestions[questionIndex]}
                  onNext={() => setQuestionIndex((prev) => Math.min(grammarQuestions.length - 1, prev + 1))}
                  onPrevious={() => setQuestionIndex((prev) => Math.max(0, prev - 1))}
                  showNavigation={true}
                />
              </div>
            ) : (
              <EmptyState title="No questions loaded" description="Database is empty." />
            )}
          </div>
        )}

        {/* Tab 3: Reading Comprehension */}
        {activeTab === 'reading' && (
          <div className="space-y-6">
            {readingPassages.length > 0 ? (
              (() => {
                const passageObj = readingPassages[questionIndex];
                return (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    {/* Left side: Passage display */}
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 space-y-4 shadow-xl lg:sticky lg:top-4 max-h-[80vh] overflow-y-auto">
                      <div className="flex items-center justify-between border-b border-slate-850 pb-3">
                        <h4 className="text-slate-200 font-bold text-sm">Passage ID: {passageObj.id}</h4>
                        <span className="text-xs text-slate-500 uppercase font-semibold">Reading Passage</span>
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
                        {passageObj.passage}
                      </p>
                    </div>

                    {/* Right side: Questions under passage */}
                    <div className="space-y-5">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Passage {questionIndex + 1} of {readingPassages.length}</span>
                        <div className="flex items-center gap-2">
                          <SecondaryButton 
                            disabled={questionIndex === 0}
                            onClick={() => setQuestionIndex(q => Math.max(0, q - 1))}
                            className="py-1 px-2.5 text-[10px]"
                          >
                            Prev Passage
                          </SecondaryButton>
                          <SecondaryButton 
                            disabled={questionIndex === readingPassages.length - 1}
                            onClick={() => setQuestionIndex(q => Math.min(readingPassages.length - 1, q + 1))}
                            className="py-1 px-2.5 text-[10px]"
                          >
                            Next Passage
                          </SecondaryButton>
                        </div>
                      </div>

                      {passageObj.questions.map((subQ, idx) => (
                        <PracticeQuestion
                          key={subQ.id}
                          question={{
                            ...subQ,
                            section: 'reading',
                            topic: passageObj.topic,
                            subtopic: 'reading-comprehension',
                            difficulty: passageObj.difficulty,
                            sourceType: passageObj.sourceType,
                            tags: passageObj.tags,
                            explanation: subQ.explanation
                          }}
                          showNavigation={false}
                        />
                      ))}
                    </div>
                  </div>
                );
              })()
            ) : (
              <EmptyState title="No reading passages found" description="Seeding script missed this." />
            )}
          </div>
        )}

        {/* Tab 4: Listening Comprehension */}
        {activeTab === 'listening' && (
          <div className="max-w-2xl mx-auto space-y-5">
            {listeningQuestions.length > 0 ? (
              (() => {
                const lQ = listeningQuestions[questionIndex];
                const plays = audioPlays[lQ.id] || 0;
                
                const handleSelectionSubmit = () => {
                  if (listeningSelection === null) return;
                  setListeningSubmitted(true);
                  updateDailyChallengeProgress('listening', 1);
                };

                return (
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6 shadow-xl">
                    <div className="flex items-center justify-between border-b border-slate-850 pb-3">
                      <span className="text-xs text-blue-400 font-bold uppercase">Listening Simulation</span>
                      <span className="text-xs text-slate-500">Question {questionIndex + 1} of {listeningQuestions.length}</span>
                    </div>

                    <div className="p-5 bg-slate-950/80 border border-slate-850 rounded-xl flex flex-col items-center justify-center space-y-3 text-center">
                      <Volume2 size={36} className={`text-blue-500 ${isSpeaking ? 'animate-pulse' : ''}`} />
                      <div className="space-y-1">
                        <p className="text-xs font-semibold text-slate-300">Click to listen to the scenario</p>
                        <p className="text-[11px] text-slate-500">Max 2 replays. Currently played: {plays}/2</p>
                      </div>
                      
                      <PrimaryButton
                        onClick={() => handleSpeak(lQ.audioText, lQ.id)}
                        disabled={plays >= 2 || isSpeaking}
                        className="flex items-center gap-2 text-xs py-2 px-4 shadow-md bg-blue-600 hover:bg-blue-500"
                      >
                        <Play size={14} fill="currentColor" />
                        {isSpeaking ? 'Playing Audio...' : 'Play Audio Scenario'}
                      </PrimaryButton>
                    </div>

                    {/* Question details (Only unlocked once audio plays at least once) */}
                    {plays > 0 ? (
                      <div className="space-y-4">
                        <h4 className="text-slate-200 font-bold text-sm">{lQ.question}</h4>
                        
                        <div className="grid grid-cols-1 gap-2.5">
                          {lQ.options.map((opt: string, idx: number) => {
                            const isSel = listeningSelection === idx;
                            const isCorrect = idx === lQ.correctAnswer;
                            let cls = 'bg-slate-850 border-slate-800 hover:bg-slate-800 text-slate-300';
                            
                            if (listeningSubmitted) {
                              if (isCorrect) cls = 'bg-emerald-500/10 border-emerald-500 text-emerald-400 font-semibold';
                              else if (isSel) cls = 'bg-rose-500/10 border-rose-500 text-rose-400 font-semibold';
                              else cls = 'bg-slate-850 border-slate-800 text-slate-500 opacity-60';
                            } else if (isSel) {
                              cls = 'bg-blue-500/10 border-blue-500 text-blue-400';
                            }

                            return (
                              <button
                                key={idx}
                                disabled={listeningSubmitted}
                                onClick={() => setListeningSelection(idx)}
                                className={`w-full text-left px-4 py-3 rounded-lg border text-xs font-semibold cursor-pointer ${cls}`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>

                        {!listeningSubmitted ? (
                          <PrimaryButton 
                            onClick={handleSelectionSubmit}
                            disabled={listeningSelection === null}
                            className="py-1.5 px-4 text-xs font-semibold"
                          >
                            Submit Answer
                          </PrimaryButton>
                        ) : (
                          <div className="space-y-4 pt-4 border-t border-slate-850">
                            <div className="bg-slate-950 p-4 rounded-lg space-y-2 border border-slate-850 text-xs">
                              <p className="text-slate-400 font-bold">Audio Transcript:</p>
                              <p className="italic text-slate-500">{lQ.audioText}</p>
                            </div>
                            
                            <div className="p-4 bg-blue-500/5 rounded-lg border border-blue-500/10 text-xs text-slate-400 leading-normal">
                              <h5 className="font-bold text-slate-300 mb-1">Explanation</h5>
                              {lQ.explanation}
                            </div>

                            <div className="flex justify-between items-center pt-2">
                              <SecondaryButton
                                disabled={questionIndex === 0}
                                onClick={() => {
                                  setQuestionIndex(q => q - 1);
                                  setListeningSelection(null);
                                  setListeningSubmitted(false);
                                }}
                                className="py-1 px-3 text-xs"
                              >
                                Previous
                              </SecondaryButton>
                              <PrimaryButton
                                disabled={questionIndex === listeningQuestions.length - 1}
                                onClick={() => {
                                  setQuestionIndex(q => q + 1);
                                  setListeningSelection(null);
                                  setListeningSubmitted(false);
                                }}
                                className="py-1 px-3 text-xs"
                              >
                                Next
                              </PrimaryButton>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <p className="text-xs text-slate-500 italic text-center">Play the audio file above to reveal options.</p>
                    )}
                  </div>
                );
              })()
            ) : (
              <EmptyState title="No questions loaded" description="Generate question bank first." />
            )}
          </div>
        )}

        {/* Tab 5: Speaking */}
        {activeTab === 'speaking' && (
          <div className="max-w-2xl mx-auto space-y-5">
            {speakingPrompts.length > 0 ? (
              (() => {
                const sP = speakingPrompts[questionIndex];
                return (
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6 shadow-xl">
                    <div className="flex items-center justify-between border-b border-slate-850 pb-3">
                      <span className="text-xs text-blue-400 font-bold uppercase">Speaking Task</span>
                      <span className="text-xs text-slate-500">Task {questionIndex + 1} of {speakingPrompts.length}</span>
                    </div>

                    <div className="space-y-2">
                      <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Prompt Category: {sP.category}</p>
                      <h4 className="text-slate-200 font-bold text-base md:text-lg leading-relaxed">{sP.prompt}</h4>
                    </div>

                    {/* Speech State Controls */}
                    <div className="bg-slate-950/80 border border-slate-850 rounded-xl p-5 flex flex-col items-center justify-center space-y-4">
                      {speakingState === 'idle' && (
                        <div className="text-center space-y-3">
                          <p className="text-xs text-slate-400">Click below to start a 30s preparation timer, followed by a 60s record session.</p>
                          <PrimaryButton onClick={startPreparation} className="text-xs font-bold uppercase tracking-wider">
                            Start Spoken Practice
                          </PrimaryButton>
                        </div>
                      )}

                      {speakingState === 'preparing' && (
                        <div className="text-center space-y-3">
                          <p className="text-xs font-semibold text-slate-400">Preparation Time Remaining</p>
                          <h2 className="text-4xl font-extrabold text-amber-500 tracking-tight">{prepTimeLeft}s</h2>
                          <SecondaryButton onClick={startRecording} className="text-[10px] py-1 px-3">
                            Skip Preparation & Record
                          </SecondaryButton>
                        </div>
                      )}

                      {speakingState === 'recording' && (
                        <div className="text-center space-y-3">
                          <p className="text-xs font-semibold text-slate-400 text-red-500 animate-pulse">RECORDING AUDIO...</p>
                          <h2 className="text-4xl font-extrabold text-red-500 tracking-tight">{speakTimeLeft}s</h2>
                          <PrimaryButton onClick={stopRecording} className="text-xs bg-red-600 hover:bg-red-500 font-semibold">
                            Stop & Save Recording
                          </PrimaryButton>
                        </div>
                      )}

                      {speakingState === 'finished' && (
                        <div className="text-center space-y-4 w-full">
                          <p className="text-xs text-emerald-400 font-bold">Recording Saved!</p>
                          
                          {audioUrl ? (
                            <div className="w-full flex items-center justify-center p-3 bg-slate-900 rounded-xl">
                              <audio src={audioUrl} controls className="w-full max-w-sm" />
                            </div>
                          ) : (
                            <p className="text-[10px] text-slate-500 italic">Audio recording output saved in memory.</p>
                          )}

                          {micError && (
                            <div className="text-center text-[10px] text-amber-500 border border-amber-500/10 bg-amber-500/5 p-2.5 rounded-lg">
                              {micError}
                            </div>
                          )}

                          <div className="flex gap-2 justify-center">
                            <SecondaryButton onClick={startPreparation} className="text-[10px] flex items-center gap-1.5 py-1 px-2.5">
                              <RotateCcw size={12} />
                              Re-record
                            </SecondaryButton>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Rubric evaluation checklists */}
                    {speakingState === 'finished' && (
                      <div className="p-4 bg-slate-950 border border-slate-850 rounded-xl space-y-3">
                        <h5 className="text-xs font-bold text-slate-300">Self-Evaluation Checklist</h5>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-400 list-disc list-inside">
                          {sP.checklist.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Navigator */}
                    {speakingState === 'finished' && (
                      <div className="flex justify-between items-center pt-2">
                        <SecondaryButton
                          disabled={questionIndex === 0}
                          onClick={() => {
                            setQuestionIndex(q => q - 1);
                            resetSpeakingState();
                          }}
                          className="py-1 px-3 text-xs"
                        >
                          Previous Prompt
                        </SecondaryButton>
                        <PrimaryButton
                          disabled={questionIndex === speakingPrompts.length - 1}
                          onClick={() => {
                            setQuestionIndex(q => q + 1);
                            resetSpeakingState();
                          }}
                          className="py-1 px-3 text-xs"
                        >
                          Next Prompt
                        </PrimaryButton>
                      </div>
                    )}
                  </div>
                );
              })()
            ) : (
              <EmptyState title="No speaking prompts loaded" description="Run generate questions to seed." />
            )}
          </div>
        )}

        {/* Tab 6: Business Writing */}
        {activeTab === 'writing' && (
          <div className="max-w-3xl mx-auto space-y-5">
            {writingPrompts.length > 0 ? (
              (() => {
                const wP = writingPrompts[questionIndex];
                const wordCount = emailBody.trim().split(/\s+/).filter(Boolean).length;

                return (
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6 shadow-xl">
                    <div className="flex items-center justify-between border-b border-slate-850 pb-3">
                      <span className="text-xs text-blue-400 font-bold uppercase">Business Email Writing</span>
                      <span className="text-xs text-slate-500">Task {questionIndex + 1} of {writingPrompts.length}</span>
                    </div>

                    <div className="space-y-2">
                      <p className="text-slate-400 text-xs font-semibold">Writing Situation Scenario</p>
                      <h4 className="text-slate-200 font-bold text-sm leading-relaxed">{wP.prompt}</h4>
                    </div>

                    {!writingSubmitted ? (
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Subject:</label>
                          <input
                            type="text"
                            placeholder="Enter professional email subject..."
                            value={emailSubject}
                            onChange={(e) => setEmailSubject(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-850 p-3 rounded-lg text-slate-200 text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between items-center">
                            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Body:</label>
                            <span className={`text-[10px] font-semibold ${
                              wordCount >= 100 && wordCount <= 180 ? 'text-emerald-400' : 'text-slate-500'
                            }`}>
                              Word Count: {wordCount} (Suggested: 100-150 words)
                            </span>
                          </div>
                          <textarea
                            rows={8}
                            placeholder="Write your email body here. Start with a polite greeting and end with a formal sign-off..."
                            value={emailBody}
                            onChange={(e) => setEmailBody(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-850 p-4 rounded-lg text-slate-200 text-xs leading-relaxed focus:ring-1 focus:ring-blue-500 focus:outline-none"
                          />
                        </div>

                        <PrimaryButton 
                          onClick={handleWritingSubmit}
                          disabled={emailBody.trim().length === 0}
                          className="py-2 px-5 text-xs font-semibold"
                        >
                          Submit Response
                        </PrimaryButton>
                      </div>
                    ) : (
                      <div className="space-y-5 animate-fadeIn">
                        {/* Saved input summary */}
                        <div className="bg-slate-950 border border-slate-850 rounded-lg p-4 space-y-2">
                          <p className="text-xs font-bold text-slate-300">Your Submitted Response:</p>
                          <p className="text-xs text-slate-400 font-semibold"><span className="text-slate-500">Subject:</span> {emailSubject}</p>
                          <p className="text-xs text-slate-400 whitespace-pre-wrap leading-relaxed border-t border-slate-900 pt-2">{emailBody}</p>
                        </div>

                        {/* Model answer */}
                        <div className="bg-blue-500/5 border border-blue-500/10 rounded-xl p-5 space-y-3">
                          <h5 className="text-xs font-bold text-blue-400 uppercase tracking-wider">Ideal Model Answer</h5>
                          <p className="text-xs text-slate-400 whitespace-pre-wrap leading-relaxed bg-slate-950/60 p-3 rounded-lg border border-slate-900">
                            {wP.modelAnswer}
                          </p>
                        </div>

                        {/* Rubric */}
                        <div className="p-4 bg-slate-950 border border-slate-850 rounded-xl space-y-3">
                          <h5 className="text-xs font-bold text-slate-300">Correctness & Structuring Checklist</h5>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-500 list-disc list-inside">
                            {wP.checklist.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Navigator */}
                        <div className="flex justify-between items-center pt-2">
                          <SecondaryButton
                            disabled={questionIndex === 0}
                            onClick={() => {
                              setQuestionIndex(q => q - 1);
                              resetWritingState();
                            }}
                            className="py-1 px-3 text-xs"
                          >
                            Previous Scenario
                          </SecondaryButton>
                          <PrimaryButton
                            disabled={questionIndex === writingPrompts.length - 1}
                            onClick={() => {
                              setQuestionIndex(q => q + 1);
                              resetWritingState();
                            }}
                            className="py-1 px-3 text-xs"
                          >
                            Next Scenario
                          </PrimaryButton>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()
            ) : (
              <EmptyState title="No prompts found" description="Seeding database failed." />
            )}
          </div>
        )}

      </div>
    </PageContainer>
  );
};

export default EnglishPractice;
