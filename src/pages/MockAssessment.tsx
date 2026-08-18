import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  PageContainer,
  PrimaryButton,
  SecondaryButton,
} from '../components/UI';
import { Award, ShieldAlert, BookOpen, Clock, FileCode, CheckSquare } from 'lucide-react';
import { createAssessment, startAssessment } from '../services/assessmentEngine';
import { AssessmentConfig, QuestionDifficulty } from '../types';

const MockAssessment: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Presets mapping
  const presets: Record<string, AssessmentConfig> = {
    'Capgemini Complete Mock': {
      name: 'Capgemini Complete Simulation',
      enableEnglish: true,
      enableTechnical: true,
      enablePseudocode: true,
      enableCoding: true,
      enableCognitive: true,
      englishCount: 28,
      technicalCount: 20,
      pseudocodeCount: 20,
      codingCount: 2,
      cognitiveCount: 4,
      timers: { english: 30, technicalPseudocode: 40, coding: 45, cognitive: 10 },
      difficulty: 'mixed'
    },
    'English Only': {
      name: 'English Communication Mock',
      enableEnglish: true,
      enableTechnical: false,
      enablePseudocode: false,
      enableCoding: false,
      enableCognitive: false,
      englishCount: 28,
      technicalCount: 0,
      pseudocodeCount: 0,
      codingCount: 0,
      cognitiveCount: 0,
      timers: { english: 30, technicalPseudocode: 0, coding: 0, cognitive: 0 },
      difficulty: 'mixed'
    },
    'Technical Screening': {
      name: 'Technical MCQ Mock Screen',
      enableEnglish: false,
      enableTechnical: true,
      enablePseudocode: true,
      enableCoding: false,
      enableCognitive: false,
      englishCount: 0,
      technicalCount: 30,
      pseudocodeCount: 10,
      codingCount: 0,
      cognitiveCount: 0,
      timers: { english: 0, technicalPseudocode: 40, coding: 0, cognitive: 0 },
      difficulty: 'medium'
    },
    'Pseudocode Drill': {
      name: 'Pseudocode Predictor Practice',
      enableEnglish: false,
      enableTechnical: false,
      enablePseudocode: true,
      enableCoding: false,
      enableCognitive: false,
      englishCount: 0,
      technicalCount: 0,
      pseudocodeCount: 20,
      codingCount: 0,
      cognitiveCount: 0,
      timers: { english: 0, technicalPseudocode: 25, coding: 0, cognitive: 0 },
      difficulty: 'medium'
    },
    'Coding Challenge': {
      name: 'Vite Coding Arena Mock',
      enableEnglish: false,
      enableTechnical: false,
      enablePseudocode: false,
      enableCoding: true,
      enableCognitive: false,
      englishCount: 0,
      technicalCount: 0,
      pseudocodeCount: 0,
      codingCount: 2,
      cognitiveCount: 0,
      timers: { english: 0, technicalPseudocode: 0, coding: 45, cognitive: 0 },
      difficulty: 'medium'
    },
    'Rapid Revision': {
      name: 'Rapid MCQ Revision',
      enableEnglish: false,
      enableTechnical: true,
      enablePseudocode: true,
      enableCoding: false,
      enableCognitive: false,
      englishCount: 0,
      technicalCount: 10,
      pseudocodeCount: 10,
      codingCount: 0,
      cognitiveCount: 0,
      timers: { english: 0, technicalPseudocode: 15, coding: 0, cognitive: 0 },
      difficulty: 'easy'
    }
  };

  // Custom configurations state
  const [selectedPresetName, setSelectedPresetName] = useState<string>('Capgemini Complete Mock');
  const [config, setConfig] = useState<AssessmentConfig>(presets['Capgemini Complete Mock']);
  const [readInstructions, setReadInstructions] = useState(false);

  // Load preset from redirect state (e.g. from EnglishPractice tab trigger)
  useEffect(() => {
    const locState = location.state as { preset?: string } | null;
    if (locState && locState.preset && presets[locState.preset]) {
      setSelectedPresetName(locState.preset);
      setConfig(presets[locState.preset]);
    }
  }, [location.state]);

  const selectPreset = (name: string) => {
    setSelectedPresetName(name);
    setConfig(presets[name]);
  };

  const handleConfigChange = (key: keyof AssessmentConfig, value: any) => {
    setConfig((prev) => ({
      ...prev,
      [key]: value
    }));
    setSelectedPresetName('Custom Setup');
  };

  const handleTimerChange = (key: keyof AssessmentConfig['timers'], value: number) => {
    setConfig((prev) => ({
      ...prev,
      timers: {
        ...prev.timers,
        [key]: value
      }
    }));
    setSelectedPresetName('Custom Setup');
  };

  const handleStartTest = () => {
    if (!readInstructions) {
      alert('Please read and confirm the assessment instructions before starting.');
      return;
    }

    // Create assessment in engine and obtain ID
    const { assessmentId } = startAssessment(config);
    // Navigate to live test
    navigate(`/mock/${assessmentId}`);
  };

  return (
    <PageContainer>
      <div className="border-b border-slate-800 pb-5 space-y-1">
        <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          <Award className="text-blue-400" />
          Mock Assessment Panel
        </h2>
        <p className="text-xs text-slate-400">
          Configure and start Capgemini-style simulated assessment mocks to practice time management.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Left: Presets Selection (2 Columns in grid) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Preset list cards */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-350 uppercase tracking-wider">Select Assessment Preset</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.keys(presets).map((name) => {
                const isSelected = selectedPresetName === name;
                return (
                  <button
                    key={name}
                    onClick={() => selectPreset(name)}
                    className={`w-full text-left p-4 rounded-xl border transition shadow duration-150 flex flex-col justify-between space-y-2 cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600/10 border-blue-500 text-blue-400'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:bg-slate-850'
                    }`}
                  >
                    <div className="space-y-1">
                      <h4 className="font-bold text-slate-200 text-sm">{name}</h4>
                      <p className="text-[10px] text-slate-500">{presets[name].name}</p>
                    </div>

                    <div className="flex gap-4 text-[10px] font-semibold text-slate-500">
                      {presets[name].enableEnglish && <span>English</span>}
                      {presets[name].enableTechnical && <span>Tech</span>}
                      {presets[name].enableCoding && <span>Coding</span>}
                      {presets[name].enableCognitive && <span>Cognitive</span>}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Config Detail Custom Sliders */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 space-y-6 shadow-xl">
            <h3 className="text-base font-bold text-slate-200">Test Configurations</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300">
              
              {/* Stages toggles */}
              <div className="space-y-3">
                <p className="font-bold text-slate-400">Included Sections:</p>
                
                {[
                  { key: 'enableEnglish', name: 'English Communication (28 tasks)' },
                  { key: 'enableTechnical', name: 'Technical MCQ Questions' },
                  { key: 'enablePseudocode', name: 'Pseudocode Prediction Output' },
                  { key: 'enableCoding', name: 'Coding Assessment Round' },
                  { key: 'enableCognitive', name: 'Cognitive Game Challenges' }
                ].map((item) => (
                  <label key={item.key} className="flex items-center gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={!!config[item.key as keyof AssessmentConfig]}
                      onChange={(e) => handleConfigChange(item.key as keyof AssessmentConfig, e.target.checked)}
                      className="w-4 h-4 rounded bg-slate-950 border-slate-800 text-blue-600 focus:ring-blue-500"
                    />
                    <span>{item.name}</span>
                  </label>
                ))}
              </div>

              {/* Sliders and limits */}
              <div className="space-y-4">
                <p className="font-bold text-slate-400">Test Limits & Timers:</p>

                {config.enableTechnical && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px]">
                      <span>Technical MCQs:</span>
                      <span className="font-bold text-blue-400">{config.technicalCount} questions</span>
                    </div>
                    <input
                      type="range"
                      min={5}
                      max={40}
                      step={5}
                      value={config.technicalCount}
                      onChange={(e) => handleConfigChange('technicalCount', parseInt(e.target.value))}
                      className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                )}

                {config.enablePseudocode && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px]">
                      <span>Pseudocode MCQs:</span>
                      <span className="font-bold text-blue-400">{config.pseudocodeCount} questions</span>
                    </div>
                    <input
                      type="range"
                      min={5}
                      max={30}
                      step={5}
                      value={config.pseudocodeCount}
                      onChange={(e) => handleConfigChange('pseudocodeCount', parseInt(e.target.value))}
                      className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                )}

                <div className="space-y-2 pt-2 border-t border-slate-850">
                  <span className="text-[11px] font-bold text-slate-400">Difficulty Threshold:</span>
                  <div className="flex gap-2">
                    {(['easy', 'medium', 'hard', 'mixed'] as const).map((diff) => (
                      <button
                        key={diff}
                        onClick={() => handleConfigChange('difficulty', diff)}
                        className={`flex-1 py-1 rounded text-[10px] font-bold uppercase border transition ${
                          config.difficulty === diff
                            ? 'bg-blue-600 border-blue-500 text-white'
                            : 'bg-slate-950 border-slate-850 text-slate-500 hover:text-slate-350'
                        }`}
                      >
                        {diff}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Right: Instructions & Launch Button */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 space-y-6 shadow-xl lg:sticky lg:top-4">
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldAlert className="text-amber-500" size={16} />
              Assessment Instructions
            </h3>
            <p className="text-[11px] text-slate-500">Read the rules before initializing the fullscreen test environment.</p>
          </div>

          <div className="space-y-3.5 text-xs text-slate-400 leading-relaxed border-t border-slate-850 pt-4">
            <div className="flex gap-2.5">
              <span className="text-blue-400 font-bold">&bull;</span>
              <span><strong>Distraction-Free Workspace:</strong> The test loads a light navy distraction-free layout. Fullscreen mode is recommended.</span>
            </div>
            <div className="flex gap-2.5">
              <span className="text-blue-400 font-bold">&bull;</span>
              <span><strong>Automatic Submission:</strong> Individual stage timers are strictly enforced. Answers auto-submit when the countdown expires.</span>
            </div>
            <div className="flex gap-2.5">
              <span className="text-blue-400 font-bold">&bull;</span>
              <span><strong>State Restoration:</strong> Reopening or refreshing the page restores the timer state and question records safely.</span>
            </div>
            <div className="flex gap-2.5">
              <span className="text-blue-400 font-bold">&bull;</span>
              <span><strong>No negative marking:</strong> You should attempt all questions. Unsaved responses will be graded as skipped.</span>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-850">
            <label className="flex items-start gap-2.5 cursor-pointer text-xs">
              <input
                type="checkbox"
                checked={readInstructions}
                onChange={(e) => setReadInstructions(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded bg-slate-950 border-slate-800 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-slate-400 font-medium leading-tight">
                I have read the instructions and am ready to start the Capgemini-style simulation.
              </span>
            </label>

            <PrimaryButton 
              onClick={handleStartTest} 
              disabled={!readInstructions}
              className="w-full py-3 text-sm font-bold uppercase tracking-wider"
            >
              Start Assessment
            </PrimaryButton>
          </div>
        </div>

      </div>
    </PageContainer>
  );
};

export default MockAssessment;
