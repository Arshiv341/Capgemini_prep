import React, { useState, useEffect } from 'react';
import { Bookmark, AlertTriangle, Check, X, ArrowLeft, ArrowRight, HelpCircle } from 'lucide-react';
import { toggleBookmark, getBookmarks, saveAttempt, saveMistake, updateDailyChallengeProgress } from '../../services/storageService';
import { MCQQuestion, QuestionSection } from '../../types';
import { PrimaryButton, SecondaryButton } from '../UI';

interface PracticeQuestionProps {
  question: MCQQuestion & { code?: string };
  onNext?: () => void;
  onPrevious?: () => void;
  showNavigation?: boolean;
}

export const PracticeQuestion: React.FC<PracticeQuestionProps> = ({
  question,
  onNext,
  onPrevious,
  showNavigation = true,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [startTime, setStartTime] = useState(Date.now());
  const [reportSuccess, setReportSuccess] = useState(false);

  // Sync bookmarks state on question change
  useEffect(() => {
    const bookmarks = getBookmarks();
    setIsBookmarked(bookmarks.some((b) => b.questionId === question.id));
    setSelectedOption(null);
    setIsSubmitted(false);
    setStartTime(Date.now());
    setReportSuccess(false);
  }, [question.id]);

  // Keyboard shortcuts listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (!isSubmitted) {
        if (e.key === '1') setSelectedOption(0);
        if (e.key === '2') setSelectedOption(1);
        if (e.key === '3') setSelectedOption(2);
        if (e.key === '4') setSelectedOption(3);
        if (e.key === 'Enter' && selectedOption !== null) {
          handleSubmit();
        }
      } else {
        if (e.key === 'n' || e.key === 'N') {
          if (onNext) onNext();
        }
      }

      if (e.key === 'b' || e.key === 'B') {
        handleBookmark();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedOption, isSubmitted, question, onNext]);

  const handleBookmark = () => {
    const bookmarked = toggleBookmark(question.id, question.section);
    setIsBookmarked(bookmarked);
  };

  const handleSubmit = () => {
    if (selectedOption === null || isSubmitted) return;

    const timeSpentSeconds = Math.round((Date.now() - startTime) / 1000);
    const correct = selectedOption === question.correctAnswer;

    const attempt = {
      questionId: question.id,
      section: question.section,
      topic: question.topic,
      subtopic: question.subtopic,
      difficulty: question.difficulty,
      correct,
      timeSpentSeconds,
      selectedAnswer: selectedOption,
      date: new Date().toISOString(),
    };

    saveAttempt(attempt);

    if (!correct) {
      saveMistake(question.id, question.section, question.topic, question.subtopic);
    }

    updateDailyChallengeProgress(question.section, 1);
    setIsSubmitted(true);
  };

  const handleReportIssue = () => {
    setReportSuccess(true);
    setTimeout(() => setReportSuccess(false), 3000);
  };

  return (
    <div className="bg-card border border-border-primary rounded-xl p-5 md:p-6 space-y-6 shadow-sm">
      {/* Header Info */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-primary pb-4">
        <div className="flex items-center gap-2">
          <span className="text-[10px] px-2.5 py-1 bg-muted-bg text-foreground font-bold rounded-full border border-border-primary uppercase tracking-wider">
            {question.section.replace('-', ' ')}
          </span>
          <span className="text-border-primary font-bold">&bull;</span>
          <span className="text-[10px] text-muted-text font-bold uppercase tracking-wider">
            Topic: {question.topic}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span
            className={`text-[9px] px-2 py-0.5 rounded font-bold uppercase border ${
              question.difficulty === 'easy'
                ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600'
                : question.difficulty === 'medium'
                ? 'bg-amber-500/10 border-amber-500/20 text-amber-600'
                : 'bg-rose-500/10 border-rose-500/20 text-rose-600'
            }`}
          >
            {question.difficulty}
          </span>
          <button
            onClick={handleBookmark}
            className={`p-1.5 rounded-lg border transition cursor-pointer ${
              isBookmarked
                ? 'bg-blue-500/10 text-blue-500 border-blue-500/30'
                : 'text-muted-text border-border-primary hover:text-foreground'
            }`}
            title="Bookmark (B)"
          >
            <Bookmark size={16} fill={isBookmarked ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>

      {/* Scenario Text (Workplace messages) */}
      {question.scenario && (
        <div className="bg-muted-bg border border-border-primary rounded-xl p-4 text-foreground text-xs md:text-sm whitespace-pre-wrap leading-relaxed">
          {question.scenario}
        </div>
      )}

      {/* Question */}
      <div className="space-y-4">
        <h4 className="text-foreground font-bold text-sm md:text-base leading-snug">
          {question.question}
        </h4>

        {/* Code block */}
        {question.code && (
          <div className="bg-muted-bg/60 border border-border-primary rounded-xl p-4 font-mono text-xs text-blue-600 dark:text-blue-400 overflow-x-auto whitespace-pre leading-relaxed">
            {question.code}
          </div>
        )}
      </div>

      {/* Options Selection */}
      <div className="grid grid-cols-1 gap-3 pt-1">
        {question.options.map((option, idx) => {
          const isSelected = selectedOption === idx;
          const isCorrect = idx === question.correctAnswer;

          let btnClass = 'bg-card border-border-primary hover:bg-muted-bg/60 text-foreground';

          if (isSubmitted) {
            if (isCorrect) {
              btnClass = 'bg-emerald-500/10 border-emerald-500 text-emerald-600 font-bold';
            } else if (isSelected) {
              btnClass = 'bg-rose-500/10 border-rose-500 text-rose-600 font-bold';
            } else {
              btnClass = 'bg-card border-border-primary/50 text-muted-text opacity-50';
            }
          } else if (isSelected) {
            btnClass = 'bg-blue-500/10 border-blue-500 text-blue-600 font-bold shadow-inner';
          }

          return (
            <button
              key={idx}
              disabled={isSubmitted}
              onClick={() => setSelectedOption(idx)}
              className={`w-full text-left px-4 py-3.5 border rounded-lg text-xs md:text-sm transition duration-150 flex items-center justify-between cursor-pointer ${btnClass}`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-5 h-5 flex items-center justify-center rounded text-[10px] font-bold ${
                  isSelected ? 'bg-blue-500 text-white' : 'bg-muted-bg border border-border-primary/60 text-muted-text'
                }`}>
                  {idx + 1}
                </span>
                <span>{option}</span>
              </div>
              
              {isSubmitted && isCorrect && <Check size={16} className="text-emerald-500" />}
              {isSubmitted && isSelected && !isCorrect && <X size={16} className="text-rose-500" />}
            </button>
          );
        })}
      </div>

      {/* Action Row */}
      <div className="flex items-center justify-between pt-4 border-t border-border-primary">
        <div className="flex items-center gap-3">
          {showNavigation && onPrevious && (
            <SecondaryButton onClick={onPrevious} className="flex items-center gap-1 py-1.5 px-3 text-xs">
              <ArrowLeft size={12} />
              Prev
            </SecondaryButton>
          )}

          {!isSubmitted ? (
            <PrimaryButton
              onClick={handleSubmit}
              disabled={selectedOption === null}
              className="py-1.5 px-4 text-xs font-bold"
            >
              Submit Answer (Enter)
            </PrimaryButton>
          ) : (
            showNavigation && onNext && (
              <PrimaryButton onClick={onNext} className="flex items-center gap-1 py-1.5 px-4 text-xs font-bold">
                Next
                <ArrowRight size={12} />
              </PrimaryButton>
            )
          )}
        </div>

        <button
          onClick={handleReportIssue}
          className="text-[10px] font-bold text-muted-text hover:text-foreground flex items-center gap-1 bg-card py-1 px-2.5 rounded border border-border-primary cursor-pointer"
        >
          <AlertTriangle size={12} />
          {reportSuccess ? 'Reported!' : 'Report'}
        </button>
      </div>

      {/* Explanation Post-Submission */}
      {isSubmitted && (
        <div className="bg-muted-bg border border-border-primary rounded-lg p-4 space-y-3 animate-fadeIn">
          <div className="flex items-center gap-2 text-foreground font-bold text-xs uppercase tracking-wider">
            <HelpCircle size={14} className="text-blue-500" />
            <span>Explanation</span>
          </div>
          <div className="text-xs md:text-sm text-foreground/80 leading-relaxed whitespace-pre-wrap">
            {question.explanation}
          </div>
          
          <div className="pt-3 border-t border-border-primary/65 text-[10px] text-muted-text flex flex-wrap gap-x-6 gap-y-1">
            <span>Source: <strong className="text-foreground capitalize">{question.sourceType.replace('-', ' ')}</strong></span>
            {question.estimatedSeconds && <span>ETA: <strong className="text-foreground">{question.estimatedSeconds}s</strong></span>}
            <span>Topic: <strong className="text-foreground uppercase">{question.subtopic}</strong></span>
          </div>
        </div>
      )}
    </div>
  );
};
export default PracticeQuestion;
