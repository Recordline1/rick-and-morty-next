import { vi } from 'vitest';
import { getCharacters, getCharacterById } from './characterApi';

// мокаем fetch чтобы не делать реальные запросы
const mockFetch = vi.fn();
global.fetch = mockFetch;

beforeEach(() => {
  mockFetch.mockClear();
});

describe('getCharacters', () => {
  it('делает запрос без параметров', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        results: [{ id: 1, name: 'Rick' }],
        info: { count: 826, pages: 42 },
      }),
    });

    const result = await getCharacters();

    expect(mockFetch).toHaveBeenCalledWith(
      'https://rickandmortyapi.com/api/character?',
      expect.any(Object)
    );
    expect(result.results).toHaveLength(1);
  });

  it('передаёт name в URL', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ results: [], info: { count: 0, pages: 0 } }),
    });

    await getCharacters({ name: 'Rick' });

    expect(mockFetch).toHaveBeenCalledWith(
      'https://rickandmortyapi.com/api/character?name=Rick',
      expect.any(Object)
    );
  });

  it('передаёт name и status в URL', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ results: [], info: { count: 0, pages: 0 } }),
    });

    await getCharacters({ name: 'Rick', status: 'alive' });

    expect(mockFetch).toHaveBeenCalledWith(
      'https://rickandmortyapi.com/api/character?name=Rick&status=alive',
      expect.any(Object)
    );
  });

  it('возвращает пустой массив при 404', async () => {
    mockFetch.mockResolvedValueOnce({ ok: false, status: 404 });

    const result = await getCharacters({ name: 'xxxxxxxxxxx' });

    expect(result).toEqual({ results: [], info: { count: 0, pages: 0 } });
  });

  it('бросает ошибку при других статусах', async () => {
    mockFetch.mockResolvedValueOnce({ ok: false, status: 500 });

    await expect(getCharacters()).rejects.toThrow('Failed to fetch characters: 500');
  });
});

describe('getCharacterById', () => {
  it('делает запрос с правильным id', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ id: 1, name: 'Rick' }),
    });

    const result = await getCharacterById(1);

    expect(mockFetch).toHaveBeenCalledWith(
      'https://rickandmortyapi.com/api/character/1',
      expect.any(Object)
    );
    expect(result.name).toBe('Rick');
  });

  it('бросает ошибку если персонаж не найден', async () => {
    mockFetch.mockResolvedValueOnce({ ok: false, status: 404 });

    await expect(getCharacterById(99999)).rejects.toThrow('Failed to fetch character 99999');
  });
});