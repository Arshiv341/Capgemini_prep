import React, { useState, useEffect } from 'react';
import {
  PageContainer,
  PrimaryButton,
  SecondaryButton,
} from '../components/UI';
import { Calendar, CheckCircle2, ChevronRight, BookOpen, Clock, Award } from 'lucide-react';
import { getStudyPlan, updateStudyPlanProgress } from '../services/storageService';
import { StudyPlanDay } from '../types';

const StudyPlan: React.FC = () => {
  const [plan, setPlan] = useState<StudyPlanDay[]>([]);
  const [selectedDayIdx, setSelectedDayIdx] = useState(0);

  useEffect(() => {
    setPlan(getStudyPlan());
  }, []);

  const handleTaskCompleteIncrement = (dayIdx: number, taskId: string) => {
    // Increment task progress by 1 or mark complete
    updateStudyPlanProgress(taskId, 1);
    setPlan(getStudyPlan()); // reload
  };

  const handleMarkTaskFull = (dayIdx: number, taskId: string, target: number) => {
    // Set directly to target count
    const currentCount = plan[dayIdx].tasks.find(t => t.id === taskId)?.completedCount || 0;
    const diff = target - currentCount;
    if (diff > 0) {
      updateStudyPlanProgress(taskId, diff);
      setPlan(getStudyPlan());
    }
  };

  if (plan.length === 0) return null;

  // Calculate overall completion %
  const totalTasks = plan.reduce((acc, d) => acc + d.tasks.length, 0);
  const completedTasks = plan.reduce((acc, d) => acc + d.tasks.filter(t => t.isCompleted).length, 0);
  const overallPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const currentDay = plan[selectedDayIdx];

  return (
    <PageContainer>
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <Calendar className="text-blue-400" size={20} />
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">7 LPA Preparation Plan</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">Your 21-Day Success Strategy</h2>
          <p className="text-xs text-slate-350 max-w-xl">
            A structured daily prep curriculum focused on mastering the differential package assessment requirements.
          </p>
        </div>

        <div className="flex items-center gap-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
          <div className="text-center">
            <span className="text-4xl font-extrabold text-white">{overallPercentage}%</span>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">Plan Completed</p>
          </div>
        </div>
      </div>

      {/* Main split grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Left: 21-day timeline selector buttons */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4 max-h-[70vh] overflow-y-auto pr-2">
          <h3 className="text-xs font-bold text-slate-350 uppercase tracking-wider">Timeline Checklist</h3>

          <div className="space-y-2">
            {plan.map((day, idx) => {
              const isSelected = selectedDayIdx === idx;
              const isDone = day.completed;

              return (
                <button
                  key={day.day}
                  onClick={() => setSelectedDayIdx(idx)}
                  className={`w-full text-left p-3 rounded-xl border transition duration-150 flex items-center justify-between gap-3 cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600/10 border-blue-500 text-blue-400'
                      : isDone
                      ? 'bg-slate-850/50 border-emerald-500/20 text-slate-400'
                      : 'bg-slate-850 border-slate-800/80 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className={`w-5 h-5 flex items-center justify-center rounded text-[10px] font-bold ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {day.day}
                    </span>
                    <div className="truncate">
                      <p className="text-xs font-bold text-slate-200">Day {day.day}</p>
                      <p className="text-[9px] text-slate-500 truncate">{day.title}</p>
                    </div>
                  </div>

                  {isDone && <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Detailed active day details */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Day overview card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
            <div className="flex justify-between items-center border-b border-slate-850 pb-3">
              <span className="text-xs text-blue-400 font-bold uppercase tracking-wider">Day {currentDay.day} curriculum</span>
              <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                currentDay.completed ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-slate-950 text-slate-500'
              }`}>
                {currentDay.completed ? 'Day Completed' : 'Pending Tasks'}
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-100">{currentDay.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{currentDay.theme}</p>
            </div>

            {/* List of Day tasks */}
            <div className="space-y-3.5 pt-3 border-t border-slate-850">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Required Tasks:</span>
              
              {currentDay.tasks.map((task) => (
                <div 
                  key={task.id}
                  className={`p-4 rounded-xl border flex flex-col md:flex-row md:items-center justify-between gap-4 transition ${
                    task.isCompleted ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-slate-950 border-slate-850'
                  }`}
                >
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <p className={`text-xs font-bold ${task.isCompleted ? 'text-slate-400 line-through' : 'text-slate-200'}`}>
                      {task.description}
                    </p>
                    <div className="flex items-center justify-between text-[10px] text-slate-500 max-w-xs">
                      <span>Progress</span>
                      <span>{task.completedCount} / {task.targetCount} completed</span>
                    </div>
                    <div className="w-full max-w-xs bg-slate-800 rounded-full h-1 overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${task.isCompleted ? 'bg-emerald-500' : 'bg-blue-500'}`}
                        style={{ width: `${(task.completedCount / task.targetCount) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {!task.isCompleted ? (
                      <>
                        <SecondaryButton 
                          onClick={() => handleTaskCompleteIncrement(selectedDayIdx, task.id)}
                          className="py-1 px-2.5 text-[10px] font-semibold"
                        >
                          +1 Solve
                        </SecondaryButton>
                        <PrimaryButton 
                          onClick={() => handleMarkTaskFull(selectedDayIdx, task.id, task.targetCount)}
                          className="py-1 px-3 text-[10px] font-bold"
                        >
                          Mark Done
                        </PrimaryButton>
                      </>
                    ) : (
                      <span className="text-xs text-emerald-400 font-bold flex items-center gap-1.5 p-1 px-2 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                        <CheckCircle2 size={12} />
                        Completed
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </PageContainer>
  );
};

export default StudyPlan;
