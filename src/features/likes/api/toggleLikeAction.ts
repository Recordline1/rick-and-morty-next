'use server';

import { revalidatePath } from 'next/cache';


export async function toggleLikeAction(characterId: number) {
  try {
    console.log('Лайк для персонажа:', characterId);

    revalidatePath('/character/[id]', 'page');
    revalidatePath('/');

    return { success: true };

  } catch {
    return { success: false, error: 'Failed to toggle like' };
  }
}