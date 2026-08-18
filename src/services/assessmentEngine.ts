import {
  AssessmentConfig,
  AssessmentState,
  AssessmentStageState,
  AssessmentQuestion,
  AssessmentResult,
  QuestionSection,
  BaseQuestion,
  MCQQuestion,
  PseudocodeQuestion,
  ReadingPassage,
  ListeningQuestion,
  SpeakingPrompt,
  BusinessWritingPrompt,
  CodingProblem,
  QuestionAttempt
} from '../types';

import { situationalQuestions } from '../data/english/situational';
import { readingPassages } from '../data/english/reading';
import { listeningQuestions } from '../data/english/listening';
import { speakingPrompts } from '../data/english/speaking';
import { writingPrompts } from '../data/english/writing';
import { grammarQuestions } from '../data/english/grammar';
import { technicalQuestions } from '../data/technical/mcqs';
import { pseudocodeQuestions } from '../data/pseudocode/questions';
import { codingProblems } from '../data/coding/problems';
import { saveAssessmentState, restoreAssessmentState, clearAssessmentState, saveAttempt, saveMistake } from './storageService';

// Shuffle Helper
export const shuffle = <T>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// Filter questions by difficulty
const filterByDifficulty = <T extends { difficulty: string }>(
  items: T[],
  difficulty: string | 'mixed'
): T[] => {
  if (difficulty === 'mixed') return items;
  return items.filter((item) => item.difficulty === difficulty);
};

// Centralized constants for section keys
export const SECTION_KEYS = {
  ENGLISH: 'english',
  TECHNICAL: 'technical',
  PSEUDOCODE: 'pseudocode',
  CODING: 'coding',
  COGNITIVE: 'cognitive'
};

// Validates assessment state
export const isValidAssessmentState = (state: any): boolean => {
  if (!state) return false;
  if (!state.id) return false;
  if (!state.questions || !Array.isArray(state.questions) || state.questions.length === 0) return false;
  if (typeof state.currentQuestionIndex !== 'number' || state.currentQuestionIndex < 0 || state.currentQuestionIndex >= state.questions.length) return false;
  if (!state.startedAt) return false;
  if (!state.expiresAt) return false;
  return true;
};

// Safe question selector with fallback to avoid empty arrays
const getEligible = <T extends { difficulty: string }>(
  bank: T[],
  difficulty: string,
  count: number
): T[] => {
  let filtered = filterByDifficulty(bank, difficulty);
  if (filtered.length < count) {
    filtered = bank; // Fallback to entire bank
  }
  return filtered;
};

