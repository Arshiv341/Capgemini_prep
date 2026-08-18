import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  StatsCard,
  SectionCard,
  PrimaryButton,
  PageContainer,
} from '../components/UI';
import {
  Flame,
  Award,
  BookOpen,
  FileQuestion,
  Code,
  CheckSquare,
  TrendingUp,
  Bookmark,
  AlertTriangle,
  HelpCircle,
  Play,
  Info
} from 'lucide-react';
import { calculateUserStats } from '../services/statistics';
import { getDailyChallenge } from '../services/storageService';
import { UserStats, DailyChallenge } from '../types';

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<UserStats | null>(null);
  const [challenge, setChallenge] = useState<DailyChallenge | null>(null);

  useEffect(() => {
    setStats(calculateUserStats());
    setChallenge(getDailyChallenge());
  }, []);

  if (!stats) return null;

  const targets = challenge ? challenge.tasks : [];

  return (
    <PageContainer>
      {/* Hero Greeting Panel - Redesigned to Neutral White/Black */}
      <div className="bg-card border border-border-primary rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-black text-foreground">Ready for your next Capgemini mock?</h2>
          <p className="text-xs text-muted-text max-w-xl leading-relaxed">
            Simulate the multi-stage 7 LPA assessment environment. Track your speed, review wrong answers in the Mistake Notebook, and master recursion/bitwise operators.
          </p>
        </div>
        <Link to="/mock/new" className="w-full md:w-auto">
          <PrimaryButton className="w-full py-3 px-6 text-xs flex items-center justify-center gap-2 shadow-sm font-bold uppercase tracking-wider">
            <Play size={14} fill="currentColor" />
            Launch Full Mock Test
          </PrimaryButton>
        </Link>
      </div>

      {/* Main Readiness and Target Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left: Overall Readiness Score Widget */}
        <div className="bg-card border border-border-primary rounded-xl p-6 space-y-6 shadow-sm flex flex-col justify-between">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">Overall Readiness</h3>
            <p className="text-[10px] text-muted-text font-semibold">Derived from accuracy, speed, and topic coverage</p>
          </div>

          <div className="flex flex-col items-center justify-center py-4 space-y-2">
            <div className="relative w-32 h-32 flex items-center justify-center rounded-full bg-muted-bg border border-border-primary shadow-sm">
              {/* Outer colored gauge ring */}
              <div 
                className={`absolute inset-0 rounded-full border-4 ${
                  stats.overallReadiness >= 75 ? 'border-emerald-500' :
                  stats.overallReadiness >= 50 ? 'border-amber-500' :
                  stats.totalQuestionsAttempted === 0 ? 'border-border-primary' : 'border-rose-500'
                }`}
              />
              <div className="flex flex-col items-center z-10">
                <span className="text-3xl font-black text-foreground tracking-tight">{stats.overallReadiness}%</span>
                <span className="text-[9px] text-muted-text font-bold uppercase tracking-widest">Readiness</span>
              </div>
            </div>
            {stats.totalQuestionsAttempted === 0 && (
              <span className="text-[10px] text-muted-text italic">Attempt questions to calculate</span>
            )}
          </div>

          {/* Section breakdowns */}
          <div className="space-y-3">
            {[
              { name: 'English Communication', key: 'english' },
              { name: 'Technical Assessment', key: 'technical' },
              { name: 'Pseudocode Tracing', key: 'pseudocode' },
              { name: 'Coding Round', key: 'coding' },
              { name: 'Cognitive Games', key: 'cognitive' },
              { name: 'Interview Preparation', key: 'interview' }
            ].map((sec) => (
              <div key={sec.key} className="space-y-1">
                <div className="flex justify-between text-[11px] font-bold text-foreground">
                  <span>{sec.name}</span>
                  <span>{stats.sectionScores[sec.key] || 0}%</span>
                </div>
                <div className="w-full bg-muted-bg rounded-full h-1.5 border border-border-primary/40 overflow-hidden">
                  <div 
                    className="bg-blue-500 h-full rounded-full transition-all duration-300"
                    style={{ width: `${stats.sectionScores[sec.key] || 0}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center: Today's Targets List */}
        <div className="bg-card border border-border-primary rounded-xl p-6 space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">Today's Targets</h3>
            <span className="text-[10px] text-blue-500 font-bold uppercase">{challenge?.completed ? 'Challenge Completed!' : 'Daily Challenge'}</span>
          </div>
          <p className="text-xs text-muted-text leading-relaxed">
            Complete today's challenge to maintain your streak and boost your score.
          </p>

          <div className="space-y-3.5 pt-2">
            {targets.map((task) => {
              const isDone = task.completed >= task.target;
              return (
                <div 
                  key={task.id} 
                  className={`flex items-start gap-3 p-3 rounded-xl border transition ${
                    isDone ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-card border-border-primary'
                  }`}
                >
                  <div className={`mt-0.5 w-4 h-4 flex items-center justify-center rounded border ${
                    isDone ? 'bg-emerald-500 border-emerald-400 text-white' : 'border-border-primary text-transparent'
                  }`}>
                    {isDone && <CheckSquare size={12} className="stroke-[3px]" />}
                  </div>
                  <div className="flex-1 space-y-1 min-w-0">
                    <p className={`text-xs font-bold truncate ${isDone ? 'text-muted-text line-through' : 'text-foreground'}`}>
                      {task.description}
                    </p>
                    <div className="flex items-center justify-between text-[9px] text-muted-text">
                      <span>Progress</span>
                      <span className="font-semibold text-foreground">{task.completed} / {task.target} solved</span>
                    </div>
                    <div className="w-full bg-muted-bg rounded-full h-1 overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${isDone ? 'bg-emerald-500' : 'bg-blue-500'}`}
                        style={{ width: `${Math.min(100, (task.completed / task.target) * 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Quick Performance Widgets */}
        <div className="space-y-6">
          
          {/* Quick stats widget */}
          <div className="grid grid-cols-2 gap-4">
            <StatsCard 
              title="Attempted" 
              value={stats.totalQuestionsAttempted} 
              icon={<BookOpen size={16} />} 
              subtext="Total questions"
            />
            <StatsCard 
              title="Accuracy" 
              value={`${stats.overallAccuracy}%`} 
              icon={<TrendingUp size={16} />} 
              subtext="Average accuracy"
            />
            <StatsCard 
              title="Avg Mock Score" 
              value={`${stats.averageTestScore}%`} 
              icon={<Award size={16} />} 
              subtext="Test results"
            />
            <StatsCard 
              title="Active Streak" 
              value={`${stats.streak} Days`} 
              icon={<Flame size={16} />} 
              subtext="Completed streaks"
            />
          </div>

          {/* Weakest & Strongest Topic display */}
          <div className="bg-card border border-border-primary rounded-xl p-5 space-y-4 shadow-sm">
            <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">Skills Insight</h4>
            
            <div className="space-y-3.5 text-xs">
              <div className="flex items-center justify-between p-2.5 bg-rose-500/5 border border-rose-500/10 rounded-xl">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="text-rose-500" size={14} />
                  <span className="text-muted-text font-medium">Weakest Focus Area</span>
                </div>
                <span className="font-bold text-rose-500 capitalize">{stats.weakestTopic}</span>
              </div>

              <div className="flex items-center justify-between p-2.5 bg-emerald-500/5 border border-emerald-500/10 rounded-xl">
                <div className="flex items-center gap-2">
                  <Award className="text-emerald-500" size={14} />
                  <span className="text-muted-text font-medium">Strongest Domain</span>
                </div>
                <span className="font-bold text-emerald-500 capitalize">{stats.strongestTopic}</span>
              </div>
            </div>

            {stats.weakestTopic !== 'Not enough data' && stats.weakestTopic !== 'None' && (
              <div className="bg-muted-bg p-3 rounded-lg border border-border-primary text-[10px] text-muted-text leading-relaxed flex items-start gap-2">
                <Info size={12} className="mt-0.5 text-blue-500 flex-shrink-0" />
                <span>
                  You have lower accuracy on <strong>{stats.weakestTopic}</strong>. Head over to practice mode or review incorrect entries in your Mistake Notebook to fix gaps.
                </span>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Practice Modules Grid */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">Practice Modules</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SectionCard 
            title="English Communication" 
            description="Situational chat scenarios, passages, speech synthesis listening, MediaRecorder speaking practice, and grammar checks." 
            to="/practice/english" 
            icon={<BookOpen size={20} />}
            badge="28 Tasks Mock"
          />
          <SectionCard 
            title="Technical MCQ" 
            description="OOP (Encapsulation, interfaces), DBMS joins, OS threads and Deadlocks, Networks, Cloud service models, and SDLC Agile frameworks." 
            to="/practice/technical" 
            icon={<Award size={20} />}
            badge="600+ Qs"
          />
          <SectionCard 
            title="Pseudocode Tracing" 
            description="Trace Nested loops, operator priority (AND/OR/XOR), post-increment, and recursion step-by-step using interactive Trace Tables." 
            to="/practice/pseudocode" 
            icon={<FileQuestion size={20} />}
            badge="Trace Mode"
          />
          <SectionCard 
            title="Coding Round Arena" 
            description="Solve arrays, two-pointers, sliding window, and stacks. View optimal approaches and reference solutions in C++, Java, and C." 
            to="/practice/coding" 
            icon={<Code size={20} />}
            badge="150 Problems"
          />
          <SectionCard 
            title="Cognitive Games" 
            description="Capgemini-style cognitive games including Grid Memory patterns, Number Sequences, Symbol Matching, and reaction clocks." 
            to="/practice/cognitive" 
            icon={<Flame size={20} />}
            badge="4 Mini-Games"
          />
          <SectionCard 
            title="Interview Preparation" 
            description="300 questions (HR, Technical OOP/DBMS, SQL queries, resume projects) with ideal keypoints, mistakes, and interactive timer." 
            to="/interview" 
            icon={<HelpCircle size={20} />}
            badge="Audio Prep"
          />
        </div>
      </div>

      {/* Auxiliary Dashboard Cards (Mistakes, Bookmarks, Plan) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mistake Notebook Card */}
        <Link to="/mistakes" className="group">
          <div className="bg-card border border-border-primary rounded-xl p-5 flex items-center justify-between hover:border-rose-500/40 hover:shadow transition">
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-rose-500/5 text-rose-500 border border-rose-500/10 rounded-xl group-hover:bg-foreground group-hover:text-background transition">
                <AlertTriangle size={18} />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm group-hover:text-blue-500 transition">Mistake Notebook</h4>
                <p className="text-[11px] text-muted-text">Practice questions you previously got wrong</p>
              </div>
            </div>
            <span className="text-xs text-rose-500 font-semibold group-hover:underline">Review &rarr;</span>
          </div>
        </Link>

        {/* Bookmarked Questions Card */}
        <Link to="/bookmarks" className="group">
          <div className="bg-card border border-border-primary rounded-xl p-5 flex items-center justify-between hover:border-blue-500/40 hover:shadow transition">
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-blue-500/5 text-blue-500 border border-blue-500/10 rounded-xl group-hover:bg-foreground group-hover:text-background transition">
                <Bookmark size={18} />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm group-hover:text-blue-500 transition">Bookmarked Questions</h4>
                <p className="text-[11px] text-muted-text">Revision questions you saved</p>
              </div>
            </div>
            <span className="text-xs text-blue-500 font-semibold group-hover:underline">Review &rarr;</span>
          </div>
        </Link>
      </div>

    </PageContainer>
  );
};

export default Dashboard;
