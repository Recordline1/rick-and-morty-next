'use client';

import { useState, useCallback } from 'react';
import { getLikes, toggleLike } from './storage';

export function useLikes(characterId: number) {
  const [likedIds, setLikedIds] = useState<Set<number>>(() =>
    typeof window === 'undefined' ? new Set<number>() : getLikes(),
  );

  const toggle = useCallback(() => {
    setLikedIds((prev) => toggleLike(prev, characterId));
  }, [characterId]);

  return { isLiked: likedIds.has(characterId), toggle };
}