// Main creator
export const createAssessment = (config: AssessmentConfig): AssessmentState => {
  const stages: AssessmentStageState[] = [];
  let stageIndex = 0;

  // 1. Stage English (28 questions)
  if (config.enableEnglish) {
    const englishQuestions: AssessmentQuestion[] = [];
    
    // SA (6)
    const saFiltered = getEligible(situationalQuestions, config.difficulty, 6);
    const saSelected = shuffle(saFiltered).slice(0, 6);
    saSelected.forEach(q => englishQuestions.push({ questionId: q.id, section: 'situational-awareness', status: 'not-visited', timeSpentSeconds: 0 }));

    // Reading (4) - 1 Passage of 4 questions
    const rpFiltered = getEligible(readingPassages, config.difficulty, 1);
    const rpSelected = rpFiltered.length > 0 ? shuffle(rpFiltered)[0] : null;
    if (rpSelected) {
      rpSelected.questions.forEach(q => {
        englishQuestions.push({ questionId: q.id, section: 'reading', status: 'not-visited', timeSpentSeconds: 0 });
      });
    }

    // Listening (4)
    const lFiltered = getEligible(listeningQuestions, config.difficulty, 4);
    const lSelected = shuffle(lFiltered).slice(0, 4);
    lSelected.forEach(q => englishQuestions.push({ questionId: q.id, section: 'listening', status: 'not-visited', timeSpentSeconds: 0 }));

    // Speaking (2)
    const sFiltered = getEligible(speakingPrompts, config.difficulty, 2);
    const sSelected = shuffle(sFiltered).slice(0, 2);
    sSelected.forEach(q => englishQuestions.push({ questionId: q.id, section: 'speaking', status: 'not-visited', timeSpentSeconds: 0 }));

    // Writing (2)
    const wFiltered = getEligible(writingPrompts, config.difficulty, 2);
    const wSelected = shuffle(wFiltered).slice(0, 2);
    wSelected.forEach(q => englishQuestions.push({ questionId: q.id, section: 'writing', status: 'not-visited', timeSpentSeconds: 0 }));

    // Grammar (10)
    const gFiltered = getEligible(grammarQuestions, config.difficulty, 10);
    const gSelected = shuffle(gFiltered).slice(0, 10);
    gSelected.forEach(q => englishQuestions.push({ questionId: q.id, section: 'grammar', status: 'not-visited', timeSpentSeconds: 0 }));

    stages.push({
      stageIndex: stageIndex++,
      stageName: 'English',
      timeRemainingSeconds: config.timers.english * 60,
      questions: englishQuestions,
      currentQuestionIndex: 0
    });
  }

  // 2. Stage Technical & Pseudocode
  if (config.enableTechnical || config.enablePseudocode) {
    const techQuestions: AssessmentQuestion[] = [];
    
    if (config.enableTechnical && config.technicalCount > 0) {
      const techFiltered = getEligible(technicalQuestions, config.difficulty, config.technicalCount);
      const techSelected = shuffle(techFiltered).slice(0, config.technicalCount);
      techSelected.forEach(q => techQuestions.push({ questionId: q.id, section: 'technical', status: 'not-visited', timeSpentSeconds: 0 }));
    }

    if (config.enablePseudocode && config.pseudocodeCount > 0) {
      const pseudoFiltered = getEligible(pseudocodeQuestions, config.difficulty, config.pseudocodeCount);
      const pseudoSelected = shuffle(pseudoFiltered).slice(0, config.pseudocodeCount);
      pseudoSelected.forEach(q => techQuestions.push({ questionId: q.id, section: 'pseudocode', status: 'not-visited', timeSpentSeconds: 0 }));
    }

    if (techQuestions.length > 0) {
      stages.push({
        stageIndex: stageIndex++,
        stageName: 'Technical & Pseudocode',
        timeRemainingSeconds: config.timers.technicalPseudocode * 60,
        questions: shuffle(techQuestions), // shuffle mixed
        currentQuestionIndex: 0
      });
    }
  }

  // 3. Stage Coding
  if (config.enableCoding && config.codingCount > 0) {
    const codingQuestions: AssessmentQuestion[] = [];
    const codFiltered = getEligible(codingProblems, config.difficulty, config.codingCount);
    
    let q1 = codFiltered.filter(p => p.difficulty === 'easy' || p.difficulty === 'medium');
    let q2 = codFiltered.filter(p => p.difficulty === 'medium' || p.difficulty === 'hard');
    
    if (q1.length === 0) q1 = codFiltered;
    if (q2.length === 0) q2 = codFiltered;
    
    const p1 = shuffle(q1)[0];
    let p2 = shuffle(q2).find(p => p.id !== p1?.id);
    if (!p2) p2 = shuffle(codFiltered).find(p => p.id !== p1?.id) || p1;

    if (p1) codingQuestions.push({ questionId: p1.id, section: 'coding', status: 'not-visited', timeSpentSeconds: 0 });
    if (p2 && p2.id !== p1.id) codingQuestions.push({ questionId: p2.id, section: 'coding', status: 'not-visited', timeSpentSeconds: 0 });

    stages.push({
      stageIndex: stageIndex++,
      stageName: 'Coding',
      timeRemainingSeconds: config.timers.coding * 60,
      questions: codingQuestions,
      currentQuestionIndex: 0
    });
  }

  // 4. Stage Cognitive
  if (config.enableCognitive && config.cognitiveCount > 0) {
    const cogQuestions: AssessmentQuestion[] = Array.from({ length: config.cognitiveCount }, (_, index) => ({
      questionId: `COG-GAME-${index + 1}`,
      section: 'grammar', 
      status: 'not-visited',
      timeSpentSeconds: 0
    }));

    stages.push({
      stageIndex: stageIndex++,
      stageName: 'Cognitive',
      timeRemainingSeconds: config.timers.cognitive * 60,
      questions: cogQuestions,
      currentQuestionIndex: 0
    });
  }

  // Find first stage details to set initial parameters
  const firstStage = stages[0];
  const initialQuestions = firstStage ? firstStage.questions : [];
  const startedAt = Date.now();
  const initialDurationSeconds = firstStage ? firstStage.timeRemainingSeconds : 0;

  const state: AssessmentState = {
    id: `MOCK-${Date.now()}`,
    config,
    isActive: true,
    startTime: startedAt,
    stages,
    currentStageIndex: 0,
    
    // Populating requested new fields
    name: config.name,
    type: config.name,
    questions: initialQuestions,
    currentQuestionIndex: 0,
    answers: {},
    reviewFlags: {},
    visited: initialQuestions.length > 0 ? { [initialQuestions[0].questionId]: true } : {},
    startedAt,
    expiresAt: startedAt + (initialDurationSeconds * 1000),
    status: 'in-progress'
  };

  // Import dynamic saveAssessment here to avoid circular dependencies
  import('./storageService').then(m => {
    m.saveAssessment(state);
  });

  return state;
};

