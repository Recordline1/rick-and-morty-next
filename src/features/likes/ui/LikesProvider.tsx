'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import { getLikes, toggleLike } from '@entities/likes/lib/storage';

interface LikesContextValue {
  likedIds: Set<number>;
  toggle: (id: number) => void;
}

const LikesContext = createContext<LikesContextValue | null>(null);

export function LikesProvider({ children }: { children: React.ReactNode }) {
  const [likedIds, setLikedIds] = useState<Set<number>>(() =>
    typeof window === 'undefined' ? new Set<number>() : getLikes(),
  );

  const toggle = useCallback((id: number) => {
    setLikedIds((prev) => toggleLike(prev, id));
  }, []);

  return (
    <LikesContext.Provider value={{ likedIds, toggle }}>
      {children}
    </LikesContext.Provider>
  );
}

export function useLikesContext() {
  const ctx = useContext(LikesContext);
  if (!ctx) throw new Error('useLikesContext must be used within LikesProvider');
  return ctx;
}
