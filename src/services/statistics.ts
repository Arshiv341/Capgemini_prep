import { getAttempts, getMistakes } from './storageService';
import { QuestionAttempt, TopicStats, UserStats, QuestionSection } from '../types';

export const calculateSectionScores = (attempts: QuestionAttempt[]): Record<string, number> => {
  const sectionGroups: Record<string, { correct: number; total: number }> = {};
  
  // Initialize sections
  const sections: QuestionSection[] = [
    'situational-awareness', 'reading', 'listening', 'speaking', 'writing', 'grammar',
    'technical', 'pseudocode', 'coding', 'interview'
  ];
  
  sections.forEach((sec) => {
    sectionGroups[sec] = { correct: 0, total: 0 };
  });

  attempts.forEach((att) => {
    if (sectionGroups[att.section]) {
      sectionGroups[att.section].total += 1;
      if (att.correct) {
        sectionGroups[att.section].correct += 1;
      }
    }
  });

  const scores: Record<string, number> = {};
  
  // Calculate specific aggregate areas
  // English = (SA + Reading + Listening + Speaking + Writing + Grammar) / 6
  const englishSections = ['situational-awareness', 'reading', 'listening', 'speaking', 'writing', 'grammar'];
  let englishTotal = 0;
  let englishCorrect = 0;
  englishSections.forEach(sec => {
    englishTotal += sectionGroups[sec].total;
    englishCorrect += sectionGroups[sec].correct;
  });
  scores['english'] = englishTotal > 0 ? Math.round((englishCorrect / englishTotal) * 100) : 0;

  scores['technical'] = sectionGroups['technical'].total > 0 
    ? Math.round((sectionGroups['technical'].correct / sectionGroups['technical'].total) * 100) 
    : 0;

  scores['pseudocode'] = sectionGroups['pseudocode'].total > 0 
    ? Math.round((sectionGroups['pseudocode'].correct / sectionGroups['pseudocode'].total) * 100) 
    : 0;

  scores['coding'] = sectionGroups['coding'].total > 0 
    ? Math.round((sectionGroups['coding'].correct / sectionGroups['coding'].total) * 100) 
    : 0;

  scores['interview'] = sectionGroups['interview'].total > 0 
    ? Math.round((sectionGroups['interview'].correct / sectionGroups['interview'].total) * 100) 
    : 0;

  // Let's add a placeholder for cognitive since it's game-based and scored in games.
  // We can calculate it based on game history if stored, or set a base.
  scores['cognitive'] = 0; 
  try {
    const gameHistory = JSON.parse(localStorage.getItem('capgemini-prep:cognitive-history') || '[]');
    if (gameHistory.length > 0) {
      const sum = gameHistory.reduce((acc: number, curr: any) => acc + (curr.accuracy || 0), 0);
      scores['cognitive'] = Math.round(sum / gameHistory.length);
    }
  } catch (e) {}

  return scores;
};

export const calculateTopicStats = (attempts: QuestionAttempt[]): TopicStats[] => {
  const groups: Record<string, { section: QuestionSection; total: number; correct: number; timeSum: number }> = {};

  attempts.forEach((att) => {
    const key = `${att.section}:${att.topic}`;
    if (!groups[key]) {
      groups[key] = { section: att.section, total: 0, correct: 0, timeSum: 0 };
    }
    groups[key].total += 1;
    if (att.correct) groups[key].correct += 1;
    groups[key].timeSum += att.timeSpentSeconds;
  });

  return Object.entries(groups).map(([key, data]) => {
    const [_, topic] = key.split(':');
    return {
      topic,
      section: data.section,
      totalAttempts: data.total,
      correctAttempts: data.correct,
      accuracy: Math.round((data.correct / data.total) * 100),
      averageTimeSeconds: Math.round(data.timeSum / data.total),
    };
  });
};

