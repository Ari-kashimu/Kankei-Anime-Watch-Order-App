import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export function useRelWatchOrderQuery() {
    const [relWatchOrder, setRelWatchOrder] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    let result;

    async function getRelWatchOrder(id) {
        setIsLoading(true);

        const animeQueryForSingleEntry = `
                        query($ids: String!) {
                            animes(ids: $ids,) {  
                                english
                                name
                                url
                                japanese
                                malId
                                kind
                                score
                                status
                                duration
                                episodes
                                airedOn { year }
                                poster { main2xUrl }
                                externalLinks{
                                    kind
                                    url
                                    }                                 
                            }
                            }
                            `;

        const animeQuery = `
                        query($ids: String!) {
                            animes(ids: $ids,) {  
                                chronology{
                                english
                                name
                                url
                                japanese
                                malId
                                kind
                                score
                                status
                                duration
                                episodes
                                airedOn { year }
                                poster { main2xUrl }
                                externalLinks{
                                    kind
                                    url
                                    }       
                                }                             
                            }
                            }
                            `;

        try {
            const { data, error } = await supabase.functions.invoke(
                "Graph-ql-Request-Function",
                { body: { query: animeQuery, variables: { ids: id } } },
            );

            if (error) {
                console.log("Supabase error:", error);
                return [];
            }

            result = data?.data?.animes[0]?.chronology || [];

            if (result.length === 0) {
                try {
                    const { data, error } = await supabase.functions.invoke(
                        "Graph-ql-Request-Function",
                        {
                            body: {
                                query: animeQueryForSingleEntry,
                                variables: { ids: id },
                            },
                        },
                    );

                    if (error) {
                        console.log("Supabase error:", error);
                        return [];
                    }

                    result = data?.data?.animes || [];

                    console.log(result);
                    setRelWatchOrder(result);
                } finally {
                    setIsLoading(false);
                }
            }

            const reversedResult = result.toReversed();

            setRelWatchOrder(reversedResult);

            console.log(reversedResult);
        } finally {
            setIsLoading(false);
        }
    }

    return { isLoading, relWatchOrder, getRelWatchOrder };
}
