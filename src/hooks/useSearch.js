import React, { useState } from "react";
import { searchAnime } from "../services/apiRequests";

// * Custom hook to handle anime search
export function useSearch() {
    const [searchResult, setSearchResult] = useState([]);

    async function search(query) {
        if (!query || query.length < 3) {
            setSearchResult([]);
            return;
        }

        const result = await searchAnime(query);
        setSearchResult(result);
    }

    return { search, searchResult };
}
