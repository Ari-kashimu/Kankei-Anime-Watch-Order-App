import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export function useAniSearchQuery() {
    const [aniSearchResult, setAniSearchResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    async function search(aniName) {
        setIsLoading(true);
        setHasSearched(true);

        const animeQuery = `
                        query($search: String!) {
                            animes(search: $search, limit: 4, kind: "!music,!pv,!cm" ) {
                                id
                                english
                                name
                                malId
                                kind
                                score
                                status
                                airedOn { year }
                                poster { main2xUrl }
                            }
                            }
                            `;

        try {
            const { data, error } = await supabase.functions.invoke(
                "Graph-ql-Request-Function",
                {
                    body: {
                        query: animeQuery,
                        variables: {
                            search: aniName,
                        },
                    },
                },
            );

            if (error) {
                console.log("Supabase error:", error);
                return [];
            }

            const result = data?.data?.animes || [];

            setAniSearchResult(result);
        } finally {
            setIsLoading(false);
        }
    }

    return {
        search,
        isLoading,
        aniSearchResult,
        setHasSearched,
        setAniSearchResult,
        hasSearched,
    };
}
