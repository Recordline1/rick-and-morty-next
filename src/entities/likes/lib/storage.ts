
import { LIKES_KEY } from '@shared/lib/types';
import type { LikedIds } from '@shared/lib/types';

export function getLikes(): LikedIds {
  if (typeof window === 'undefined') return new Set();
  try {
    const raw = localStorage.getItem(LIKES_KEY);
    return new Set(raw ? JSON.parse(raw) : []);
  } catch {
    return new Set();
  }
}

export function toggleLike(ids: LikedIds, id: number): LikedIds {
  const next = new Set(ids);
  next.has(id) ? next.delete(id) : next.add(id);
  localStorage.setItem(LIKES_KEY, JSON.stringify([...next]));
  return next;
}