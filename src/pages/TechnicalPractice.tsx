import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PageContainer,
  PrimaryButton,
  SecondaryButton,
  EmptyState
} from '../components/UI';
import { PracticeQuestion } from '../components/assessment/PracticeQuestion';
import { Award, BookOpen, Layers, Filter, CheckCircle } from 'lucide-react';
import { technicalQuestions } from '../data/technical/mcqs';
import { getAttempts, getBookmarks, getMistakes } from '../services/storageService';
import { MCQQuestion, QuestionDifficulty } from '../types';

type TechTabType = 'ALL' | 'OOP' | 'DBMS' | 'Operating Systems' | 'Computer Networks' | 'Cloud' | 'Software Engineering' | 'DSA' | 'SQL';
type StatusFilterType = 'ALL' | 'UNATTEMPTED' | 'INCORRECT' | 'BOOKMARKED';

const TechnicalPractice: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TechTabType>('ALL');
  const [difficultyFilter, setDifficultyFilter] = useState<QuestionDifficulty | 'ALL'>('ALL');
  const [statusFilter, setStatusFilter] = useState<StatusFilterType>('ALL');
  const [filteredQuestions, setFilteredQuestions] = useState<MCQQuestion[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);

  // Core filter logic
  useEffect(() => {
    const attempts = getAttempts();
    const bookmarks = getBookmarks();
    const mistakes = getMistakes();

    const attemptedIds = new Set(attempts.map((a) => a.questionId));
    const bookmarkedIds = new Set(bookmarks.map((b) => b.questionId));
    const mistakeIds = new Set(mistakes.map((m) => m.questionId));

    let list = technicalQuestions;

    // 1. Topic Tab Filter
    if (activeTab !== 'ALL') {
      list = list.filter((q) => q.topic.toLowerCase() === activeTab.toLowerCase());
    }

    // 2. Difficulty Filter
    if (difficultyFilter !== 'ALL') {
      list = list.filter((q) => q.difficulty === difficultyFilter);
    }

    // 3. Status Filter (Unattempted, Bookmarked, Incorrect)
    if (statusFilter === 'UNATTEMPTED') {
      list = list.filter((q) => !attemptedIds.has(q.id));
    } else if (statusFilter === 'BOOKMARKED') {
      list = list.filter((q) => bookmarkedIds.has(q.id));
    } else if (statusFilter === 'INCORRECT') {
      list = list.filter((q) => mistakeIds.has(q.id));
    }

    setFilteredQuestions(list);
    setQuestionIndex(0); // reset page on filter change
  }, [activeTab, difficultyFilter, statusFilter]);

  const handleLaunchTechMock = () => {
    navigate('/mock/new', { state: { preset: 'Technical Screening' } });
  };

  return (
    <PageContainer>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Award className="text-blue-400" />
            Technical MCQ Practice
          </h2>
          <p className="text-xs text-slate-400">
            Study OOP concepts, normalization join keys, OS deadlock mutual exclusions, and computer network protocols.
          </p>
        </div>
        <PrimaryButton 
          onClick={handleLaunchTechMock}
          className="flex items-center justify-center gap-2 text-xs font-semibold py-2.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md uppercase tracking-wider"
        >
          <Layers size={14} />
          Start 40-Question Technical Mock
        </PrimaryButton>
      </div>

      {/* Filter Toolbar Panel */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-wrap gap-4 items-center justify-between shadow-md">
        
        {/* Topic tabs scrollbar */}
        <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 -mb-1 scrollbar-none">
          {(['ALL', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks', 'Cloud', 'Software Engineering', 'DSA', 'SQL'] as TechTabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800/40 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dropdown Filters */}
        <div className="flex items-center gap-3">
          {/* Difficulty Dropdown */}
          <div className="flex items-center gap-1.5">
            <Filter size={14} className="text-slate-500" />
            <select
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value as QuestionDifficulty | 'ALL')}
              className="bg-slate-950 border border-slate-850 rounded-lg p-2 text-xs text-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="ALL">All Difficulties</option>
              <option value="easy">Easy (35%)</option>
              <option value="medium">Medium (50%)</option>
              <option value="hard">Hard (15%)</option>
            </select>
          </div>

          {/* Status Dropdown */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as StatusFilterType)}
            className="bg-slate-950 border border-slate-850 rounded-lg p-2 text-xs text-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="ALL">All Questions</option>
            <option value="UNATTEMPTED">Unattempted Only</option>
            <option value="INCORRECT">Incorrect Notebook</option>
            <option value="BOOKMARKED">Bookmarked Only</option>
          </select>
        </div>

      </div>

      {/* Main MCQ display area */}
      <div className="max-w-3xl mx-auto space-y-4">
        {filteredQuestions.length > 0 ? (
          <>
            <div className="flex items-center justify-between text-xs text-slate-400 px-1">
              <span>Question {questionIndex + 1} of {filteredQuestions.length}</span>
              <span className="font-semibold text-blue-400 capitalize">
                {activeTab === 'ALL' ? 'Mixed' : activeTab} set
              </span>
            </div>
            
            <PracticeQuestion
              question={filteredQuestions[questionIndex]}
              onNext={() => setQuestionIndex((prev) => Math.min(filteredQuestions.length - 1, prev + 1))}
              onPrevious={() => setQuestionIndex((prev) => Math.max(0, prev - 1))}
              showNavigation={true}
            />
          </>
        ) : (
          <div className="py-12">
            <EmptyState
              title="No MCQs found"
              description="No questions match the current combination of topic, difficulty, or bookmarks. Adjust your filters to continue."
              actionText="Reset Filters"
              onAction={() => {
                setActiveTab('ALL');
                setDifficultyFilter('ALL');
                setStatusFilter('ALL');
              }}
            />
          </div>
        )}
      </div>

    </PageContainer>
  );
};

export default TechnicalPractice;
