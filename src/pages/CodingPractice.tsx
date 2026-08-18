import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PageContainer,
  PrimaryButton,
  SecondaryButton,
  EmptyState
} from '../components/UI';
import { codingProblems } from '../data/coding/problems';
import { CodingProblem, QuestionDifficulty } from '../types';
import { updateDailyChallengeProgress } from '../services/storageService';
import { Code, BookOpen, Layers, Award, Clock, ArrowLeft, Lightbulb, Play, CheckCircle } from 'lucide-react';

const CodingPractice: React.FC = () => {
  const navigate = useNavigate();
  const [selectedProblem, setSelectedProblem] = useState<CodingProblem | null>(null);
  
  // Editor States
  const [activeLang, setActiveLang] = useState<'cpp' | 'java' | 'c'>('cpp');
  const [userCode, setUserCode] = useState('');
  const [showHintIndex, setShowHintIndex] = useState<number>(-1);
  const [revealApproach, setRevealApproach] = useState(false);
  const [revealSolution, setRevealSolution] = useState(false);
  const [codeSavedStatus, setCodeSavedStatus] = useState(false);

  // Mock Assessment States
  const [isMockMode, setIsMockMode] = useState(false);
  const [mockProblems, setMockProblems] = useState<CodingProblem[]>([]);
  const [mockTimeRemaining, setMockTimeRemaining] = useState(45 * 60); // 45 minutes
  const [mockFinished, setMockFinished] = useState(false);

  // Load saved code when switching language or problem
  useEffect(() => {
    if (selectedProblem) {
      const key = `capgemini-prep:coding-code:${selectedProblem.id}:${activeLang}`;
      const saved = localStorage.getItem(key);
      if (saved) {
        setUserCode(saved);
      } else {
        // Load default starter template
        const defaultCode = activeLang === 'cpp'
          ? `#include <iostream>\n#include <vector>\nusing namespace std;\n\n// Write your solution here\n`
          : activeLang === 'java'
          ? `import java.util.*;\n\nclass Solution {\n    // Write your solution here\n}\n`
          : `#include <stdio.h>\n#include <stdlib.h>\n\n// Write your solution here\n`;
        setUserCode(defaultCode);
      }
      setShowHintIndex(-1);
      setRevealApproach(false);
      setRevealSolution(false);
      setCodeSavedStatus(false);
    }
  }, [selectedProblem, activeLang]);

  // Mock Timer
  useEffect(() => {
    let interval: any;
    if (isMockMode && !mockFinished && mockTimeRemaining > 0) {
      interval = setInterval(() => {
        setMockTimeRemaining((prev) => prev - 1);
      }, 1000);
    } else if (isMockMode && !mockFinished && mockTimeRemaining === 0) {
      handleFinishMock();
    }
    return () => clearInterval(interval);
  }, [isMockMode, mockFinished, mockTimeRemaining]);

  const handleSaveCode = () => {
    if (!selectedProblem) return;
    const key = `capgemini-prep:coding-code:${selectedProblem.id}:${activeLang}`;
    localStorage.setItem(key, userCode);
    
    // Save completion/attempt state
    try {
      const attempts = JSON.parse(localStorage.getItem('capgemini-prep:attempt-history') || '[]');
      attempts.push({
        questionId: selectedProblem.id,
        section: 'coding',
        topic: selectedProblem.topics[0],
        subtopic: selectedProblem.topics[1] || 'General',
        difficulty: selectedProblem.difficulty,
        correct: true, // code completion is self-evaluated as completed/correct
        timeSpentSeconds: 120,
        date: new Date().toISOString()
      });
      localStorage.setItem('capgemini-prep:attempt-history', JSON.stringify(attempts));
    } catch (e) {}

    updateDailyChallengeProgress('coding', 1);

    setCodeSavedStatus(true);
    setTimeout(() => setCodeSavedStatus(false), 3500);
  };

  const handleResetCode = () => {
    if (window.confirm('Are you sure you want to reset the editor code?')) {
      const key = `capgemini-prep:coding-code:${selectedProblem?.id}:${activeLang}`;
      localStorage.removeItem(key);
      const defaultCode = activeLang === 'cpp'
        ? `#include <iostream>\n#include <vector>\nusing namespace std;\n`
        : activeLang === 'java'
        ? `import java.util.*;\n\nclass Solution {}`
        : `#include <stdio.h>\n#include <stdlib.h>\n`;
      setUserCode(defaultCode);
    }
  };

  // Launch timed coding mock
  const handleStartMock = () => {
    const easyMed = codingProblems.filter(p => p.difficulty === 'easy' || p.difficulty === 'medium');
    const medHard = codingProblems.filter(p => p.difficulty === 'medium' || p.difficulty === 'hard');
    
    const p1 = easyMed[Math.floor(Math.random() * easyMed.length)];
    let p2 = medHard.find(p => p.id !== p1.id);
    if (!p2) p2 = codingProblems.find(p => p.id !== p1.id) || p1;

    setMockProblems([p1, p2]);
    setSelectedProblem(p1);
    setIsMockMode(true);
    setMockTimeRemaining(45 * 60);
    setMockFinished(false);
  };

  const handleFinishMock = () => {
    setMockFinished(true);
    updateDailyChallengeProgress('coding', 2);
  };

  const handleExitMock = () => {
    if (window.confirm('Are you sure you want to exit the mock coding test? Current code drafts will be saved locally.')) {
      setIsMockMode(false);
      setSelectedProblem(null);
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <PageContainer>
      {/* Mock Header overlay when active */}
      {isMockMode && (
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
            <h3 className="text-sm font-bold text-slate-200">Capgemini 45-Min Coding Mock</h3>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-slate-300 font-mono text-sm font-bold bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
              <Clock size={16} className="text-red-400" />
              <span>{formatTime(mockTimeRemaining)}</span>
            </div>
            
            <div className="flex gap-2">
              {mockProblems.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedProblem(p)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                    selectedProblem?.id === p.id
                      ? 'bg-blue-600 border-blue-500 text-white'
                      : 'bg-slate-850 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Q{idx + 1}: {p.title}
                </button>
              ))}
            </div>

            {!mockFinished ? (
              <PrimaryButton onClick={handleFinishMock} className="text-xs bg-red-600 hover:bg-red-500 font-bold py-1.5 px-3">
                Finish Test
              </PrimaryButton>
            ) : (
              <SecondaryButton onClick={handleExitMock} className="text-xs py-1.5 px-3">
                Back to Practice
              </SecondaryButton>
            )}
          </div>
        </div>
      )}

      {/* Main browser grid or detailed editor */}
      {!selectedProblem ? (
        <div className="space-y-6">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <Code className="text-blue-400" />
                Coding Arena
              </h2>
              <p className="text-xs text-slate-400">
                Sharpen array manipulation, sliding windows, heaps, and tree traversal algorithms.
              </p>
            </div>
            <PrimaryButton 
              onClick={handleStartMock}
              className="flex items-center justify-center gap-2 text-xs font-semibold py-2.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md uppercase tracking-wider"
            >
              <Layers size={14} />
              Start 45-Min Coding Mock (2 Qs)
            </PrimaryButton>
          </div>

          {/* List of problems */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {codingProblems.map((prob) => (
              <div 
                key={prob.id}
                onClick={() => setSelectedProblem(prob)}
                className="bg-slate-900 border border-slate-800/80 rounded-xl p-5 shadow-lg hover:border-blue-500/50 hover:bg-slate-850 transition cursor-pointer flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-500">{prob.id}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                      prob.difficulty === 'easy'
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : prob.difficulty === 'medium'
                        ? 'bg-amber-500/10 text-amber-400'
                        : 'bg-rose-500/10 text-rose-400'
                    }`}>
                      {prob.difficulty}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-200">{prob.title}</h4>
                  <p className="text-xs text-slate-400 line-clamp-3">{prob.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-1.5">
                  {prob.topics.map(t => (
                    <span key={t} className="text-[9px] bg-slate-850 px-2 py-0.5 rounded text-slate-500 uppercase font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      ) : (
        // Problem Workspace view
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          
          {/* Left panel: Problem Description */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 space-y-6 shadow-xl lg:sticky lg:top-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-850 pb-3">
              {!isMockMode && (
                <button
                  onClick={() => setSelectedProblem(null)}
                  className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200"
                >
                  <ArrowLeft size={14} />
                  Back to List
                </button>
              )}
              <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                selectedProblem.difficulty === 'easy'
                  ? 'bg-emerald-500/10 text-emerald-400'
                  : selectedProblem.difficulty === 'medium'
                  ? 'bg-amber-500/10 text-amber-400'
                  : 'bg-rose-500/10 text-rose-400'
              }`}>
                {selectedProblem.difficulty}
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-slate-100">{selectedProblem.title}</h2>
              <div className="flex flex-wrap gap-1.5">
                {selectedProblem.topics.map(t => (
                  <span key={t} className="text-[9px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-semibold uppercase">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Statement */}
            <div className="text-xs md:text-sm text-slate-300 whitespace-pre-wrap leading-relaxed">
              {selectedProblem.description}
            </div>

            {/* Specifications */}
            <div className="space-y-3.5 pt-3 border-t border-slate-850 text-xs">
              <div className="space-y-1">
                <p className="font-bold text-slate-400">Input Format:</p>
                <p className="text-slate-300 leading-normal">{selectedProblem.inputFormat}</p>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-slate-400">Output Format:</p>
                <p className="text-slate-300 leading-normal">{selectedProblem.outputFormat}</p>
              </div>
              
              <div className="space-y-1">
                <p className="font-bold text-slate-400">Constraints:</p>
                <ul className="list-disc list-inside space-y-0.5 text-slate-400 font-mono text-[11px]">
                  {selectedProblem.constraints.map((c, idx) => (
                    <li key={idx}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Examples */}
            <div className="space-y-4 pt-3 border-t border-slate-850">
              {selectedProblem.examples.map((ex, idx) => (
                <div key={idx} className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-850">
                  <p className="text-xs font-bold text-slate-300">Example {idx + 1}:</p>
                  <div className="space-y-1 font-mono text-[11px] leading-relaxed">
                    <p><span className="text-slate-500">Input:</span> <span className="text-slate-200">{ex.input}</span></p>
                    <p><span className="text-slate-500">Output:</span> <span className="text-emerald-400">{ex.output}</span></p>
                    {ex.explanation && (
                      <p className="text-slate-400 text-xs leading-normal mt-1 whitespace-pre-wrap">
                        <span className="text-slate-500 font-bold">Explanation:</span> {ex.explanation}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Practice Helper Hints */}
            {!isMockMode && (
              <div className="space-y-3 pt-3 border-t border-slate-850">
                <div className="flex items-center gap-1.5 text-slate-300 font-bold text-xs">
                  <Lightbulb size={14} className="text-amber-400" />
                  <span>Hints & Approaches</span>
                </div>
                <div className="flex gap-2">
                  {selectedProblem.hints.map((_, hIdx) => (
                    <button
                      key={hIdx}
                      onClick={() => setShowHintIndex(hIdx)}
                      className={`text-[10px] py-1 px-2.5 rounded-lg border font-semibold transition ${
                        showHintIndex === hIdx
                          ? 'bg-amber-500/10 border-amber-500 text-amber-400'
                          : 'bg-slate-850 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Hint {hIdx + 1}
                    </button>
                  ))}
                </div>

                {showHintIndex >= 0 && (
                  <div className="p-3 bg-slate-950 border border-slate-850 rounded-xl text-xs text-slate-400 italic">
                    {selectedProblem.hints[showHintIndex]}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right panel: Code Editor Workspace */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 space-y-4 shadow-xl">
            
            {/* Editor toolbar */}
            <div className="flex items-center justify-between border-b border-slate-850 pb-3">
              <div className="flex items-center gap-1.5">
                {(['cpp', 'java', 'c'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveLang(lang)}
                    className={`px-3 py-1 rounded text-xs font-bold uppercase transition ${
                      activeLang === lang
                        ? 'bg-slate-800 text-blue-400 border border-slate-700'
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {lang === 'cpp' ? 'C++' : lang === 'java' ? 'Java' : 'C'}
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleResetCode}
                  className="text-xs text-slate-500 hover:text-slate-300 bg-slate-850 p-1.5 px-3 rounded border border-slate-800"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Main Textarea Editor */}
            <div className="relative">
              <textarea
                rows={18}
                value={userCode}
                onChange={(e) => setUserCode(e.target.value)}
                className="w-full bg-slate-950 border border-slate-850 rounded-xl p-4 font-mono text-[12px] leading-relaxed text-blue-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
                spellCheck={false}
              />
              <div className="absolute bottom-2 right-2 text-[10px] font-mono text-slate-600">
                TAB spacing disabled. Copy/paste allowed.
              </div>
            </div>

            {/* Saved indicator */}
            {codeSavedStatus && (
              <div className="p-3 bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 text-xs rounded-xl flex items-center gap-2">
                <CheckCircle size={14} />
                <span>Code compiled internally and drafted locally! Progress recorded in Daily Challenge.</span>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <PrimaryButton onClick={handleSaveCode} className="text-xs py-2 px-5 font-bold uppercase shadow-md">
                Compile & Save Code
              </PrimaryButton>

              {!isMockMode && (
                <div className="flex gap-2">
                  <SecondaryButton
                    onClick={() => {
                      setRevealApproach(!revealApproach);
                      setRevealSolution(false);
                    }}
                    className={`text-xs py-2 px-3 flex items-center gap-1 ${
                      revealApproach ? 'border-blue-500 text-blue-400' : ''
                    }`}
                  >
                    Reveal Approach
                  </SecondaryButton>
                  <SecondaryButton
                    onClick={() => {
                      setRevealSolution(!revealSolution);
                      setRevealApproach(false);
                    }}
                    className={`text-xs py-2 px-3 flex items-center gap-1 ${
                      revealSolution ? 'border-blue-500 text-blue-400' : ''
                    }`}
                  >
                    Reveal Solution
                  </SecondaryButton>
                </div>
              )}
            </div>

            {/* Revealed panels */}
            {revealApproach && (
              <div className="bg-slate-950 border border-slate-850 rounded-xl p-4 space-y-3 animate-fadeIn text-xs">
                <h5 className="font-bold text-slate-300">Optimal Complexity Limits</h5>
                <div className="grid grid-cols-2 gap-4 text-slate-400 font-semibold uppercase text-[10px]">
                  <div>Time Complexity: <strong className="text-slate-200">{selectedProblem.expectedTimeComplexity}</strong></div>
                  <div>Space Complexity: <strong className="text-slate-200">{selectedProblem.expectedSpaceComplexity}</strong></div>
                </div>
                <div className="text-slate-400 leading-relaxed border-t border-slate-900 pt-2 whitespace-pre-line">
                  <strong>Solution Strategy:</strong> The approach for this problem utilizes standard tracking patterns to complete key swaps or frequency lookups. Take care to handle edge conditions such as empty constraints or bounds boundary indices.
                </div>
              </div>
            )}

            {revealSolution && (
              <div className="bg-slate-950 border border-slate-850 rounded-xl p-4 space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                  <h5 className="text-xs font-bold text-slate-300 uppercase">Optimal {activeLang === 'cpp' ? 'C++' : activeLang === 'java' ? 'Java' : 'C'} Code</h5>
                  <span className="text-[10px] text-slate-500 italic">Self-review reference</span>
                </div>
                <pre className="font-mono text-[11px] text-emerald-400 overflow-x-auto whitespace-pre p-2 bg-slate-900 rounded border border-slate-950 leading-relaxed">
                  {selectedProblem.solutions[activeLang]}
                </pre>
              </div>
            )}

            {/* Mock completion status panel */}
            {isMockMode && mockFinished && (
              <div className="bg-slate-950 border border-slate-850 rounded-xl p-5 space-y-4 animate-fadeIn">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <CheckCircle size={16} />
                  <span>Mock Coding Review</span>
                </div>
                
                <div className="text-xs text-slate-400 leading-normal space-y-2">
                  <p><strong>Evaluation Summary:</strong> Two questions were loaded inside this session. Code backups are stored under browser LocalStorage per key reference.</p>
                  <p><strong>Complexity Standard:</strong> First problem requires <strong>O(n)</strong> runtime. Second problem demands optimized hash matching in <strong>O(n)</strong>.</p>
                </div>

                <div className="pt-2 border-t border-slate-900 space-y-3">
                  <p className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">Optimal Reference Code Solutions:</p>
                  <pre className="font-mono text-[10px] text-emerald-400 overflow-x-auto whitespace-pre p-3 bg-slate-900 rounded border border-slate-950">
                    {selectedProblem.solutions[activeLang]}
                  </pre>
                </div>
              </div>
            )}

          </div>

        </div>
      )}
    </PageContainer>
  );
};

export default CodingPractice;
