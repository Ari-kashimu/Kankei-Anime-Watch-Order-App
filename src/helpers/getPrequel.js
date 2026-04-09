import { delay } from "./delay";
import { fetchRootAnime, searchPrequel } from "../services/apiRequests";

//* Function to Find the prequel (The First Anime of the Franchise)

// This gets the Root id
async function getPrequel(id) {
    let currentId = id;

    while (true) {
        await delay(250);

        const result = await searchPrequel(currentId);

        const prequel = result.find(
            (r) =>
                r.relation === "Prequel" ||
                r.relation === "Parent Story" ||
                r.relation === "Full Story",
        );

        if (!prequel) break;

        currentId = prequel.entry.find((e) => e.type === "anime")?.mal_id;
    }

    return currentId;
}

// This fetch the rootAnime from RootId
export async function getRootAnime(id) {
    const rootId = await getPrequel(id);
    const rootAnime = await fetchRootAnime(rootId);

    return rootAnime;
}
