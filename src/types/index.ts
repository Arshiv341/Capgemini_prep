export type QuestionDifficulty = 'easy' | 'medium' | 'hard';

export type QuestionSourceType = 'recalled-pyq' | 'reference-derived' | 'original-practice';

export type QuestionSection =
  | 'situational-awareness'
  | 'reading'
  | 'listening'
  | 'speaking'
  | 'writing'
  | 'grammar'
  | 'technical'
  | 'pseudocode'
  | 'coding'
  | 'interview';

export type QuestionStatus =
  | 'not-visited'
  | 'not-answered'
  | 'answered'
  | 'marked-for-review'
  | 'answered-and-marked';

export interface BaseQuestion {
  id: string;
  section: QuestionSection;
  topic: string;
  subtopic: string;
  difficulty: QuestionDifficulty;
  question: string;
  explanation: string;
  sourceType: QuestionSourceType;
  sourceReference?: string;
  tags: string[];
  estimatedSeconds?: number;
}

export interface MCQQuestion extends BaseQuestion {
  scenario?: string;
  options: string[];
  correctAnswer: number; // index of options (0-3)
}

export interface PseudocodeQuestion extends BaseQuestion {
  code: string;
  options: string[];
  correctAnswer: number; // index of options
  traceTable?: {
    headers: string[];
    rows: string[][]; // line-by-line tracing variables state
  };
}

export interface ReadingPassage {
  id: string;
  section: 'reading';
  topic: string;
  passage: string;
  questions: {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }[];
  difficulty: QuestionDifficulty;
  sourceType: QuestionSourceType;
  tags: string[];
}

export interface ListeningQuestion extends BaseQuestion {
  audioText: string;
  options: string[];
  correctAnswer: number;
  maxReplays?: number;
}

export interface SpeakingPrompt {
  id: string;
  section: 'speaking';
  topic: string;
  prompt: string;
  category: string;
  difficulty: QuestionDifficulty;
  sourceType: QuestionSourceType;
  tags: string[];
  checklist: string[];
}

export interface BusinessWritingPrompt {
  id: string;
  section: 'writing';
  topic: string;
  prompt: string;
  difficulty: QuestionDifficulty;
  sourceType: QuestionSourceType;
  tags: string[];
  modelAnswer: string;
  checklist: string[];
}

export interface CodingExample {
  input: string;
  output: string;
  explanation?: string;
}

export interface CodingProblem {
  id: string;
  section: 'coding';
  title: string;
  difficulty: QuestionDifficulty;
  topics: string[];
  description: string;
  inputFormat: string;
  outputFormat: string;
  constraints: string[];
  examples: CodingExample[];
  hints: string[];
  expectedTimeComplexity: string;
  expectedSpaceComplexity: string;
  solutions: {
    cpp: string;
    java: string;
    c: string;
  };
  sourceType: QuestionSourceType;
}

export interface InterviewQuestion {
  id: string;
  section: 'interview';
  category: 'HR' | 'Resume' | 'Projects' | 'OOP' | 'DBMS' | 'OS' | 'Networks' | 'SQL' | 'DSA' | 'Behavioral' | 'Situational';
  question: string;
  shortAnswer: string;
  idealAnswer: string;
  keyPoints: string[];
  commonMistakes: string[];
  followUpQuestions: string[];
}

export interface AssessmentConfig {
  name: string;
  enableEnglish: boolean;
  enableTechnical: boolean;
  enablePseudocode: boolean;
  enableCoding: boolean;
  enableCognitive: boolean;
  englishCount: number;
  technicalCount: number;
  pseudocodeCount: number;
  codingCount: number;
  cognitiveCount: number;
  timers: {
    english: number; // minutes
    technicalPseudocode: number; // minutes
    coding: number; // minutes
    cognitive: number; // minutes
    overall?: number; // minutes, if single timer
  };
  difficulty: QuestionDifficulty | 'mixed';
}

export interface AssessmentQuestion {
  questionId: string;
  section: QuestionSection;
  status: QuestionStatus;
  userAnswer?: string | number | { subject?: string; body: string } | string[]; // depending on type
  timeSpentSeconds: number;
}

export interface AssessmentStageState {
  stageIndex: number;
  stageName: 'English' | 'Technical & Pseudocode' | 'Coding' | 'Cognitive' | 'Completed';
  timeRemainingSeconds: number;
  questions: AssessmentQuestion[];
  currentQuestionIndex: number;
}

export interface AssessmentState {
  id: string;
  config: AssessmentConfig;
  isActive: boolean;
  startTime: number;
  stages: AssessmentStageState[];
  currentStageIndex: number;
  
  // Flat state properties
  name: string;
  type: string;
  questions: AssessmentQuestion[];
  currentQuestionIndex: number;
  answers: Record<string, any>;
  reviewFlags: Record<string, boolean>;
  visited: Record<string, boolean>;
  startedAt: number;
  expiresAt: number;
  status: 'in-progress' | 'submitted';
}

export interface AssessmentResult {
  id: string;
  name: string;
  score: number;
  maxScore: number;
  percentage: number;
  correct: number;
  incorrect: number;
  skipped: number;
  accuracy: number;
  timeTakenSeconds: number;
  averageTimePerQuestion: number;
  sectionScores: Record<string, number>;
  topicBreakdown: Record<string, { correct: number; total: number }>;
  strongestTopic: string;
  weakestTopic: string;
  date: string;
  configSummary: string;
}

export interface QuestionAttempt {
  questionId: string;
  section: QuestionSection;
  topic: string;
  subtopic: string;
  difficulty: QuestionDifficulty;
  correct: boolean;
  timeSpentSeconds: number;
  selectedAnswer?: string | number;
  date: string;
}

export interface TopicStats {
  topic: string;
  section: QuestionSection;
  totalAttempts: number;
  correctAttempts: number;
  accuracy: number;
  averageTimeSeconds: number;
}

export interface UserStats {
  overallReadiness: number;
  sectionScores: Record<string, number>;
  totalQuestionsAttempted: number;
  overallAccuracy: number;
  averageTestScore: number;
  weakestTopic: string;
  strongestTopic: string;
  recentTests: { id: string; name: string; score: number; maxScore: number; date: string }[];
  streak: number;
  longestStreak: number;
  lastActiveDate?: string;
}

export interface UserProfile {
  name: string;
  college: string;
  branch: string;
  graduationYear: string;
  preferredLanguage: 'cpp' | 'java' | 'c';
  targetPackage: string; // e.g. "₹7 LPA" or "₹4 LPA"
  dailyQuestionTarget: number;
}

export interface DailyChallengeTask {
  id: string;
  section: QuestionSection;
  type: string;
  target: number;
  completed: number;
  description: string;
}

export interface DailyChallenge {
  date: string;
  tasks: DailyChallengeTask[];
  completed: boolean;
  streak: number;
}

export interface Bookmark {
  questionId: string;
  section: QuestionSection;
  bookmarkedAt: string;
}

export interface MistakeEntry {
  questionId: string;
  section: QuestionSection;
  topic: string;
  subtopic: string;
  attemptCount: number;
  wrongCount: number;
  lastAttemptedAt: string;
}

export interface StudyPlanDay {
  day: number;
  title: string;
  theme: string;
  tasks: {
    id: string;
    description: string;
    section: QuestionSection;
    targetCount: number;
    completedCount: number;
    isCompleted: boolean;
  }[];
  completed: boolean;
}
