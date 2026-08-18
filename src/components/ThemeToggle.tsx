import React, { useEffect, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { getThemeMode, saveThemeMode, ThemeMode } from '../services/themeService';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [currentMode, setCurrentMode] = useState<ThemeMode>('light');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setCurrentMode(getThemeMode());
  }, []);

  const handleSelect = (mode: ThemeMode) => {
    saveThemeMode(mode);
    setCurrentMode(mode);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg border border-border-primary bg-card hover:bg-muted-bg text-foreground transition-all duration-150 flex items-center justify-center cursor-pointer"
        aria-label="Change theme"
        title="Change theme"
      >
        {currentMode === 'light' && <Sun size={16} className="text-amber-500" />}
        {currentMode === 'dark' && <Moon size={16} className="text-blue-400" />}
        {currentMode === 'system' && <Monitor size={16} className="text-muted-text" />}
      </button>

      {isOpen && (
        <>
          {/* Backdrop to close click-aways */}
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          
          <div className="absolute right-0 mt-1.5 w-32 bg-card border border-border-primary rounded-lg shadow-xl z-50 p-1 flex flex-col space-y-0.5 animate-fadeIn">
            {[
              { id: 'light', name: 'Light', icon: <Sun size={14} className="text-amber-500" /> },
              { id: 'dark', name: 'Dark', icon: <Moon size={14} className="text-blue-400" /> },
              { id: 'system', name: 'System', icon: <Monitor size={14} className="text-muted-text" /> }
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt.id as ThemeMode)}
                className={`flex items-center gap-2 px-3 py-1.5 w-full text-left rounded-md text-xs font-medium cursor-pointer transition ${
                  currentMode === opt.id
                    ? 'bg-muted-bg text-foreground font-bold'
                    : 'text-muted-text hover:text-foreground hover:bg-muted-bg/50'
                }`}
              >
                {opt.icon}
                <span>{opt.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default ThemeToggle;
