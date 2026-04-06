const BASE_URL = "https://api.jikan.moe/v4";

// * Api request for searched animes
export async function searchAnime(query) {
    const res = await fetch(`${BASE_URL}/anime?q=${query}&limit=2`);

    const data = await res.json();

    return data.data;
}
