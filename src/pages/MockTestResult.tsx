import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  PageContainer,
  PrimaryButton,
  SecondaryButton,
  EmptyState
} from '../components/UI';
import { Award, Clock, CheckCircle2, XCircle, AlertCircle, BarChart2 } from 'lucide-react';
import { AssessmentResult } from '../types';
import { getAssessment } from '../services/storageService';
import { calculateAssessmentResults } from '../services/assessmentEngine';

const MockTestResult: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [result, setResult] = useState<AssessmentResult | null>(null);

  useEffect(() => {
    try {
      const results = JSON.parse(localStorage.getItem('capgemini-prep:assessment-results') || '[]');
      let found = results.find((r: any) => r.id === id);
      if (!found && id) {
        const stateVal = getAssessment(id);
        if (stateVal) {
          found = calculateAssessmentResults(stateVal);
        }
      }
      if (found) {
        setResult(found);
      }
    } catch (e) {
      console.error('Failed to load assessment results from history', e);
    }
  }, [id]);

  if (!result) {
    return (
      <PageContainer>
        <EmptyState
          title="Result Not Found"
          description="We couldn't locate the metrics for this assessment. Ensure the test completed successfully."
          actionText="Back to Dashboard"
          onAction={() => navigate('/dashboard')}
        />
      </PageContainer>
    );
  }

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <PageContainer>
      {/* 1. Score Summary Header - Redesigned to White/Black */}
      <div className="bg-card border border-border-primary rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center gap-1.5 justify-center md:justify-start">
            <Award className="text-amber-500" size={18} />
            <span className="text-[10px] font-bold text-muted-text uppercase tracking-wider">Assessment Result Summary</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black text-foreground leading-tight">{result.name}</h2>
          <p className="text-[10px] text-muted-text font-bold uppercase tracking-wider">Date attempted: {new Date(result.date).toLocaleDateString()}</p>
        </div>

        <div className="flex items-center gap-4 bg-muted-bg p-4 rounded-xl border border-border-primary shadow-inner">
          <div className="text-center">
            <span className="text-3xl font-black text-foreground">{result.score}</span>
            <span className="text-muted-text text-base"> / {result.maxScore}</span>
            <p className="text-[9px] text-muted-text font-bold uppercase tracking-widest mt-1">Score</p>
          </div>
          <div className="w-px h-10 bg-border-primary" />
          <div className="text-center">
            <span className="text-3xl font-black text-blue-500">{result.percentage}%</span>
            <p className="text-[9px] text-muted-text font-bold uppercase tracking-widest mt-1">Rating</p>
          </div>
        </div>
      </div>

      {/* 2. Core Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-card border border-border-primary rounded-xl p-4 flex items-center gap-3">
          <CheckCircle2 className="text-emerald-500" size={18} />
          <div>
            <p className="text-[9px] text-muted-text font-bold uppercase tracking-wider">Correct</p>
            <h4 className="text-base font-extrabold text-foreground">{result.correct}</h4>
          </div>
        </div>

        <div className="bg-card border border-border-primary rounded-xl p-4 flex items-center gap-3">
          <XCircle className="text-rose-500" size={18} />
          <div>
            <p className="text-[9px] text-muted-text font-bold uppercase tracking-wider">Incorrect</p>
            <h4 className="text-base font-extrabold text-foreground">{result.incorrect}</h4>
          </div>
        </div>

        <div className="bg-card border border-border-primary rounded-xl p-4 flex items-center gap-3">
          <AlertCircle className="text-muted-text" size={18} />
          <div>
            <p className="text-[9px] text-muted-text font-bold uppercase tracking-wider">Skipped</p>
            <h4 className="text-base font-extrabold text-foreground">{result.skipped}</h4>
          </div>
        </div>

        <div className="bg-card border border-border-primary rounded-xl p-4 flex items-center gap-3">
          <Clock className="text-blue-500" size={18} />
          <div>
            <p className="text-[9px] text-muted-text font-bold uppercase tracking-wider">Elapsed Time</p>
            <h4 className="text-base font-extrabold text-foreground">{formatDuration(result.timeTakenSeconds)}</h4>
          </div>
        </div>
      </div>

      {/* 3. Section scores & Topic Breakdown split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left: Section Scores */}
        <div className="bg-card border border-border-primary rounded-xl p-5 md:p-6 space-y-4 shadow-sm lg:col-span-1">
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
            <BarChart2 size={16} className="text-blue-500" />
            Section Breakdown
          </h3>

          <div className="space-y-4 pt-2">
            {Object.entries(result.sectionScores).map(([secName, val]) => (
              <div key={secName} className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-foreground capitalize">
                  <span>{secName.replace('-', ' ')}</span>
                  <span>{val}%</span>
                </div>
                <div className="w-full bg-muted-bg rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="bg-blue-500 h-full rounded-full transition-all"
                    style={{ width: `${val}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center/Right: Topic Accuracy & Recommended practice */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Topic list */}
          <div className="bg-card border border-border-primary rounded-xl p-5 md:p-6 space-y-4 shadow-sm">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">Topic-level Performance</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              {Object.entries(result.topicBreakdown).map(([topic, data]) => {
                const acc = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
                return (
                  <div key={topic} className="p-3 bg-muted-bg border border-border-primary/50 rounded-xl flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-bold text-foreground capitalize">{topic}</h4>
                      <p className="text-[9px] text-muted-text font-semibold">{data.correct} / {data.total} solved</p>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase ${
                      acc >= 75 ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600' :
                      acc >= 50 ? 'bg-amber-500/10 border-amber-500/20 text-amber-600' :
                      'bg-rose-500/10 border-rose-500/20 text-rose-600'
                    }`}>
                      {acc}% Acc
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Recommendations */}
          <div className="bg-card border border-border-primary rounded-xl p-5 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">Recommended Focus Area:</h4>
              <p className="text-xs text-muted-text font-semibold">
                You scored lowest in <strong>{result.weakestTopic}</strong>. Practice this topic to increase your readiness.
              </p>
            </div>

            <div className="flex gap-3">
              <SecondaryButton onClick={() => navigate('/mistakes')} className="py-1.5 px-3">
                Open Mistakes
              </SecondaryButton>
              <PrimaryButton onClick={() => navigate('/dashboard')} className="py-1.5 px-4">
                Back to Dashboard
              </PrimaryButton>
            </div>
          </div>

        </div>

      </div>

    </PageContainer>
  );
};

export default MockTestResult;
