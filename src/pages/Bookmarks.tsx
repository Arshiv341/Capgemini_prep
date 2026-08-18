import React, { useState, useEffect } from 'react';
import {
  PageContainer,
  PrimaryButton,
  SecondaryButton,
  EmptyState
} from '../components/UI';
import { Bookmark as BookmarkIcon, Trash2, ArrowRight, Play } from 'lucide-react';
import { getBookmarks, toggleBookmark } from '../services/storageService';
import { findQuestionById } from '../services/assessmentEngine';
import { PracticeQuestion } from '../components/assessment/PracticeQuestion';
import { Bookmark, QuestionSection } from '../types';

const Bookmarks: React.FC = () => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [selectedSection, setSelectedSection] = useState<QuestionSection | 'ALL'>('ALL');
  const [activePracticeQ, setActivePracticeQ] = useState<any | null>(null);

  useEffect(() => {
    setBookmarks(getBookmarks());
  }, []);

  const handleRemoveBookmark = (id: string, sec: QuestionSection) => {
    toggleBookmark(id, sec);
    setBookmarks(getBookmarks());
    if (activePracticeQ?.id === id) {
      setActivePracticeQ(null);
    }
  };

  const handlePracticeQuestion = (item: any) => {
    setActivePracticeQ(item);
  };

  const filtered = selectedSection === 'ALL'
    ? bookmarks
    : bookmarks.filter(b => b.section === selectedSection);

  return (
    <PageContainer>
      {/* Header */}
      <div className="border-b border-slate-800 pb-5 space-y-1">
        <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          <BookmarkIcon className="text-blue-400" />
          Saved Bookmarks
        </h2>
        <p className="text-xs text-slate-400">
          Review revision bookmarks you highlighted during assessments or practice runs.
        </p>
      </div>

      {activePracticeQ ? (
        <div className="space-y-4 max-w-3xl mx-auto">
          <SecondaryButton onClick={() => setActivePracticeQ(null)} className="text-xs py-1.5 px-3">
            &larr; Back to Bookmarks List
          </SecondaryButton>
          
          <PracticeQuestion
            question={activePracticeQ}
            showNavigation={false}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* Left/Middle: Bookmarks list */}
          <div className="lg:col-span-2 space-y-4">
            
            {/* Filter toolbar */}
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center justify-between shadow-md">
              <span className="text-xs font-bold text-slate-300">Saved items count: {filtered.length}</span>
              
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
                <option value="coding">Coding Problems</option>
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
                          <span className="text-[10px] text-slate-500 font-semibold uppercase">{item.section.replace('-', ' ')}</span>
                          <span className="text-slate-650">&bull;</span>
                          <span className="text-[10px] text-slate-500 font-semibold capitalize">{q.topic || 'General'}</span>
                        </div>
                        <h4 className="text-xs md:text-sm font-bold text-slate-300 truncate">{q.question || q.title || 'Review Question'}</h4>
                        <p className="text-[9px] text-slate-500">Bookmarked: {new Date(item.bookmarkedAt).toLocaleDateString()}</p>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => handleRemoveBookmark(item.questionId, item.section)}
                          className="p-1.5 text-slate-500 hover:text-rose-400 rounded-lg hover:bg-slate-850 transition"
                          title="Remove bookmark"
                        >
                          <Trash2 size={16} />
                        </button>
                        
                        <PrimaryButton 
                          onClick={() => handlePracticeQuestion(q)}
                          className="py-1 px-3 text-[10px] flex items-center gap-1"
                        >
                          Review <ArrowRight size={12} />
                        </PrimaryButton>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <EmptyState
                title="No saved bookmarks"
                description="Click the bookmark ribbon icon on questions during tests or practice runs to save them here for revision."
              />
            )}

          </div>

          {/* Right: Quick actions */}
          {filtered.length > 0 && (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 space-y-4 shadow-xl">
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Bookmarks Drill</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Start a practice revision quiz containing only your bookmarked items.
              </p>
              
              <PrimaryButton
                onClick={() => {
                  const randomQ = findQuestionById(filtered[Math.floor(Math.random() * filtered.length)].questionId);
                  if (randomQ) handlePracticeQuestion(randomQ);
                }}
                className="w-full text-xs font-bold uppercase tracking-wider py-2 flex items-center justify-center gap-1.5"
              >
                <Play size={14} fill="currentColor" />
                Practice Bookmarked Question
              </PrimaryButton>
            </div>
          )}

        </div>
      )}
    </PageContainer>
  );
};

export default Bookmarks;
