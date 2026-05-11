'use client';

import { useState, useEffect, useCallback } from 'react';
import { getLikes, toggleLike } from './storage';

export function useLikes(characterId: number) {
  const [likedIds, setLikedIds] = useState<Set<number>>(new Set);

  useEffect(() => {
    setLikedIds(getLikes()); // только на клиенте, после гидрации
  }, []);

  const toggle = useCallback(() => {
    setLikedIds(prev => toggleLike(prev, characterId));
  }, [characterId]);

  return { isLiked: likedIds.has(characterId), toggle };
}