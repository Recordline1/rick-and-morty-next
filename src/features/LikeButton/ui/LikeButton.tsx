'use client';

import { useLikesContext } from '@features/likes/ui/LikesProvider';
import { toggleLikeAction } from '@features/likes/api/toggleLikeAction';
import styles from './LikeButton.module.scss'

export function LikeButton({ characterId }: { characterId: number }) {
  const { likedIds, toggle } = useLikesContext();
  const isLiked = likedIds.has(characterId);

  const handleClick = async () => {
    toggle(characterId);
    const res = await toggleLikeAction(characterId);

    if (!res.success) {
      console.error('Failed to toggle like:', res.error);
      toggle(characterId);
    }
  }

  return (
    <button
      type="button"
      className={styles.button}
      onClick={handleClick}
      aria-pressed={isLiked}
      aria-label={isLiked ? 'Remove from favorites' : 'Add to favorites'}
    >
      <span aria-hidden>{isLiked ? '♥' : '♡'}</span>
    </button>
  );
}
