import {
  UserProfile,
  QuestionAttempt,
  Bookmark,
  MistakeEntry,
  AssessmentState,
  DailyChallenge,
  StudyPlanDay,
  QuestionSection,
} from '../types';

const KEYS = {
  USER_PROFILE: 'capgemini-prep:user-profile',
  ATTEMPT_HISTORY: 'capgemini-prep:attempt-history',
  BOOKMARKS: 'capgemini-prep:bookmarks',
  MISTAKES: 'capgemini-prep:mistakes',
  STUDY_PLAN: 'capgemini-prep:study-plan',
  ACTIVE_ASSESSMENT: 'capgemini-prep:active-assessment',
  DAILY_CHALLENGE: 'capgemini-prep:daily-challenge',
};

// Default profile
const DEFAULT_PROFILE: UserProfile = {
  name: 'Candidate',
  college: 'Engineering College',
  branch: 'Computer Science & Engineering',
  graduationYear: '2027',
  preferredLanguage: 'cpp',
  targetPackage: '₹7 LPA',
  dailyQuestionTarget: 25,
};

// Safe JSON Parse wrapper
const safeParse = <T>(key: string, defaultValue: T): T => {
  try {
    const val = localStorage.getItem(key);
    if (!val) return defaultValue;
    return JSON.parse(val) as T;
  } catch (e) {
    console.error(`Error parsing localStorage key: ${key}`, e);
    return defaultValue;
  }
};

