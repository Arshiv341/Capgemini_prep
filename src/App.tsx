import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import { getThemeMode, applyTheme, listenToSystemTheme } from './services/themeService';

// Import pages
import Dashboard from './pages/Dashboard';
import EnglishPractice from './pages/EnglishPractice';
import TechnicalPractice from './pages/TechnicalPractice';
import PseudocodePractice from './pages/PseudocodePractice';
import CodingPractice from './pages/CodingPractice';
import CognitiveGames from './pages/CognitiveGames';
import InterviewPrep from './pages/InterviewPrep';
import Bookmarks from './pages/Bookmarks';
import MistakeNotebook from './pages/MistakeNotebook';
import StudyPlan from './pages/StudyPlan';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import MockAssessment from './pages/MockAssessment';
import MockTestScreen from './pages/MockTestScreen';
import MockTestResult from './pages/MockTestResult';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  useEffect(() => {
    const currentTheme = getThemeMode();
    applyTheme(currentTheme);
    const cleanup = listenToSystemTheme(() => {});
    return () => cleanup();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Timed distraction-free fullscreen assessment screen - separate from Dashboard Layout */}
        <Route path="/mock/:id" element={<ErrorBoundary><MockTestScreen /></ErrorBoundary>} />

        {/* Standard pages wrapped in Sidebar & TopHeader Dashboard Layout */}
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="practice/english" element={<EnglishPractice />} />
          <Route path="practice/technical" element={<TechnicalPractice />} />
          <Route path="practice/pseudocode" element={<PseudocodePractice />} />
          <Route path="practice/coding" element={<CodingPractice />} />
          <Route path="practice/cognitive" element={<CognitiveGames />} />
          
          <Route path="mock" element={<Navigate to="/mock/new" replace />} />
          <Route path="mock/new" element={<ErrorBoundary><MockAssessment /></ErrorBoundary>} />
          <Route path="mock/:id/result" element={<ErrorBoundary><MockTestResult /></ErrorBoundary>} />
          
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="mistakes" element={<MistakeNotebook />} />
          <Route path="study-plan" element={<StudyPlan />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="interview" element={<InterviewPrep />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Fallback to dashboard */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
