import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  Award,
  Bookmark,
  AlertTriangle,
  Flame,
  TrendingUp,
  Calendar,
  Briefcase,
  Settings,
  Menu,
  X,
  User,
  Info,
  RefreshCw,
  FileQuestion,
  Code
} from 'lucide-react';
import { getUserProfile } from '../services/storageService';
import ThemeToggle from './ThemeToggle';

// Reusable Button Components (Primary button: Black on White in Light, White on Black in Dark)
export const PrimaryButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }> = ({ children, className = '', ...props }) => (
  <button
    className={`px-4 py-2 bg-foreground text-background hover:opacity-90 font-semibold rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer text-xs md:text-sm ${className}`}
    {...props}
  >
    {children}
  </button>
);

export const SecondaryButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }> = ({ children, className = '', ...props }) => (
  <button
    className={`px-4 py-2 bg-card hover:bg-muted-bg text-foreground border border-border-primary font-semibold rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 disabled:opacity-50 disabled:pointer-events-none cursor-pointer text-xs md:text-sm ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Container
export const PageContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`p-4 md:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 ${className}`}>
    {children}
  </div>
);

// Dashboard Cards (Pure Black/White theme)
export const StatsCard: React.FC<{ title: string; value: string | number; icon: React.ReactNode; subtext?: string; className?: string }> = ({ title, value, icon, subtext, className = '' }) => (
  <div className={`bg-card border border-border-primary rounded-xl p-5 flex items-center justify-between shadow-sm hover:shadow-md transition duration-150 ${className}`}>
    <div className="space-y-1">
      <p className="text-[11px] font-bold uppercase tracking-wider text-muted-text">{title}</p>
      <h3 className="text-2xl font-extrabold text-foreground tracking-tight">{value}</h3>
      {subtext && <p className="text-[10px] text-muted-text font-semibold">{subtext}</p>}
    </div>
    <div className="p-2.5 bg-muted-bg rounded-lg text-foreground border border-border-primary/50">{icon}</div>
  </div>
);

export const SectionCard: React.FC<{ title: string; description: string; to: string; icon: React.ReactNode; badge?: string }> = ({ title, description, to, icon, badge }) => (
  <Link to={to} className="block group">
    <div className="bg-card border border-border-primary rounded-xl p-5 h-full flex flex-col justify-between shadow-sm hover:border-blue-500/50 hover:shadow transition duration-200 relative overflow-hidden">
      {badge && (
        <span className="absolute top-3 right-3 bg-blue-500/10 text-blue-500 text-[10px] px-2 py-0.5 rounded-full border border-blue-500/20 font-bold uppercase">
          {badge}
        </span>
      )}
      <div className="space-y-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-muted-bg text-foreground border border-border-primary/40 group-hover:bg-foreground group-hover:text-background transition duration-200">
          {icon}
        </div>
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-foreground group-hover:text-blue-500 transition">{title}</h4>
          <p className="text-xs text-muted-text line-clamp-2 leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="mt-4 text-[10px] font-bold text-blue-500 group-hover:underline flex items-center gap-1">
        Start Practice &rarr;
      </div>
    </div>
  </Link>
);

// Navigation Sidebar & Header Layout
export const Sidebar: React.FC = () => {
  const location = useLocation();
  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={18} /> },
    { name: 'English Practice', path: '/practice/english', icon: <BookOpen size={18} /> },
    { name: 'Technical MCQ', path: '/practice/technical', icon: <Award size={18} /> },
    { name: 'Pseudocode Tracing', path: '/practice/pseudocode', icon: <FileQuestion size={18} /> },
    { name: 'Coding Arena', path: '/practice/coding', icon: <Code size={18} /> },
    { name: 'Cognitive Games', path: '/practice/cognitive', icon: <Flame size={18} /> },
    { name: 'Interview Prep', path: '/interview', icon: <Briefcase size={18} /> },
    { name: 'Mistake Notebook', path: '/mistakes', icon: <AlertTriangle size={18} /> },
    { name: 'Bookmarks', path: '/bookmarks', icon: <Bookmark size={18} /> },
    { name: '21-Day Study Plan', path: '/study-plan', icon: <Calendar size={18} /> },
    { name: 'Performance Analytics', path: '/analytics', icon: <TrendingUp size={18} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={18} /> },
  ];

  return (
    <aside className="w-60 bg-card border-r border-border-primary min-h-screen hidden md:flex flex-col flex-shrink-0 transition-colors duration-150">
      <div className="p-6 border-b border-border-primary flex flex-col">
        <h1 className="text-lg font-black tracking-tight text-foreground">Capgemini Prep</h1>
        <span className="text-[10px] text-muted-text font-bold uppercase tracking-wider">Arena Assessment</span>
      </div>
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + '/');
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-semibold transition duration-150 relative ${
                isActive
                  ? 'bg-muted-bg text-foreground border border-border-primary'
                  : 'text-muted-text hover:text-foreground hover:bg-muted-bg/50'
              }`}
            >
              {isActive && (
                <span className="absolute left-0 top-3 bottom-3 w-1 bg-blue-500 rounded-r" />
              )}
              {item.icon}
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-border-primary text-center">
        <p className="text-[10px] text-muted-text font-semibold leading-relaxed">
          Independent prep platform.<br/>Not affiliated with Capgemini.
        </p>
      </div>
    </aside>
  );
};