// Explicit wrapper requested by start flow
export const startAssessment = (config: AssessmentConfig) => {
  const state = createAssessment(config);
  return {
    assessmentId: state.id,
    state
  };
};

// Retrieve question object by ID
export const findQuestionById = (id: string): any => {
  // SA
  let q = situationalQuestions.find(x => x.id === id);
  if (q) return q;

  // Reading sub-question
  for (const p of readingPassages) {
    const subQ = p.questions.find(x => x.id === id);
    if (subQ) {
      return {
        ...subQ,
        section: 'reading',
        topic: p.topic,
        difficulty: p.difficulty,
        sourceType: p.sourceType,
        tags: p.tags,
        passage: p.passage,
        passageId: p.id
      };
    }
  }

  // Reading Passage itself (optional fallback)
  const passage = readingPassages.find(x => x.id === id);
  if (passage) return passage;

  // Listening
  q = listeningQuestions.find(x => x.id === id);
  if (q) return q;

  // Speaking
  const sp = speakingPrompts.find(x => x.id === id);
  if (sp) return sp;

  // Writing
  const wr = writingPrompts.find(x => x.id === id);
  if (wr) return wr;

  // Grammar
  q = grammarQuestions.find(x => x.id === id);
  if (q) return q;

  // Technical
  q = technicalQuestions.find(x => x.id === id);
  if (q) return q;

  // Pseudocode
  q = pseudocodeQuestions.find(x => x.id === id);
  if (q) return q;

  // Coding
  const cp = codingProblems.find(x => x.id === id);
  if (cp) return cp;

  return null;
};

