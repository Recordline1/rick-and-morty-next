'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getLikes, toggleLike } from '@entities/likes/lib/storage';

interface LikesContextValue {
  likedIds: Set<number>;
  toggle: (id: number) => void;
}

const LikesContext = createContext<LikesContextValue | null>(null);

export function LikesProvider({ children }: { children: React.ReactNode }) {
  const [likedIds, setLikedIds] = useState<Set<number>>(new Set());

  useEffect(() => {
    setLikedIds(getLikes()); // одно чтение localStorage на весь список
  }, []);

  const toggle = useCallback((id: number) => {
    setLikedIds(prev => toggleLike(prev, id)); // пишет в storage + возвращает новый Set
  }, []);

  return (
    <LikesContext.Provider value={{ likedIds, toggle }}>
      {children}
    </LikesContext.Provider>
  );
}

export function useLikesContext() {
  const ctx = useContext(LikesContext);
  if (!ctx) throw new Error('useLikesContext: нет LikesProvider выше');
  return ctx;
}