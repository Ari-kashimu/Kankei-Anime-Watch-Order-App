const BASE_URL = "https://api.jikan.moe/v4";

// * Api request for searched animes
export async function searchAnime(query) {
    const res = await fetch(`${BASE_URL}/anime?q=${query}&limit=2`);
    const data = await res.json();

    return data.data;
}

// * Api request for Prequel Finding go back to find the prequel (Root Anime id)
export async function searchPrequel(id) {
    const res = await fetch(`${BASE_URL}/anime/${id}/relations`);
    const data = await res.json();

    return data.data;
}

// * Api request to fetch the root anime by id which we get from getPreqel() (Root Anime fetch)
export async function fetchRootAnime(id) {
    const res = await fetch(`${BASE_URL}/anime/${id}`);
    const data = await res.json();

    return data.data;
}