// Safe JSON Stringify wrapper
const safeStringify = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Error saving to localStorage key: ${key}`, e);
  }
};

export const getUserProfile = (): UserProfile => {
  return safeParse<UserProfile>(KEYS.USER_PROFILE, DEFAULT_PROFILE);
};

export const saveUserProfile = (profile: UserProfile): void => {
  safeStringify<UserProfile>(KEYS.USER_PROFILE, profile);
};

export const getAttempts = (): QuestionAttempt[] => {
  return safeParse<QuestionAttempt[]>(KEYS.ATTEMPT_HISTORY, []);
};

export const saveAttempt = (attempt: QuestionAttempt): void => {
  const attempts = getAttempts();
  attempts.push(attempt);
  safeStringify<QuestionAttempt[]>(KEYS.ATTEMPT_HISTORY, attempts);
  updateStreak();
};

export const getBookmarks = (): Bookmark[] => {
  return safeParse<Bookmark[]>(KEYS.BOOKMARKS, []);
};

export const toggleBookmark = (questionId: string, section: QuestionSection): boolean => {
  const bookmarks = getBookmarks();
  const index = bookmarks.findIndex((b) => b.questionId === questionId);
  let isBookmarked = false;
  if (index >= 0) {
    bookmarks.splice(index, 1);
  } else {
    bookmarks.push({ questionId, section, bookmarkedAt: new Date().toISOString() });
    isBookmarked = true;
  }
  safeStringify<Bookmark[]>(KEYS.BOOKMARKS, bookmarks);
  return isBookmarked;
};

export const getMistakes = (): MistakeEntry[] => {
  return safeParse<MistakeEntry[]>(KEYS.MISTAKES, []);
};

export const saveMistake = (questionId: string, section: QuestionSection, topic: string, subtopic: string): void => {
  const mistakes = getMistakes();
  const existing = mistakes.find((m) => m.questionId === questionId);
  if (existing) {
    existing.attemptCount += 1;
    existing.wrongCount += 1;
    existing.lastAttemptedAt = new Date().toISOString();
  } else {
    mistakes.push({
      questionId,
      section,
      topic,
      subtopic,
      attemptCount: 1,
      wrongCount: 1,
      lastAttemptedAt: new Date().toISOString(),
    });
  }
  safeStringify<MistakeEntry[]>(KEYS.MISTAKES, mistakes);
};

export const removeMistake = (questionId: string): void => {
  let mistakes = getMistakes();
  mistakes = mistakes.filter((m) => m.questionId !== questionId);
  safeStringify<MistakeEntry[]>(KEYS.MISTAKES, mistakes);
};

export const saveAssessment = (state: AssessmentState): void => {
  safeStringify<AssessmentState>(`capgemini-prep:assessment:${state.id}`, state);
  safeStringify<AssessmentState>(KEYS.ACTIVE_ASSESSMENT, state);
};

export const getAssessment = (id: string): AssessmentState | null => {
  return safeParse<AssessmentState | null>(`capgemini-prep:assessment:${id}`, null);
};

export const updateAssessment = (state: AssessmentState): void => {
  saveAssessment(state);
};

export const deleteAssessment = (id: string): void => {
  localStorage.removeItem(`capgemini-prep:assessment:${id}`);
  const active = restoreAssessmentState();
  if (active && active.id === id) {
    clearAssessmentState();
  }
};

export const saveAssessmentState = (state: AssessmentState): void => {
  saveAssessment(state);
};

export const restoreAssessmentState = (): AssessmentState | null => {
  return safeParse<AssessmentState | null>(KEYS.ACTIVE_ASSESSMENT, null);
};

export const clearAssessmentState = (): void => {
  localStorage.removeItem(KEYS.ACTIVE_ASSESSMENT);
};

// Daily Streak & Challenge Logic
export const getDailyChallenge = (): DailyChallenge => {
  const today = new Date().toISOString().split('T')[0];
  const challenge = safeParse<DailyChallenge | null>(KEYS.DAILY_CHALLENGE, null);
  
  if (challenge && challenge.date === today) {
    return challenge;
  }

  // Create new challenge for today
  const prevStreak = challenge ? challenge.streak : 0;
  
  // Verify if streak is broken (last active date was before yesterday)
  let currentStreak = prevStreak;
  if (challenge) {
    const lastDate = new Date(challenge.date);
    const todayDate = new Date(today);
    const diffTime = Math.abs(todayDate.getTime() - lastDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays > 1) {
      currentStreak = 0; // Streak broken
    }
  }

  const newChallenge: DailyChallenge = {
    date: today,
    completed: false,
    streak: currentStreak,
    tasks: [
      { id: 't1', section: 'pseudocode', type: 'mcq', target: 10, completed: 0, description: 'Solve 10 Pseudocode Questions' },
      { id: 't2', section: 'technical', type: 'mcq', target: 10, completed: 0, description: 'Solve 10 Technical MCQs' },
      { id: 't3', section: 'grammar', type: 'mcq', target: 5, completed: 0, description: 'Solve 5 Grammar / Sentence Correction' },
      { id: 't4', section: 'coding', type: 'coding', target: 1, completed: 0, description: 'Attempt 1 Coding Problem' },
      { id: 't5', section: 'situational-awareness', type: 'mcq', target: 1, completed: 0, description: 'Complete 1 Workplace Situational Task' },
    ],
  };
  
  safeStringify<DailyChallenge>(KEYS.DAILY_CHALLENGE, newChallenge);
  return newChallenge;
};

export const updateDailyChallengeProgress = (section: QuestionSection, count: number = 1): void => {
  const challenge = getDailyChallenge();
  let updated = false;

  challenge.tasks = challenge.tasks.map((task) => {
    if (task.section === section && task.completed < task.target) {
      task.completed = Math.min(task.target, task.completed + count);
      updated = true;
    }
    return task;
  });

  if (updated) {
    const allDone = challenge.tasks.every((t) => t.completed >= t.target);
    if (allDone && !challenge.completed) {
      challenge.completed = true;
      challenge.streak += 1;
    }
    safeStringify<DailyChallenge>(KEYS.DAILY_CHALLENGE, challenge);
  }
};

const updateStreak = (): void => {
  const challenge = getDailyChallenge();
  // Simply completing a question is enough to keep last active date, but streak only increases if daily challenge is fully completed.
  // We just sync streak in this call
  const today = new Date().toISOString().split('T')[0];
  const profile = getUserProfile();
  // Save streak in user profile or keep it in challenge. We will keep it synced.
};

// 21-Day Study Plan
export const getStudyPlan = (): StudyPlanDay[] => {
  const defaultPlan: StudyPlanDay[] = Array.from({ length: 21 }, (_, idx) => {
    const day = idx + 1;
    let title = '';
    let theme = '';
    let tasks: StudyPlanDay['tasks'] = [];

    if (day <= 5) {
      title = 'Technical & Pseudocode Foundations';
      theme = 'Focus on OOP principles, basic DBMS keys, pointer logic, and operator priority.';
      tasks = [
        { id: `d${day}-t1`, description: 'Solve 10 Pseudocode Questions', section: 'pseudocode', targetCount: 10, completedCount: 0, isCompleted: false },
        { id: `d${day}-t2`, description: 'Solve 10 Technical MCQs (OOP/DBMS)', section: 'technical', targetCount: 10, completedCount: 0, isCompleted: false },
      ];
    } else if (day <= 10) {
      title = 'Coding & DSA Practice';
      theme = 'Focus on Arrays, Strings, Searching, Sorting, and basic coding syntax.';
      tasks = [
        { id: `d${day}-t1`, description: 'Solve 2 Arrays/Strings coding problems', section: 'coding', targetCount: 2, completedCount: 0, isCompleted: false },
        { id: `d${day}-t2`, description: 'Review 5 DSA Interview Questions', section: 'interview', targetCount: 5, completedCount: 0, isCompleted: false },
        { id: `d${day}-t3`, description: 'Solve 5 Loop Pseudocodes', section: 'pseudocode', targetCount: 5, completedCount: 0, isCompleted: false },
      ];
    } else if (day <= 14) {
      title = 'Advanced Pseudocode & Technical Mocks';
      theme = 'Focus on complex recursion, bitwise operations, DBMS normalization, and OS scheduling.';
      tasks = [
        { id: `d${day}-t1`, description: 'Solve 10 Recursion/Bitwise Pseudocodes', section: 'pseudocode', targetCount: 10, completedCount: 0, isCompleted: false },
        { id: `d${day}-t2`, description: 'Solve 15 OS & Networks MCQs', section: 'technical', targetCount: 15, completedCount: 0, isCompleted: false },
      ];
    } else if (day <= 17) {
      title = 'English Communication & Cognitive Games';
      theme = 'Focus on situational communication, reading comprehension, and spatial/attention games.';
      tasks = [
        { id: `d${day}-t1`, description: 'Complete 1 English Practice Test', section: 'grammar', targetCount: 5, completedCount: 0, isCompleted: false },
        { id: `d${day}-t2`, description: 'Complete 2 Situational Awareness scenarios', section: 'situational-awareness', targetCount: 2, completedCount: 0, isCompleted: false },
        { id: `d${day}-t3`, description: 'Play 3 Cognitive Games', section: 'grammar', targetCount: 3, completedCount: 0, isCompleted: false }, // mapping cognitive to grammar for tracking
      ];
    } else if (day <= 20) {
      title = 'Full Mocks & Interview Prep';
      theme = 'Simulate the full test environment and practice core HR and technical questions.';
      tasks = [
        { id: `d${day}-t1`, description: 'Review 10 Technical & HR Interview Questions', section: 'interview', targetCount: 10, completedCount: 0, isCompleted: false },
        { id: `d${day}-t2`, description: 'Attempt 1 Full Mock Assessment Preset', section: 'technical', targetCount: 1, completedCount: 0, isCompleted: false },
      ];
    } else {
      title = 'Final Assessment Simulation';
      theme = 'Review incorrect answers in Mistake Notebook and attempt a final full-length test.';
      tasks = [
        { id: `d${day}-t1`, description: 'Solve 15 Mistake Notebook questions', section: 'pseudocode', targetCount: 15, completedCount: 0, isCompleted: false },
        { id: `d${day}-t2`, description: 'Run a Full-length Capgemini Simulation', section: 'technical', targetCount: 1, completedCount: 0, isCompleted: false },
      ];
    }

    return {
      day,
      title,
      theme,
      tasks,
      completed: false,
    };
  });

  return safeParse<StudyPlanDay[]>(KEYS.STUDY_PLAN, defaultPlan);
};

export const updateStudyPlanProgress = (taskId: string, increment: number = 1): void => {
  const plan = getStudyPlan();
  let updated = false;

  for (const day of plan) {
    for (const task of day.tasks) {
      if (task.id === taskId) {
        task.completedCount = Math.min(task.targetCount, task.completedCount + increment);
        task.isCompleted = task.completedCount >= task.targetCount;
        updated = true;
        break;
      }
    }
    day.completed = day.tasks.every((t) => t.isCompleted);
    if (updated) break;
  }

  if (updated) {
    safeStringify<StudyPlanDay[]>(KEYS.STUDY_PLAN, plan);
  }
};
