import React, { useState, useEffect } from 'react';
import {
  PageContainer,
  StatsCard,
  EmptyState
} from '../components/UI';
import { Award, BookOpen, AlertTriangle, TrendingUp, BarChart, Clock, Calendar } from 'lucide-react';
import { calculateUserStats, calculateTopicStats, getWeakAndStrongTopics } from '../services/statistics';
import { getAttempts } from '../services/storageService';
import { UserStats, TopicStats } from '../types';

const Analytics: React.FC = () => {
  const [stats, setStats] = useState<UserStats | null>(null);
  const [topicStats, setTopicStats] = useState<TopicStats[]>([]);
  const [weakInfo, setWeakInfo] = useState<{ weakest: string; strongest: string; recommendations: any[] }>({
    weakest: '',
    strongest: '',
    recommendations: []
  });

  useEffect(() => {
    const attempts = getAttempts();
    setStats(calculateUserStats());
    const tStats = calculateTopicStats(attempts);
    setTopicStats(tStats);
    setWeakInfo(getWeakAndStrongTopics(tStats));
  }, []);

  if (!stats) return null;

  // Custom SVG Bar Chart calculation
  const sectionKeys = ['english', 'technical', 'pseudocode', 'coding', 'interview'];
  const sectionNames = {
    english: 'English',
    technical: 'Technical MCQ',
    pseudocode: 'Pseudocode',
    coding: 'Coding Arena',
    interview: 'Interview Prep'
  };

  const hasData = stats.totalQuestionsAttempted > 0;

  return (
    <PageContainer>
      {/* Header */}
      <div className="border-b border-slate-800 pb-5 space-y-1">
        <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          <TrendingUp className="text-blue-400" />
          Performance & Analytics Dashboard
        </h2>
        <p className="text-xs text-slate-400">
          Track accuracy percentages, average solving speed, and monitor mock assessment progress.
        </p>
      </div>

      {hasData ? (
        <div className="space-y-6">
          
          {/* Top Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatsCard 
              title="Total Questions Solved" 
              value={stats.totalQuestionsAttempted} 
              icon={<BookOpen size={20} />} 
              subtext="Accumulated attempts"
            />
            <StatsCard 
              title="Overall Accuracy" 
              value={`${stats.overallAccuracy}%`} 
              icon={<Award size={20} />} 
              subtext="Practice score average"
            />
            <StatsCard 
              title="Daily Streak" 
              value={`${stats.streak} Days`} 
              icon={<Clock size={20} />} 
              subtext={`Longest record: ${stats.longestStreak} Days`}
            />
          </div>

          {/* SVG Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Chart 1: Section Accuracy (Bar Chart) */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 md:p-6 space-y-4 shadow-xl">
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                  <BarChart size={16} className="text-blue-400" />
                  Accuracy by Exam Section
                </h3>
                <p className="text-[10px] text-slate-500">Correct answers ratio mapped across modules</p>
              </div>

              {/* Custom SVG Bar Chart */}
              <div className="w-full h-64 pt-2">
                <svg className="w-full h-full" viewBox="0 0 500 240" fill="none">
                  {/* Grid lines */}
                  <line x1="60" y1="40" x2="480" y2="40" stroke="#334155" strokeDasharray="3 3" />
                  <line x1="60" y1="90" x2="480" y2="90" stroke="#334155" strokeDasharray="3 3" />
                  <line x1="60" y1="140" x2="480" y2="140" stroke="#334155" strokeDasharray="3 3" />
                  <line x1="60" y1="190" x2="480" y2="190" stroke="#1e293b" />

                  {/* Y-Axis Labels */}
                  <text x="45" y="44" fill="#64748b" className="text-[10px] text-right font-semibold">100%</text>
                  <text x="45" y="94" fill="#64748b" className="text-[10px] text-right font-semibold">50%</text>
                  <text x="45" y="144" fill="#64748b" className="text-[10px] text-right font-semibold">25%</text>
                  <text x="45" y="194" fill="#64748b" className="text-[10px] text-right font-semibold">0%</text>

                  {/* Bars rendering */}
                  {sectionKeys.map((key, idx) => {
                    const val = stats.sectionScores[key] || 0;
                    // Scale: y=190 is 0%, y=40 is 100%. Total height = 150.
                    const barHeight = (val / 100) * 150;
                    const barY = 190 - barHeight;
                    const barX = 85 + idx * 80;

                    return (
                      <g key={key}>
                        {/* Shadow Backing */}
                        <rect x={barX} y="40" width="36" height="150" fill="#1e293b/10" rx="4" />
                        {/* Active Bar */}
                        <rect 
                          x={barX} 
                          y={barY} 
                          width="36" 
                          height={Math.max(4, barHeight)} 
                          fill="url(#barGradient)" 
                          rx="4" 
                        />
                        {/* Value Text */}
                        <text 
                          x={barX + 18} 
                          y={barY - 8} 
                          fill={val > 0 ? '#60a5fa' : '#64748b'} 
                          className="text-[10px] font-bold text-center" 
                          textAnchor="middle"
                        >
                          {val}%
                        </text>
                        {/* X-Axis Label */}
                        <text 
                          x={barX + 18} 
                          y="215" 
                          fill="#94a3b8" 
                          className="text-[9px] font-semibold" 
                          textAnchor="middle"
                        >
                          {sectionNames[key as keyof typeof sectionNames]}
                        </text>
                      </g>
                    );
                  })}

                  {/* Gradients */}
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1d4ed8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Chart 2: Mock Test Results Trends (Line Chart) */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 md:p-6 space-y-4 shadow-xl">
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                  <TrendingUp size={16} className="text-blue-400" />
                  Mock Assessment Progression
                </h3>
                <p className="text-[10px] text-slate-500">Historical mock exam percentages mapped chronologically</p>
              </div>

              {/* Custom SVG Line Chart */}
              <div className="w-full h-64 pt-2">
                {stats.recentTests.length > 0 ? (
                  <svg className="w-full h-full" viewBox="0 0 500 240" fill="none">
                    {/* Grid lines */}
                    <line x1="50" y1="40" x2="480" y2="40" stroke="#334155" strokeDasharray="3 3" />
                    <line x1="50" y1="115" x2="480" y2="115" stroke="#334155" strokeDasharray="3 3" />
                    <line x1="50" y1="190" x2="480" y2="190" stroke="#1e293b" />

                    {/* Y-Axis Labels */}
                    <text x="35" y="44" fill="#64748b" className="text-[10px] text-right font-semibold">100%</text>
                    <text x="35" y="119" fill="#64748b" className="text-[10px] text-right font-semibold">50%</text>
                    <text x="35" y="194" fill="#64748b" className="text-[10px] text-right font-semibold">0%</text>

                    {/* Line Plot points mapping */}
                    {(() => {
                      const data = [...stats.recentTests].reverse(); // oldest first for line progression
                      const pointsCount = data.length;
                      const widthInterval = pointsCount > 1 ? 400 / (pointsCount - 1) : 400;

                      // Map coordinates: x = 60 + index * interval, y = 190 - (percentage/100)*150
                      const coords = data.map((t, idx) => ({
                        x: 65 + (pointsCount > 1 ? idx * widthInterval : 200),
                        y: 190 - (t.score / t.maxScore) * 150,
                        name: t.name,
                        score: Math.round((t.score / t.maxScore) * 100)
                      }));

                      // Construct SVG path string
                      let pathD = '';
                      if (coords.length > 0) {
                        pathD = `M ${coords[0].x} ${coords[0].y}`;
                        for (let i = 1; i < coords.length; i++) {
                          pathD += ` L ${coords[i].x} ${coords[i].y}`;
                        }
                      }

                      return (
                        <g>
                          {/* Line Path */}
                          {pathD && <path d={pathD} stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />}

                          {/* Data points dots */}
                          {coords.map((c, idx) => (
                            <g key={idx}>
                              <circle cx={c.x} cy={c.y} r="5" fill="#60a5fa" stroke="#1d4ed8" strokeWidth="2" />
                              {/* Label text */}
                              <text x={c.x} y={c.y - 12} fill="#93c5fd" className="text-[10px] font-bold" textAnchor="middle">
                                {c.score}%
                              </text>
                              {/* X-axis date */}
                              <text x={c.x} y="215" fill="#64748b" className="text-[9px] font-semibold" textAnchor="middle">
                                Test {idx + 1}
                              </text>
                            </g>
                          ))}
                        </g>
                      );
                    })()}
                  </svg>
                ) : (
                  <div className="h-full flex items-center justify-center text-xs text-slate-500 italic">
                    Attempt full Mock Assessments to plot test progression trends.
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Strongest / Weakest Topics Insight */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-lg">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="text-amber-500" size={16} />
              Domain Strengths & Recommendations
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-xl space-y-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase">Strongest Subject</span>
                <h4 className="text-lg font-bold text-emerald-400 capitalize">{weakInfo.strongest}</h4>
                <p className="text-[10px] text-slate-500">Highest correct score ratio in practice.</p>
              </div>

              <div className="p-4 bg-rose-500/5 border border-rose-500/10 rounded-xl space-y-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase">Weakest Area</span>
                <h4 className="text-lg font-bold text-rose-400 capitalize">{weakInfo.weakest}</h4>
                <p className="text-[10px] text-slate-500">Requires revision and correct answer review.</p>
              </div>

              {/* Recommendations */}
              <div className="md:col-span-1 space-y-3">
                <span className="text-[10px] font-bold text-slate-500 uppercase block">Next Revision Target</span>
                {weakInfo.recommendations.length > 0 ? (
                  <div className="space-y-2">
                    {weakInfo.recommendations.map((rec, rIdx) => (
                      <div key={rIdx} className="p-2.5 bg-slate-950/60 rounded-xl border border-slate-850 flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-350 capitalize">{rec.topic}</span>
                        <span className="text-[10px] text-rose-400 font-semibold">{rec.accuracy}% acc</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-500 italic">No low-accuracy areas detected yet!</p>
                )}
              </div>
            </div>
          </div>

        </div>
      ) : (
        <div className="py-12">
          <EmptyState
            title="Not enough analytics data yet"
            description="Complete a few practice modules or mocks first. We will track your correct/incorrect selections and plot progress charts here."
          />
        </div>
      )}
    </PageContainer>
  );
};

export default Analytics;
