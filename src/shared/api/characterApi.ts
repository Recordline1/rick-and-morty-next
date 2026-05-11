
export interface CharacterParams {
    name?: string;
    status?: string;
    page?: string;
}


export async function getCharacters(filters?: CharacterParams) {


    const params = new URLSearchParams();

    if (filters?.name) params.set('name', filters.name);
    if (filters?.status) params.set('status', filters.status);
    if (filters?.page) params.set('page', filters.page);


    const hasFilters = filters?.name || filters?.status;
    const url = `https://rickandmortyapi.com/api/character?${params.toString()}`;

    const res = await fetch(url, {
        next: { revalidate: hasFilters ? 0 : 3600 }, 
    });



    if (!res.ok) {
        if (res.status === 404) {
            return { results: [], info: { count: 0, pages: 0 } };
        }
        throw new Error(`Failed to fetch characters: ${res.status}`);
    }

    return res.json();
}

export async function getCharacterById(id: string | number) {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        next: { revalidate: 600 },
    });
    if (!res.ok) {
        throw new Error(`Failed to fetch character ${id}: ${res.status}`);
    }

    return res.json();
}