export const TopHeader: React.FC = () => {
  const profile = getUserProfile();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  let streak = 0;
  try {
    const challenge = JSON.parse(localStorage.getItem('capgemini-prep:daily-challenge') || '{}');
    streak = challenge.streak || 0;
  } catch (e) {}

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={18} /> },
    { name: 'English', path: '/practice/english', icon: <BookOpen size={18} /> },
    { name: 'Technical', path: '/practice/technical', icon: <Award size={18} /> },
    { name: 'Pseudocode', path: '/practice/pseudocode', icon: <FileQuestion size={18} /> },
    { name: 'Coding', path: '/practice/coding', icon: <Code size={18} /> },
    { name: 'Cognitive', path: '/practice/cognitive', icon: <Flame size={18} /> },
    { name: 'Interview', path: '/interview', icon: <Briefcase size={18} /> },
    { name: 'Mistakes', path: '/mistakes', icon: <AlertTriangle size={18} /> },
    { name: 'Bookmarks', path: '/bookmarks', icon: <Bookmark size={18} /> },
    { name: 'Study Plan', path: '/study-plan', icon: <Calendar size={18} /> },
    { name: 'Analytics', path: '/analytics', icon: <TrendingUp size={18} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={18} /> },
  ];

  return (
    <header className="bg-card border-b border-border-primary px-6 py-4 flex items-center justify-between relative transition-colors duration-150 z-30">
      <div className="flex items-center gap-3">
        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 text-foreground hover:bg-muted-bg rounded-lg border border-border-primary cursor-pointer"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
        <div className="md:hidden flex flex-col">
          <span className="text-sm font-bold text-foreground">Capgemini Prep</span>
          <span className="text-[9px] text-muted-text font-bold uppercase">Arena Tool</span>
        </div>
        <div className="hidden md:flex flex-col">
          <h2 className="text-sm font-extrabold text-foreground">Welcome, {profile.name}</h2>
          <p className="text-[10px] text-muted-text font-bold uppercase tracking-wider">Target package: {profile.targetPackage}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Streak counter */}
        <div className="flex items-center gap-1 px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-full text-xs font-bold shadow-sm">
          <Flame size={14} className="fill-amber-500" />
          <span>{streak} Day Streak</span>
        </div>

        {/* Unified Theme Toggle */}
        <ThemeToggle />
        
        {/* User profile initial */}
        <div className="w-8 h-8 rounded-full bg-foreground text-background border border-border-primary flex items-center justify-center text-xs font-extrabold uppercase shadow-sm">
          {profile.name.charAt(0)}
        </div>
      </div>

      {/* Mobile navigation sidebar overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-card border-b border-border-primary z-50 p-4 md:hidden grid grid-cols-2 gap-3 shadow-xl max-h-[75vh] overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + '/');
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2.5 p-3 rounded-xl text-xs font-bold border transition ${
                  isActive 
                    ? 'bg-muted-bg border-border-primary text-foreground' 
                    : 'bg-card border-border-primary/50 text-muted-text hover:text-foreground'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            );
          })}
          <div className="col-span-2 pt-2 border-t border-border-primary text-[9px] text-center text-muted-text font-semibold">
            Independent prep platform. Not affiliated with Capgemini.
          </div>
        </div>
      )}
    </header>
  );
};

// Generic Modal Component
export const Modal: React.FC<{ isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" onClick={onClose} />
      {/* Modal Container */}
      <div className="bg-card border border-border-primary rounded-xl max-w-lg w-full p-6 shadow-2xl relative z-10 space-y-4 max-h-[90vh] overflow-y-auto">
        <button className="absolute top-4 right-4 text-muted-text hover:text-foreground cursor-pointer" onClick={onClose}>
          <X size={18} />
        </button>
        <h3 className="text-base font-bold text-foreground">{title}</h3>
        <div className="text-foreground text-xs leading-relaxed">{children}</div>
      </div>
    </div>
  );
};

