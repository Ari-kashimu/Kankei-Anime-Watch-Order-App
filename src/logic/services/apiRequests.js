import { delay } from "../helpers/delay";

const BASE_URL = "https://api.jikan.moe/v4";

// * Api request to fetch the root anime by id which we get from getPreqel() (Root Anime fetch)
export async function fetchRootAnime(id, retries = 3) {
    // Fetch anime by id first try for search
    const res = await fetch(`${BASE_URL}/anime/${id}`);

    // if failed the retry
    if (res.status === 429) {
        // throw error if retries limit hit 0
        if (retries === 0) {
            throw new Error(`${id} crossed the retry limit`);
        }

        // call the same function itself (Self Call) with retry value - 1
        await delay(1000);
        return fetchRootAnime(id, retries - 1);
    }
    const data = await res.json();

    return data.data;
}
