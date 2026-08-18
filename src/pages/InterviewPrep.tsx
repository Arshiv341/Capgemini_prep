import React, { useState, useEffect } from 'react';
import {
  PageContainer,
  PrimaryButton,
  SecondaryButton,
  EmptyState
} from '../components/UI';
import { HelpCircle, ChevronDown, ChevronUp, Shuffle, Clock, Award, Briefcase, Play, RotateCcw } from 'lucide-react';
import { interviewQuestions } from '../data/interview/questions';
import { InterviewQuestion } from '../types';
import { updateDailyChallengeProgress } from '../services/storageService';

type InterviewCategory = 'ALL' | 'HR' | 'OOP' | 'DBMS' | 'OS' | 'Networks' | 'SQL' | 'DSA' | 'Behavioral';

const InterviewPrep: React.FC = () => {
  const [activeTab, setActiveTab] = useState<InterviewCategory>('ALL');
  const [filteredQuestions, setFilteredQuestions] = useState<InterviewQuestion[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Random Mock Interview States
  const [isMockMode, setIsMockMode] = useState(false);
  const [mockQuestion, setMockQuestion] = useState<InterviewQuestion | null>(null);
  const [timerType, setTimerType] = useState<'NONE' | 'THINK' | 'ANSWER'>('NONE');
  const [timerSeconds, setTimerSeconds] = useState(0);

  // Sync category filters
  useEffect(() => {
    let list = interviewQuestions;
    if (activeTab !== 'ALL') {
      list = list.filter((q) => q.category.toLowerCase() === activeTab.toLowerCase());
    }
    setFilteredQuestions(list);
    setExpandedId(null);
  }, [activeTab]);

  // Interview timer loop
  useEffect(() => {
    let interval: any;
    if (timerType !== 'NONE' && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerType === 'THINK' && timerSeconds === 0) {
      // Transition to speaking
      setTimerType('ANSWER');
      setTimerSeconds(90);
    } else if (timerType === 'ANSWER' && timerSeconds === 0) {
      setTimerType('NONE');
      updateDailyChallengeProgress('interview', 1);
    }
    return () => clearInterval(interval);
  }, [timerType, timerSeconds]);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleStartMockInterview = () => {
    setIsMockMode(true);
    pickRandomQuestion();
  };

  const pickRandomQuestion = () => {
    const randomQ = interviewQuestions[Math.floor(Math.random() * interviewQuestions.length)];
    setMockQuestion(randomQ);
    setTimerType('THINK');
    setTimerSeconds(30); // 30s to think
  };

  const handleStopMock = () => {
    setIsMockMode(false);
    setMockQuestion(null);
    setTimerType('NONE');
  };

  return (
    <PageContainer>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Briefcase className="text-blue-400" />
            Interview Preparation Dashboard
          </h2>
          <p className="text-xs text-slate-400">
            Study professional answers for HR templates, projects summary, OOP, networks, and live SQL query challenges.
          </p>
        </div>
        <PrimaryButton 
          onClick={handleStartMockInterview}
          className="flex items-center justify-center gap-2 text-xs font-semibold py-2.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md uppercase tracking-wider"
        >
          <Shuffle size={14} />
          Start Random Interview Simulator
        </PrimaryButton>
      </div>

      {!isMockMode ? (
        // Standard category browser
        <div className="space-y-6">
          
          {/* Categories select row */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-wrap gap-2 items-center shadow-md">
            {(['ALL', 'HR', 'OOP', 'DBMS', 'OS', 'Networks', 'SQL', 'DSA', 'Behavioral'] as InterviewCategory[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800/40 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {tab === 'ALL' ? 'All categories' : tab}
              </button>
            ))}
          </div>

          {/* List of cards */}
          <div className="space-y-4 max-w-3xl mx-auto">
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((q) => {
                const isExp = expandedId === q.id;
                return (
                  <div 
                    key={q.id}
                    className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg transition duration-150"
                  >
                    {/* Header trigger */}
                    <button
                      onClick={() => toggleExpand(q.id)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-slate-850 transition duration-150 cursor-pointer"
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider bg-blue-600/10 px-2 py-0.5 rounded border border-blue-500/20">
                          {q.category}
                        </span>
                        <h4 className="text-sm md:text-base font-bold text-slate-200">{q.question}</h4>
                      </div>
                      <div className="text-slate-500">
                        {isExp ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </div>
                    </button>

                    {/* Expandable answers */}
                    {isExp && (
                      <div className="p-5 border-t border-slate-850 bg-slate-950/40 space-y-5 text-xs md:text-sm animate-fadeIn">
                        
                        {/* Short answer */}
                        <div className="space-y-1">
                          <p className="font-bold text-slate-400 text-xs uppercase tracking-wider">Quick Recall Summary:</p>
                          <p className="text-slate-350 italic">{q.shortAnswer}</p>
                        </div>

                        {/* Ideal corporate answer */}
                        <div className="space-y-1.5 pt-2 border-t border-slate-900">
                          <p className="font-bold text-slate-400 text-xs uppercase tracking-wider">Ideal Structured Answer:</p>
                          <p className="text-slate-300 leading-relaxed whitespace-pre-wrap">{q.idealAnswer}</p>
                        </div>

                        {/* Key points rubric */}
                        <div className="space-y-1.5 pt-2 border-t border-slate-900">
                          <p className="font-bold text-slate-400 text-xs uppercase tracking-wider">Points to emphasize:</p>
                          <ul className="list-disc list-inside space-y-1 text-slate-400">
                            {q.keyPoints.map((pt, pIdx) => (
                              <li key={pIdx}>{pt}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Common errors to avoid */}
                        <div className="space-y-1.5 pt-2 border-t border-slate-900">
                          <p className="font-bold text-rose-400 text-xs uppercase tracking-wider">Common Mistakes to avoid:</p>
                          <ul className="list-disc list-inside space-y-1 text-slate-400">
                            {q.commonMistakes.map((mis, mIdx) => (
                              <li key={mIdx}>{mis}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Follow up questions */}
                        {q.followUpQuestions.length > 0 && (
                          <div className="space-y-1.5 pt-2 border-t border-slate-900">
                            <p className="font-bold text-amber-400 text-xs uppercase tracking-wider">Potential follow-up questions:</p>
                            <ul className="list-none space-y-1 text-slate-500 font-semibold italic">
                              {q.followUpQuestions.map((fol, fIdx) => (
                                <li key={fIdx}>&bull; {fol}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <EmptyState title="No questions match this category" description="Filter topic list." />
            )}
          </div>

        </div>
      ) : (
        // Live Interview Simulator overlay
        <div className="max-w-2xl mx-auto space-y-6">
          <SecondaryButton onClick={handleStopMock} className="text-xs py-1.5 px-3">
            &larr; Exit Simulator
          </SecondaryButton>

          {mockQuestion && (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6 shadow-xl text-center">
              <div className="flex justify-between items-center border-b border-slate-850 pb-3">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Live Interview Question</span>
                <span className="text-xs text-slate-500 uppercase font-semibold">{mockQuestion.category} round</span>
              </div>

              {/* Live question text */}
              <div className="py-4 space-y-4">
                <HelpCircle size={32} className="mx-auto text-blue-400" />
                <h3 className="text-lg md:text-xl font-bold text-slate-100 px-4 leading-normal">
                  {mockQuestion.question}
                </h3>
              </div>

              {/* Timer metrics */}
              <div className="bg-slate-950/80 border border-slate-850 rounded-xl p-5 flex flex-col items-center justify-center space-y-3">
                {timerType === 'THINK' && (
                  <div className="space-y-1.5">
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Time to organize your thoughts:</p>
                    <h2 className="text-4xl font-extrabold text-amber-500 tracking-tight font-mono">{timerSeconds}s</h2>
                  </div>
                )}
                {timerType === 'ANSWER' && (
                  <div className="space-y-1.5">
                    <p className="text-xs text-red-400 uppercase tracking-wider font-bold animate-pulse">Live Response Timer:</p>
                    <h2 className="text-4xl font-extrabold text-red-500 tracking-tight font-mono">{timerSeconds}s</h2>
                  </div>
                )}
                {timerType === 'NONE' && (
                  <div className="space-y-1.5 text-center">
                    <p className="text-xs text-emerald-400 font-bold flex items-center justify-center gap-1.5">
                      <Award size={14} />
                      Response Complete!
                    </p>
                    <p className="text-[10px] text-slate-500">Analyze the key answers and common mistakes checklist below.</p>
                  </div>
                )}
              </div>

              {/* Evaluation checklists (revealed at completion or skip) */}
              {timerType === 'NONE' && (
                <div className="text-left bg-slate-950 p-4 rounded-xl border border-slate-850 space-y-4 text-xs animate-fadeIn">
                  <div className="space-y-1.5">
                    <p className="font-bold text-slate-300">Ideal Answer Guide:</p>
                    <p className="text-slate-400 leading-relaxed whitespace-pre-wrap">{mockQuestion.idealAnswer}</p>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="font-bold text-slate-350">Points you should cover:</p>
                    <ul className="list-disc list-inside space-y-0.5 text-slate-500">
                      {mockQuestion.keyPoints.map((p, idx) => <li key={idx}>{p}</li>)}
                    </ul>
                  </div>
                </div>
              )}

              {/* Simulator controls */}
              <div className="flex gap-3 justify-center pt-2">
                {timerType !== 'NONE' ? (
                  <SecondaryButton 
                    onClick={() => { setTimerType('NONE'); setTimerSeconds(0); }} 
                    className="text-xs font-semibold py-2 px-4 border-slate-700 text-slate-300"
                  >
                    Skip to Answer Key
                  </SecondaryButton>
                ) : (
                  <>
                    <SecondaryButton onClick={pickRandomQuestion} className="text-xs font-semibold py-2 px-4 flex items-center gap-1">
                      <RotateCcw size={14} />
                      Retry Question
                    </SecondaryButton>
                    <PrimaryButton onClick={pickRandomQuestion} className="text-xs font-bold py-2 px-5 flex items-center gap-1">
                      Next Question &rarr;
                    </PrimaryButton>
                  </>
                )}
              </div>

            </div>
          )}
        </div>
      )}
    </PageContainer>
  );
};

export default InterviewPrep;