// Score Calculator
export const calculateAssessmentResults = (state: AssessmentState): AssessmentResult => {
  let score = 0;
  let maxScore = 0;
  let correct = 0;
  let incorrect = 0;
  let skipped = 0;
  let timeTakenSeconds = 0;

  const sectionScores: Record<string, number> = {};
  const topicBreakdown: Record<string, { correct: number; total: number }> = {};
  const sectionCorrect: Record<string, number> = {};
  const sectionTotal: Record<string, number> = {};

  state.stages.forEach((stage) => {
    // Add time spent on this stage
    const stageDuration = state.config.timers[
      stage.stageName === 'English' ? 'english' :
      stage.stageName === 'Technical & Pseudocode' ? 'technicalPseudocode' :
      stage.stageName === 'Coding' ? 'coding' : 'cognitive'
    ] * 60;
    timeTakenSeconds += (stageDuration - stage.timeRemainingSeconds);

    stage.questions.forEach((aq) => {
      const q = findQuestionById(aq.questionId);
      if (!q) return;

      const sec = aq.section;
      if (!sectionTotal[sec]) {
        sectionTotal[sec] = 0;
        sectionCorrect[sec] = 0;
      }
      sectionTotal[sec]++;

      // Initialize topic in breakdown
      const topicKey = `${aq.section}:${q.topic || 'General'}`;
      if (!topicBreakdown[topicKey]) {
        topicBreakdown[topicKey] = { correct: 0, total: 0 };
      }
      topicBreakdown[topicKey].total++;

      maxScore++;

      // Grade answer
      let isCorrect = false;
      let isSkipped = aq.userAnswer === undefined || aq.userAnswer === null || aq.userAnswer === '';

      if (!isSkipped) {
        if (aq.section === 'coding') {
          // Coding problem - if code was entered and saved, we count it as completed/answered.
          // In assessment mode, let's treat any saved code as correct for scoring validation purposes, 
          // or assume it's graded. Let's count it as correct (since it's a practice tool and we show solution).
          isCorrect = true; 
        } else if (aq.section === 'speaking' || aq.section === 'writing') {
          // Subjective self-assessment/completion
          isCorrect = true;
        } else {
          // MCQ / Pseudocode / Grammar / SA / Reading / Listening
          isCorrect = Number(aq.userAnswer) === q.correctAnswer;
        }
      }

      // Record attempt in system history
      const attempt: QuestionAttempt = {
        questionId: aq.questionId,
        section: aq.section,
        topic: q.topic || 'General',
        subtopic: q.subtopic || 'General',
        difficulty: q.difficulty || 'medium',
        correct: isCorrect,
        timeSpentSeconds: aq.timeSpentSeconds,
        selectedAnswer: typeof aq.userAnswer === 'number' || typeof aq.userAnswer === 'string' ? aq.userAnswer : undefined,
        date: new Date().toISOString()
      };
      
      saveAttempt(attempt);

      if (isCorrect) {
        score++;
        correct++;
        sectionCorrect[sec]++;
        topicBreakdown[topicKey].correct++;
      } else if (isSkipped) {
        skipped++;
      } else {
        incorrect++;
        // Add to Mistake Notebook
        saveMistake(aq.questionId, aq.section, q.topic || 'General', q.subtopic || 'General');
      }
    });
  });

  // Compile section summaries
  Object.keys(sectionTotal).forEach((sec) => {
    sectionScores[sec] = Math.round((sectionCorrect[sec] / sectionTotal[sec]) * 100);
  });

  // Calculate final topic breakdown with clean names
  const cleanBreakdown: Record<string, { correct: number; total: number }> = {};
  let weakestTopic = 'None';
  let strongestTopic = 'None';
  let minAcc = 101;
  let maxAcc = -1;

  Object.entries(topicBreakdown).forEach(([key, val]) => {
    const [_, topicName] = key.split(':');
    cleanBreakdown[topicName] = val;
    const acc = Math.round((val.correct / val.total) * 100);

    if (acc < minAcc) {
      minAcc = acc;
      weakestTopic = topicName;
    }
    if (acc > maxAcc) {
      maxAcc = acc;
      strongestTopic = topicName;
    }
  });

  const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
  const accuracy = (correct + incorrect) > 0 ? Math.round((correct / (correct + incorrect)) * 100) : 0;

  const result: AssessmentResult = {
    id: state.id,
    name: state.config.name,
    score,
    maxScore,
    percentage,
    correct,
    incorrect,
    skipped,
    accuracy,
    timeTakenSeconds: Math.max(1, timeTakenSeconds),
    averageTimePerQuestion: maxScore > 0 ? Math.round(timeTakenSeconds / maxScore) : 0,
    sectionScores,
    topicBreakdown: cleanBreakdown,
    strongestTopic: strongestTopic === 'None' ? 'Not enough data' : strongestTopic,
    weakestTopic: weakestTopic === 'None' ? 'Not enough data' : weakestTopic,
    date: new Date().toISOString(),
    configSummary: `English: ${state.config.enableEnglish ? 'Yes' : 'No'} | Tech: ${state.config.enableTechnical ? 'Yes' : 'No'} | Coding: ${state.config.enableCoding ? 'Yes' : 'No'}`
  };

  // Save result to LocalStorage history
  try {
    const pastResults = JSON.parse(localStorage.getItem('capgemini-prep:assessment-results') || '[]');
    pastResults.push(result);
    localStorage.setItem('capgemini-prep:assessment-results', JSON.stringify(pastResults));
  } catch (e) {
    console.error('Failed to save assessment result', e);
  }

  // Clear current active state
  clearAssessmentState();

  return result;
};
