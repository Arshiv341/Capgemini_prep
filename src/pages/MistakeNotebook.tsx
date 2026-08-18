import React, { useState, useEffect } from 'react';
import {
  PageContainer,
  PrimaryButton,
  SecondaryButton,
  EmptyState
} from '../components/UI';
import { AlertTriangle, Trash2, ArrowRight, Play } from 'lucide-react';
import { getMistakes, removeMistake } from '../services/storageService';
import { findQuestionById } from '../services/assessmentEngine';
import { PracticeQuestion } from '../components/assessment/PracticeQuestion';
import { MistakeEntry, QuestionSection } from '../types';

const MistakeNotebook: React.FC = () => {
  const [mistakes, setMistakes] = useState<MistakeEntry[]>([]);
  const [selectedSection, setSelectedSection] = useState<QuestionSection | 'ALL'>('ALL');
  const [activePracticeQ, setActivePracticeQ] = useState<any | null>(null);

  useEffect(() => {
    setMistakes(getMistakes());
  }, []);

  const handleRemove = (id: string) => {
    if (window.confirm('Remove this question from the Mistake Notebook?')) {
      removeMistake(id);
      setMistakes(getMistakes());
      if (activePracticeQ?.id === id) {
        setActivePracticeQ(null);
      }
    }
  };

  const handlePracticeQuestion = (item: any) => {
    setActivePracticeQ(item);
  };

  // Filtered mistakes list
  const filtered = selectedSection === 'ALL' 
    ? mistakes 
    : mistakes.filter(m => m.section === selectedSection);

  return (
    <PageContainer>
      {/* Header */}
      <div className="border-b border-slate-800 pb-5 space-y-1">
        <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          <AlertTriangle className="text-rose-400" />
          Mistake Notebook
        </h2>
        <p className="text-xs text-slate-400">
          Review and practice questions you previously answered incorrectly. Get them right to clear them from your notebook.
        </p>
      </div>

      {activePracticeQ ? (
        <div className="space-y-4 max-w-3xl mx-auto">
          <SecondaryButton onClick={() => setActivePracticeQ(null)} className="text-xs py-1.5 px-3">
            &larr; Back to Mistakes List
          </SecondaryButton>
          
          <PracticeQuestion
            question={activePracticeQ}
            showNavigation={false}
          />

          <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center justify-between text-xs text-slate-400">
            <span>Did you solve it correctly? Click remove to clear it from the notebook.</span>
            <button
              onClick={() => handleRemove(activePracticeQ.id)}
              className="text-red-400 font-semibold hover:underline flex items-center gap-1"
            >
              <Trash2 size={12} />
              Clear from Notebook
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* Left/Middle: Mistakes list */}
          <div className="lg:col-span-2 space-y-4">
            
            {/* Filter toolbar */}
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center justify-between shadow-md">
              <span className="text-xs font-bold text-slate-300">Total mistakes recorded: {filtered.length}</span>
              
              <select
                value={selectedSection}
                onChange={(e) => setSelectedSection(e.target.value as QuestionSection | 'ALL')}
                className="bg-slate-950 border border-slate-850 p-2 rounded-lg text-xs text-slate-350 focus:outline-none"
              >
                <option value="ALL">All Sections</option>
                <option value="situational-awareness">Situational Awareness</option>
                <option value="grammar">Grammar</option>
                <option value="technical">Technical MCQ</option>
                <option value="pseudocode">Pseudocode</option>
              </select>
            </div>

            {/* List */}
            {filtered.length > 0 ? (
              <div className="space-y-3.5">
                {filtered.map((item) => {
                  const q = findQuestionById(item.questionId);
                  if (!q) return null;

                  return (
                    <div 
                      key={item.questionId}
                      className="bg-slate-900 border border-slate-850 p-4 rounded-xl hover:border-slate-750 transition flex items-center justify-between gap-4"
                    >
                      <div className="space-y-1.5 flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[9px] font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20 uppercase tracking-wider">
                            Failed {item.wrongCount}x
                          </span>
                          <span className="text-[10px] text-slate-500 font-semibold uppercase">{item.section.replace('-', ' ')}</span>
                          <span className="text-slate-650">&bull;</span>
                          <span className="text-[10px] text-slate-500 font-semibold capitalize">{item.topic}</span>
                        </div>
                        <h4 className="text-xs md:text-sm font-bold text-slate-300 truncate">{q.question}</h4>
                        <p className="text-[9px] text-slate-500">Last attempted: {new Date(item.lastAttemptedAt).toLocaleDateString()}</p>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => handleRemove(item.questionId)}
                          className="p-1.5 text-slate-500 hover:text-rose-400 rounded-lg hover:bg-slate-850 transition"
                          title="Remove mistake"
                        >
                          <Trash2 size={16} />
                        </button>
                        
                        <PrimaryButton 
                          onClick={() => handlePracticeQuestion(q)}
                          className="py-1 px-3 text-[10px] flex items-center gap-1"
                        >
                          Solve <ArrowRight size={12} />
                        </PrimaryButton>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <EmptyState
                title="Your notebook is clean!"
                description="Any questions you answer incorrectly during practice or mocks will automatically log here for review."
              />
            )}

          </div>

          {/* Right: Quick actions */}
          {filtered.length > 0 && (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 space-y-4 shadow-xl">
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Mistakes Practice</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Take a specialized quiz containing only the questions currently inside your Mistake Notebook.
              </p>
              
              <PrimaryButton
                onClick={() => {
                  const randomQ = findQuestionById(filtered[Math.floor(Math.random() * filtered.length)].questionId);
                  if (randomQ) handlePracticeQuestion(randomQ);
                }}
                className="w-full text-xs font-bold uppercase tracking-wider py-2 flex items-center justify-center gap-1.5"
              >
                <Play size={14} fill="currentColor" />
                Practice Random Mistake
              </PrimaryButton>
            </div>
          )}

        </div>
      )}
    </PageContainer>
  );
};

export default MistakeNotebook;
