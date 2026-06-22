import { searchAnime } from "@/services/apiRequests";
import { useState } from "react";

export function useAniSearch() {
    const [aniSearchResult, setAniSearchResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function search(query) {
        if (query.length < 3 || !query) {
            setAniSearchResult([]);
            return;
        }

        setIsLoading(true);
        try {
            const fetchedResult = await searchAnime(query);
            setAniSearchResult(fetchedResult);
        } finally {
            setIsLoading(false);
        }
    }

    return { search, aniSearchResult, isLoading };
}