export const getWeakAndStrongTopics = (topicStats: TopicStats[]) => {
  if (topicStats.length === 0) {
    return { weakest: 'None', strongest: 'None', recommendations: [] };
  }

  // Sort for weakest: low accuracy first, then higher attempt counts (representing persistent issues)
  const sortedWeak = [...topicStats].sort((a, b) => {
    if (a.accuracy !== b.accuracy) return a.accuracy - b.accuracy;
    return b.totalAttempts - a.totalAttempts;
  });

  // Sort for strongest: high accuracy first, then high attempt counts
  const sortedStrong = [...topicStats].sort((a, b) => {
    if (b.accuracy !== a.accuracy) return b.accuracy - a.accuracy;
    return b.totalAttempts - a.totalAttempts;
  });

  const weakest = sortedWeak[0]?.topic || 'None';
  const strongest = sortedStrong[0]?.topic || 'None';

  // Recommendations: topics with accuracy < 70%, sorted by priority
  const recommendations = sortedWeak
    .filter(t => t.accuracy < 70)
    .slice(0, 3)
    .map(t => ({
      topic: t.topic,
      section: t.section,
      accuracy: t.accuracy,
      reason: t.accuracy < 50 ? 'Critical performance' : 'Needs practice'
    }));

  return { weakest, strongest, recommendations };
};

export const calculateUserStats = (): UserStats => {
  const attempts = getAttempts();
  const mistakes = getMistakes();
  
  const sectionScores = calculateSectionScores(attempts);
  const topicStats = calculateTopicStats(attempts);
  const { weakest, strongest } = getWeakAndStrongTopics(topicStats);

  // Overall accuracy
  const totalAttempts = attempts.length;
  const correctAttempts = attempts.filter(a => a.correct).length;
  const overallAccuracy = totalAttempts > 0 ? Math.round((correctAttempts / totalAttempts) * 100) : 0;

  // Overall readiness: weighted average of sections
  // If a section is unattempted, we treat it as 0
  const activeSections = ['english', 'technical', 'pseudocode', 'coding', 'interview'];
  if (sectionScores['cognitive'] > 0) activeSections.push('cognitive');
  const sumScores = activeSections.reduce((acc, sec) => acc + (sectionScores[sec] || 0), 0);
  const overallReadiness = activeSections.length > 0 ? Math.round(sumScores / activeSections.length) : 0;

  // Average test score from past Mock Assessment Results
  let averageTestScore = 0;
  let recentTestsCount = 0;
  let testSum = 0;
  const recentTestsList: UserStats['recentTests'] = [];

  try {
    const results = JSON.parse(localStorage.getItem('capgemini-prep:assessment-results') || '[]');
    if (results.length > 0) {
      results.forEach((r: any) => {
        testSum += r.percentage;
        recentTestsCount++;
        recentTestsList.push({
          id: r.id,
          name: r.name,
          score: r.score,
          maxScore: r.maxScore,
          date: r.date.split('T')[0],
        });
      });
      averageTestScore = Math.round(testSum / recentTestsCount);
    }
  } catch (e) {}

  // Streak & Longest Streak
  let streak = 0;
  let longestStreak = 0;
  try {
    const challenge = JSON.parse(localStorage.getItem('capgemini-prep:daily-challenge') || '{}');
    streak = challenge.streak || 0;
    // Longest streak is stored in local storage
    longestStreak = Number(localStorage.getItem('capgemini-prep:longest-streak') || '0');
    if (streak > longestStreak) {
      longestStreak = streak;
      localStorage.setItem('capgemini-prep:longest-streak', String(longestStreak));
    }
  } catch (e) {}

  return {
    overallReadiness: totalAttempts === 0 ? 0 : overallReadiness,
    sectionScores,
    totalQuestionsAttempted: totalAttempts,
    overallAccuracy,
    averageTestScore,
    weakestTopic: totalAttempts === 0 ? 'Not enough data' : weakest,
    strongestTopic: totalAttempts === 0 ? 'Not enough data' : strongest,
    recentTests: recentTestsList.slice(-5).reverse(), // last 5 tests
    streak,
    longestStreak,
  };
};
