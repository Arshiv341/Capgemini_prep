import { describe, it, expect, beforeEach } from 'vitest';
import { createAssessment, calculateAssessmentResults, isValidAssessmentState, startAssessment } from '../assessmentEngine';
import { calculateUserStats, getWeakAndStrongTopics, calculateTopicStats } from '../statistics';
import { toggleBookmark, getBookmarks, saveMistake, getMistakes, saveAssessmentState, restoreAssessmentState, saveAssessment, getAssessment, updateAssessment, deleteAssessment } from '../storageService';
import { AssessmentConfig, QuestionAttempt } from '../../types';

// Mock LocalStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => { store[key] = value.toString(); },
    clear: () => { store = {}; },
    removeItem: (key: string) => { delete store[key]; }
  };
})();
Object.defineProperty(globalThis, 'localStorage', { value: localStorageMock });

describe('Assessment Simulator Engine Tests', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  const testConfig: AssessmentConfig = {
    name: 'Test Complete Mock',
    enableEnglish: true,
    enableTechnical: true,
    enablePseudocode: true,
    enableCoding: true,
    enableCognitive: false,
    englishCount: 28,
    technicalCount: 15,
    pseudocodeCount: 10,
    codingCount: 2,
    cognitiveCount: 0,
    timers: { english: 30, technicalPseudocode: 40, coding: 45, cognitive: 0 },
    difficulty: 'medium'
  };

  it('should create a valid assessment configuration and select questions', () => {
    const test = createAssessment(testConfig);
    expect(test).toBeDefined();
    expect(test.isActive).toBe(true);
    expect(test.stages.length).toBe(3); // English, Technical & Pseudocode, Coding
    
    // Check English stage counts
    const englishStage = test.stages.find(s => s.stageName === 'English');
    expect(englishStage).toBeDefined();
    expect(englishStage?.questions.length).toBe(28); // SA:6, Reading:4, Listening:4, Speaking:2, Writing:2, Grammar:10
  });

  it('should prevent duplicate IDs in selected test questions', () => {
    const test = createAssessment(testConfig);
    const seenIds = new Set<string>();
    test.stages.forEach(stage => {
      stage.questions.forEach(q => {
        expect(seenIds.has(q.questionId)).toBe(false);
        seenIds.add(q.questionId);
      });
    });
  });

  it('should restore active assessment state correctly from storage', () => {
    const test = createAssessment(testConfig);
    saveAssessmentState(test);
    
    const restored = restoreAssessmentState();
    expect(restored).not.toBeNull();
    expect(restored?.id).toBe(test.id);
    expect(restored?.config.name).toBe(testConfig.name);
  });

  it('should calculate assessment score results and grade correctly', () => {
    const test = createAssessment(testConfig);
    // Simulate user answering first 5 questions correctly
    const stage = test.stages[0];
    stage.questions[0].userAnswer = 1; // dummy answer index
    stage.questions[0].timeSpentSeconds = 15;
    stage.questions[1].userAnswer = 1;
    stage.questions[1].timeSpentSeconds = 20;

    const result = calculateAssessmentResults(test);
    expect(result).toBeDefined();
    expect(result.score).toBeLessThanOrEqual(result.maxScore);
  });
});

describe('Statistics and Bookmarks Tests', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should toggle bookmarks successfully', () => {
    const mockId = 'TC001';
    const firstToggle = toggleBookmark(mockId, 'technical');
    expect(firstToggle).toBe(true);
    expect(getBookmarks().length).toBe(1);

    const secondToggle = toggleBookmark(mockId, 'technical');
    expect(secondToggle).toBe(false);
    expect(getBookmarks().length).toBe(0);
  });

  it('should log mistakes into Mistakes Notebook', () => {
    const mockId = 'PS002';
    saveMistake(mockId, 'pseudocode', 'loops', 'for-loop');
    
    const list = getMistakes();
    expect(list.length).toBe(1);
    expect(list[0].questionId).toBe(mockId);
    expect(list[0].wrongCount).toBe(1);

    // Increment wrongCount
    saveMistake(mockId, 'pseudocode', 'loops', 'for-loop');
    expect(getMistakes()[0].wrongCount).toBe(2);
  });

  it('should determine weak and strong topics based on mock attempts history', () => {
    const mockAttempts: QuestionAttempt[] = [
      { questionId: '1', section: 'technical', topic: 'OOP', subtopic: 'override', difficulty: 'medium', correct: true, timeSpentSeconds: 15, date: '' },
      { questionId: '2', section: 'technical', topic: 'OOP', subtopic: 'override', difficulty: 'medium', correct: true, timeSpentSeconds: 10, date: '' },
      { questionId: '3', section: 'technical', topic: 'DBMS', subtopic: 'joins', difficulty: 'medium', correct: false, timeSpentSeconds: 50, date: '' },
      { questionId: '4', section: 'technical', topic: 'DBMS', subtopic: 'joins', difficulty: 'medium', correct: false, timeSpentSeconds: 45, date: '' },
    ];

    const stats = calculateTopicStats(mockAttempts);
    expect(stats.length).toBe(2);

    const { weakest, strongest } = getWeakAndStrongTopics(stats);
    expect(weakest).toBe('DBMS');
    expect(strongest).toBe('OOP');
  });

  it('should support ID-specific storage helpers and state validation', () => {
    const config: AssessmentConfig = {
      name: 'Simulated Preset',
      enableEnglish: false,
      enableTechnical: true,
      enablePseudocode: false,
      enableCoding: false,
      enableCognitive: false,
      englishCount: 0,
      technicalCount: 5,
      pseudocodeCount: 0,
      codingCount: 0,
      cognitiveCount: 0,
      timers: { english: 0, technicalPseudocode: 10, coding: 0, cognitive: 0 },
      difficulty: 'medium'
    };

    const { assessmentId, state } = startAssessment(config);
    expect(assessmentId).toBe(state.id);
    expect(isValidAssessmentState(state)).toBe(true);

    // Test storage key saves and loads correctly
    saveAssessment(state);
    const retrieved = getAssessment(assessmentId);
    expect(retrieved).not.toBeNull();
    expect(retrieved?.id).toBe(assessmentId);

    // Test updates
    state.currentQuestionIndex = 3;
    updateAssessment(state);
    expect(getAssessment(assessmentId)?.currentQuestionIndex).toBe(3);

    // Test delete
    deleteAssessment(assessmentId);
    expect(getAssessment(assessmentId)).toBeNull();

    // Test invalid state validation
    expect(isValidAssessmentState(null)).toBe(false);
    expect(isValidAssessmentState({ id: '123' })).toBe(false);
  });
});
