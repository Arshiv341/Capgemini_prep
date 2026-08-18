import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PageContainer,
  PrimaryButton,
  SecondaryButton,
  EmptyState
} from '../components/UI';
import { PracticeQuestion } from '../components/assessment/PracticeQuestion';
import { FileCode, Play, Award, Clipboard, Eye, RefreshCw } from 'lucide-react';
import { pseudocodeQuestions } from '../data/pseudocode/questions';
import { MCQQuestion, PseudocodeQuestion, QuestionDifficulty } from '../types';
import { updateDailyChallengeProgress } from '../services/storageService';

type PseudoCategory = 'ALL' | 'loops' | 'recursion' | 'bitwise';

const PseudocodePractice: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<PseudoCategory>('ALL');
  const [difficultyFilter, setDifficultyFilter] = useState<QuestionDifficulty | 'ALL'>('ALL');
  const [filteredQuestions, setFilteredQuestions] = useState<PseudocodeQuestion[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);

  // Trace Mode States
  const [isTraceMode, setIsTraceMode] = useState(false);
  const [userTraceRows, setUserTraceRows] = useState<string[][]>([]);
  const [traceChecked, setTraceChecked] = useState(false);
  const [traceSubmitted, setTraceSubmitted] = useState(false);

  // Sync filtration
  useEffect(() => {
    let list = pseudocodeQuestions;
    if (activeTab !== 'ALL') {
      list = list.filter((q) => q.topic.toLowerCase() === activeTab.toLowerCase());
    }
    if (difficultyFilter !== 'ALL') {
      list = list.filter((q) => q.difficulty === difficultyFilter);
    }
    setFilteredQuestions(list);
    setQuestionIndex(0);
    setIsTraceMode(false);
    setTraceChecked(false);
    setTraceSubmitted(false);
  }, [activeTab, difficultyFilter]);

  // Reset trace rows when question changes
  useEffect(() => {
    setIsTraceMode(false);
    setTraceChecked(false);
    setTraceSubmitted(false);
    
    const currentQ = filteredQuestions[questionIndex];
    if (currentQ?.traceTable) {
      // Initialize user rows based on reference rows size, with empty strings
      const headersCount = currentQ.traceTable.headers.length;
      const rowsCount = currentQ.traceTable.rows.length;
      const initialUserRows = Array.from({ length: rowsCount }, () =>
        Array.from({ length: headersCount }, () => '')
      );
      setUserTraceRows(initialUserRows);
    } else {
      setUserTraceRows([]);
    }
  }, [questionIndex, filteredQuestions]);

  const handleLaunchMock = () => {
    navigate('/mock/new', { state: { preset: 'Pseudocode Drill' } });
  };

  const handleTraceCellChange = (rowIdx: number, colIdx: number, val: string) => {
    const updated = [...userTraceRows];
    updated[rowIdx] = [...updated[rowIdx]];
    updated[rowIdx][colIdx] = val;
    setUserTraceRows(updated);
  };

  const handleCheckTrace = () => {
    setTraceChecked(true);
    setTraceSubmitted(true);
    updateDailyChallengeProgress('pseudocode', 1);
  };

  return (
    <PageContainer>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <FileCode className="text-blue-400" />
            Pseudocode Assessment & Tracing
          </h2>
          <p className="text-xs text-slate-400">
            Predict output for nested loops, recursive callbacks, bitwise shifts, and pre/post increments.
          </p>
        </div>
        <PrimaryButton 
          onClick={handleLaunchMock}
          className="flex items-center justify-center gap-2 text-xs font-semibold py-2.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md uppercase tracking-wider"
        >
          <Play size={14} />
          Start Pseudocode Mock Drill
        </PrimaryButton>
      </div>

      {/* Categories Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-wrap gap-4 items-center justify-between shadow-md">
        <div className="flex items-center gap-2">
          {(['ALL', 'loops', 'recursion', 'bitwise'] as PseudoCategory[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition capitalize ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800/40 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {tab === 'ALL' ? 'All categories' : tab}
            </button>
          ))}
        </div>

        <select
          value={difficultyFilter}
          onChange={(e) => setDifficultyFilter(e.target.value as QuestionDifficulty | 'ALL')}
          className="bg-slate-950 border border-slate-850 rounded-lg p-2 text-xs text-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="ALL">All Difficulties</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      {/* Main layout splits when Trace Mode is active */}
      <div className="max-w-5xl mx-auto space-y-4">
        {filteredQuestions.length > 0 ? (
          (() => {
            const currentQ = filteredQuestions[questionIndex];
            const hasTrace = !!currentQ.traceTable;

            return (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                  <span>Question {questionIndex + 1} of {filteredQuestions.length}</span>
                  {hasTrace && (
                    <button
                      onClick={() => setIsTraceMode(!isTraceMode)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition ${
                        isTraceMode
                          ? 'bg-blue-600 text-white border-blue-500 shadow'
                          : 'bg-slate-850 border-slate-800 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <Clipboard size={14} />
                      {isTraceMode ? 'Exit Trace Mode' : 'Enter Interactive Trace Mode'}
                    </button>
                  )}
                </div>

                {!isTraceMode ? (
                  // Regular MCQ question view
                  <PracticeQuestion
                    question={currentQ}
                    onNext={() => setQuestionIndex((prev) => Math.min(filteredQuestions.length - 1, prev + 1))}
                    onPrevious={() => setQuestionIndex((prev) => Math.max(0, prev - 1))}
                  />
                ) : (
                  // Trace Mode view: side-by-side trace table editor
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    
                    {/* Left: Code block */}
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 space-y-4 shadow-xl">
                      <div className="flex items-center justify-between border-b border-slate-850 pb-3">
                        <span className="text-xs text-blue-400 font-bold uppercase">Tracing Target</span>
                        <span className="text-xs px-2 py-0.5 rounded font-bold uppercase bg-amber-500/10 text-amber-400">{currentQ.difficulty}</span>
                      </div>
                      <h4 className="text-slate-200 font-bold text-sm leading-relaxed">{currentQ.question}</h4>
                      <pre className="bg-slate-950 border border-slate-800 rounded-xl p-4 font-mono text-xs text-blue-300 overflow-x-auto whitespace-pre">
                        {currentQ.code}
                      </pre>
                    </div>

                    {/* Right: Tracing Input Table */}
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 space-y-6 shadow-xl">
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-slate-200">Interactive Execution Trace</h4>
                        <p className="text-[11px] text-slate-500">Trace the variables line-by-line as the loops iterate.</p>
                      </div>

                      {currentQ.traceTable && (
                        <div className="space-y-4">
                          <div className="overflow-x-auto border border-slate-800 rounded-lg">
                            <table className="w-full text-xs text-left border-collapse">
                              <thead>
                                <tr className="bg-slate-950 border-b border-slate-800 text-[10px] text-slate-400 uppercase font-semibold">
                                  {currentQ.traceTable.headers.map((h, idx) => (
                                    <th key={idx} className="p-3 font-semibold">{h}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {userTraceRows.map((row, rIdx) => (
                                  <tr key={rIdx} className="border-b border-slate-850 bg-slate-900/50">
                                    {row.map((cell, cIdx) => {
                                      const isHeaderFirstCol = cIdx === 0;
                                      const refVal = currentQ.traceTable?.rows[rIdx][cIdx];
                                      const isCorrect = cell.trim() === refVal?.trim();

                                      return (
                                        <td key={cIdx} className="p-2">
                                          {isHeaderFirstCol ? (
                                            <span className="text-[11px] font-bold text-slate-400 p-1.5 block">
                                              {refVal}
                                            </span>
                                          ) : (
                                            <div className="relative">
                                              <input
                                                type="text"
                                                disabled={traceSubmitted}
                                                value={cell}
                                                onChange={(e) => handleTraceCellChange(rIdx, cIdx, e.target.value)}
                                                className={`w-full max-w-[80px] bg-slate-950 border p-1 rounded font-mono text-center text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none ${
                                                  traceChecked
                                                    ? isCorrect
                                                      ? 'border-emerald-500 text-emerald-400 bg-emerald-500/5'
                                                      : 'border-rose-500 text-rose-400 bg-rose-500/5'
                                                    : 'border-slate-800 text-slate-200'
                                                }`}
                                                placeholder="?"
                                              />
                                              {traceChecked && !isCorrect && (
                                                <span className="absolute top-full left-0 text-[9px] text-emerald-400 font-semibold bg-slate-950 border border-slate-850 px-1 py-0.5 rounded shadow mt-0.5 z-10">
                                                  Ref: {refVal}
                                                </span>
                                              )}
                                            </div>
                                          )}
                                        </td>
                                      );
                                    })}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                          {!traceSubmitted ? (
                            <PrimaryButton 
                              onClick={handleCheckTrace}
                              className="py-1.5 px-4 text-xs font-semibold"
                            >
                              Check Trace Table
                            </PrimaryButton>
                          ) : (
                            <div className="space-y-4 pt-4 border-t border-slate-850 animate-fadeIn">
                              {/* Grading overview */}
                              <div className="p-4 bg-blue-500/5 border border-blue-500/10 rounded-xl space-y-3">
                                <h5 className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                                  <Award size={14} />
                                  Trace Verification & Explanation
                                </h5>
                                <p className="text-xs text-slate-400 leading-relaxed whitespace-pre-wrap">
                                  {currentQ.explanation}
                                </p>
                              </div>

                              {/* Question option selection preview (allows checking MCQ answer too) */}
                              <div className="p-4 bg-slate-950 border border-slate-850 rounded-xl space-y-3">
                                <h5 className="text-xs font-bold text-slate-300">Final Predicted Answer Check:</h5>
                                <div className="grid grid-cols-2 gap-2 text-xs">
                                  {currentQ.options.map((opt, oIdx) => (
                                    <div 
                                      key={oIdx}
                                      className={`p-2 rounded border font-semibold ${
                                        oIdx === currentQ.correctAnswer 
                                          ? 'border-emerald-500/40 bg-emerald-500/5 text-emerald-400' 
                                          : 'border-slate-850 text-slate-500'
                                      }`}
                                    >
                                      Option {oIdx + 1}: {opt} {oIdx === currentQ.correctAnswer && '(Correct)'}
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Navigation */}
                              <div className="flex justify-between items-center pt-2">
                                <SecondaryButton
                                  disabled={questionIndex === 0}
                                  onClick={() => setQuestionIndex(q => q - 1)}
                                  className="py-1 px-3 text-xs"
                                >
                                  Previous Question
                                </SecondaryButton>
                                <PrimaryButton
                                  disabled={questionIndex === filteredQuestions.length - 1}
                                  onClick={() => setQuestionIndex(q => q + 1)}
                                  className="py-1 px-3 text-xs"
                                >
                                  Next Question
                                </PrimaryButton>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                  </div>
                )}
              </div>
            );
          })()
        ) : (
          <EmptyState
            title="No questions found"
            description="Adjust your filters to continue."
            actionText="Clear Filters"
            onAction={() => {
              setActiveTab('ALL');
              setDifficultyFilter('ALL');
            }}
          />
        )}
      </div>

    </PageContainer>
  );
};

export default PseudocodePractice;
