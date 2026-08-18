import React, { useState, useEffect } from 'react';
import {
  PageContainer,
  PrimaryButton,
  SecondaryButton
} from '../components/UI';
import { User, Settings as SettingsIcon, Save, ShieldCheck, Sun, Moon, Monitor } from 'lucide-react';
import { getUserProfile, saveUserProfile } from '../services/storageService';
import { getThemeMode, saveThemeMode, ThemeMode } from '../services/themeService';
import { UserProfile } from '../types';

const Settings: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>('light');

  useEffect(() => {
    setProfile(getUserProfile());
    setCurrentTheme(getThemeMode());
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile) return;

    saveUserProfile(profile);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleThemeChange = (mode: ThemeMode) => {
    saveThemeMode(mode);
    setCurrentTheme(mode);
  };

  const handleChange = (key: keyof UserProfile, val: any) => {
    if (!profile) return;
    setProfile({
      ...profile,
      [key]: val
    });
  };

  if (!profile) return null;

  return (
    <PageContainer>
      {/* Header */}
      <div className="border-b border-border-primary pb-5 space-y-1">
        <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          <SettingsIcon className="text-blue-450" />
          Settings
        </h2>
        <p className="text-xs text-muted-text">
          Customize your study goals, daily question targets, and select your target package.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Left/Middle: Settings Form */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Form */}
          <form onSubmit={handleSave} className="bg-card border border-border-primary rounded-xl p-6 space-y-6 shadow-sm">
            <div className="flex items-center gap-2 border-b border-border-primary pb-3">
              <User className="text-blue-500" size={16} />
              <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">Candidate Profile</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs text-foreground">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="font-bold text-muted-text uppercase tracking-wider">Full Name:</label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  required
                  className="w-full bg-card border border-border-primary p-3 rounded-lg text-foreground focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* College */}
              <div className="space-y-1.5">
                <label className="font-bold text-muted-text uppercase tracking-wider">College Name:</label>
                <input
                  type="text"
                  value={profile.college}
                  onChange={(e) => handleChange('college', e.target.value)}
                  required
                  className="w-full bg-card border border-border-primary p-3 rounded-lg text-foreground focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Branch */}
              <div className="space-y-1.5">
                <label className="font-bold text-muted-text uppercase tracking-wider">Branch (CSE, ECE, IT):</label>
                <input
                  type="text"
                  value={profile.branch}
                  onChange={(e) => handleChange('branch', e.target.value)}
                  required
                  className="w-full bg-card border border-border-primary p-3 rounded-lg text-foreground focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Year */}
              <div className="space-y-1.5">
                <label className="font-bold text-muted-text uppercase tracking-wider">Graduation Year:</label>
                <input
                  type="text"
                  value={profile.graduationYear}
                  onChange={(e) => handleChange('graduationYear', e.target.value)}
                  required
                  className="w-full bg-card border border-border-primary p-3 rounded-lg text-foreground focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Lang */}
              <div className="space-y-1.5">
                <label className="font-bold text-muted-text uppercase tracking-wider">Coding Language:</label>
                <select
                  value={profile.preferredLanguage}
                  onChange={(e) => handleChange('preferredLanguage', e.target.value)}
                  className="w-full bg-card border border-border-primary p-3 rounded-lg text-foreground focus:ring-1 focus:ring-blue-500 focus:outline-none cursor-pointer"
                >
                  <option value="cpp">C++</option>
                  <option value="java">Java</option>
                  <option value="c">C</option>
                </select>
              </div>

              {/* Target Package */}
              <div className="space-y-1.5">
                <label className="font-bold text-muted-text uppercase tracking-wider">Target Package:</label>
                <select
                  value={profile.targetPackage}
                  onChange={(e) => handleChange('targetPackage', e.target.value)}
                  className="w-full bg-card border border-border-primary p-3 rounded-lg text-foreground focus:ring-1 focus:ring-blue-500 focus:outline-none cursor-pointer"
                >
                  <option value="₹7 LPA">₹7 LPA (Higher Package)</option>
                  <option value="₹4 LPA">₹4 LPA (Standard Package)</option>
                </select>
              </div>

              {/* Daily Target */}
              <div className="space-y-1.5">
                <label className="font-bold text-muted-text uppercase tracking-wider">Daily Target:</label>
                <select
                  value={profile.dailyQuestionTarget}
                  onChange={(e) => handleChange('dailyQuestionTarget', parseInt(e.target.value))}
                  className="w-full bg-card border border-border-primary p-3 rounded-lg text-foreground focus:ring-1 focus:ring-blue-500 focus:outline-none cursor-pointer"
                >
                  <option value={10}>10 Questions</option>
                  <option value={20}>20 Questions</option>
                  <option value={25}>25 Questions (recommended)</option>
                  <option value={50}>50 Questions</option>
                </select>
              </div>
            </div>

            {saveSuccess && (
              <div className="p-3 bg-emerald-500/5 border border-emerald-500/20 text-emerald-600 text-xs rounded-lg flex items-center gap-2">
                <ShieldCheck size={16} />
                <span>Profile configurations saved successfully!</span>
              </div>
            )}

            <PrimaryButton type="submit" className="flex items-center gap-1.5 py-2.5 px-5 font-bold uppercase tracking-wider">
              <Save size={14} />
              Save Profile
            </PrimaryButton>
          </form>

          {/* Theme Settings Section (Appearance) */}
          <div className="bg-card border border-border-primary rounded-xl p-6 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 border-b border-border-primary pb-3">
              <SettingsIcon className="text-blue-500" size={16} />
              <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">Appearance settings</h3>
            </div>

            <p className="text-xs text-muted-text leading-relaxed">
              Select your preferred visual style. The theme updates immediately across all screens.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
              {[
                { id: 'light', name: 'Light Mode', desc: 'Clean white workspace', icon: <Sun size={18} className="text-amber-500" /> },
                { id: 'dark', name: 'Dark Mode', desc: 'Pure black workspace', icon: <Moon size={18} className="text-blue-400" /> },
                { id: 'system', name: 'System Mode', desc: 'Match device colors', icon: <Monitor size={18} className="text-muted-text" /> }
              ].map((theme) => {
                const isActive = currentTheme === theme.id;
                return (
                  <button
                    type="button"
                    key={theme.id}
                    onClick={() => handleThemeChange(theme.id as ThemeMode)}
                    className={`w-full text-left p-4 rounded-xl border transition duration-150 flex flex-col justify-between space-y-3 cursor-pointer ${
                      isActive
                        ? 'bg-blue-500/10 border-blue-500 text-blue-500'
                        : 'bg-card border-border-primary text-muted-text hover:border-slate-450 hover:bg-muted-bg/30'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      {theme.icon}
                      <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                        isActive ? 'border-blue-500 bg-blue-500' : 'border-border-primary'
                      }`}>
                        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-foreground text-xs">{theme.name}</h4>
                      <p className="text-[10px] text-muted-text mt-0.5">{theme.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right: Policy Disclaimer Card */}
        <div className="bg-card border border-border-primary rounded-xl p-5 md:p-6 space-y-4 shadow-sm">
          <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">Independent Preparation Policy</h4>
          
          <div className="space-y-3 text-xs text-muted-text leading-relaxed">
            <p>
              This is an independent placement-preparation platform. It is <strong>not affiliated with, sponsored by, or endorsed by Capgemini.</strong>
            </p>
            <p>
              Practice scores, accuracy ratios, and internal readiness indicators calculated inside this app are for study purposes only.
            </p>
            <p className="border-t border-border-primary pt-3 text-[10px] italic">
              "Assessment performance inside this platform does not guarantee a particular job role or package tier with Capgemini."
            </p>
          </div>
        </div>

      </div>
    </PageContainer>
  );
};

export default Settings;
