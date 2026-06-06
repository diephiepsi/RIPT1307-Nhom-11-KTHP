import { useEffect, useState, useCallback } from 'react';

export type ThemeMode = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'unibrain:theme';

function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useTheme() {
  const [mode, setMode] = useState<ThemeMode>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return (raw as ThemeMode) || 'system';
    } catch {
      return 'system';
    }
  });

  const getActive = useCallback(() => {
    return mode === 'system' ? getSystemTheme() : mode;
  }, [mode]);

  useEffect(() => {
    const apply = (active: 'light' | 'dark') => {
      try {
        document.documentElement.setAttribute('data-theme', active);
      } catch {}
    };

    const active = getActive();
    apply(active);

    const mq = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
    const listener = () => apply(getActive());
    if (mq && mq.addEventListener) mq.addEventListener('change', listener);
    else if (mq && mq.addListener) mq.addListener(listener as any);

    return () => {
      if (mq && mq.removeEventListener) mq.removeEventListener('change', listener as any);
      else if (mq && mq.removeListener) mq.removeListener(listener as any);
    };
  }, [mode, getActive]);

  const setTheme = useCallback((t: ThemeMode) => {
    try {
      localStorage.setItem(STORAGE_KEY, t);
    } catch {}
    setMode(t);
  }, []);

  const toggle = useCallback(() => {
    setMode((m) => {
      const next = m === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(STORAGE_KEY, next); } catch {}
      return next;
    });
  }, []);

  return { mode, setTheme, toggle, active: getActive() } as const;
}
