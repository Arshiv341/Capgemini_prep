export type ThemeMode = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'capgemini-prep:theme';

export const getThemeMode = (): ThemeMode => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark' || saved === 'system') {
      return saved;
    }
  } catch (e) {
    console.error('Failed to read theme from localStorage', e);
  }
  return 'light'; // Default Light mode
};

export const applyTheme = (mode: ThemeMode): void => {
  try {
    const root = document.documentElement;
    let isDark = false;

    if (mode === 'dark') {
      isDark = true;
    } else if (mode === 'system') {
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  } catch (e) {
    console.error('Failed to apply theme', e);
  }
};

export const saveThemeMode = (mode: ThemeMode): void => {
  try {
    localStorage.setItem(STORAGE_KEY, mode);
    applyTheme(mode);
  } catch (e) {
    console.error('Failed to save theme', e);
  }
};

// System Theme Change Listener Setup
let systemThemeListener: ((e: MediaQueryListEvent) => void) | null = null;
let mediaQuery: MediaQueryList | null = null;

export const listenToSystemTheme = (callback: () => void): () => void => {
  if (typeof window === 'undefined') return () => {};

  // Clean up existing listener if any
  if (systemThemeListener && mediaQuery) {
    mediaQuery.removeEventListener('change', systemThemeListener);
  }

  mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  systemThemeListener = (e: MediaQueryListEvent) => {
    const currentMode = getThemeMode();
    if (currentMode === 'system') {
      applyTheme('system');
      callback();
    }
  };

  mediaQuery.addEventListener('change', systemThemeListener);

  return () => {
    if (mediaQuery && systemThemeListener) {
      mediaQuery.removeEventListener('change', systemThemeListener);
      systemThemeListener = null;
      mediaQuery = null;
    }
  };
};