// Generic Drawer Component (Used for Mobile Question Palette)
export const Drawer: React.FC<{ isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      {/* Panel */}
      <div className="bg-card border-l border-border-primary w-80 max-w-full h-full p-6 relative z-10 flex flex-col justify-between shadow-2xl">
        <div className="space-y-4 flex-1 overflow-y-auto">
          <div className="flex items-center justify-between pb-3 border-b border-border-primary">
            <h3 className="text-sm font-bold text-foreground">{title}</h3>
            <button className="text-muted-text hover:text-foreground cursor-pointer" onClick={onClose}>
              <X size={18} />
            </button>
          </div>
          <div className="py-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

// State Indicators
export const LoadingState: React.FC<{ message?: string }> = ({ message = 'Loading questions...' }) => (
  <div className="flex flex-col items-center justify-center py-16 space-y-4">
    <RefreshCw className="animate-spin text-foreground" size={24} />
    <p className="text-muted-text text-xs font-semibold">{message}</p>
  </div>
);

export const ErrorState: React.FC<{ message: string; onRetry?: () => void }> = ({ message, onRetry }) => (
  <div className="flex flex-col items-center justify-center py-12 px-6 border border-rose-500/20 bg-rose-500/5 rounded-xl space-y-4 text-center max-w-md mx-auto">
    <AlertTriangle className="text-rose-500" size={32} />
    <h4 className="text-sm font-bold text-foreground">Something went wrong</h4>
    <p className="text-xs text-muted-text">{message}</p>
    {onRetry && (
      <PrimaryButton onClick={onRetry} className="bg-rose-600 hover:bg-rose-500 text-xs py-1.5 px-3">
        Try Again
      </PrimaryButton>
    )}
  </div>
);

export const EmptyState: React.FC<{ title: string; description: string; actionText?: string; onAction?: () => void }> = ({ title, description, actionText, onAction }) => (
  <div className="flex flex-col items-center justify-center py-16 px-6 border border-border-primary bg-card rounded-xl space-y-4 text-center shadow-sm">
    <Info className="text-muted-text" size={28} />
    <h4 className="text-sm font-bold text-foreground">{title}</h4>
    <p className="text-xs text-muted-text max-w-xs leading-relaxed">{description}</p>
    {actionText && onAction && (
      <PrimaryButton onClick={onAction} className="text-xs py-1.5 px-3">
        {actionText}
      </PrimaryButton>
    )}
  </div>
);
