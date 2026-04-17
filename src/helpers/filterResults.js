// * Filter the results to remove unwanted data
export function filterResults(result) {
    let filteredResults = [];

    result.forEach((anime) => {
        // Filtered Object
        filteredResults.push({
            name: anime.title,
            eng_name: anime.title_english,
            img: anime.images.jpg.image_url,
            type: anime.type,
            ep: anime.episodes,
            duration: anime.duration,
            score: anime.score,
            fromTo: anime.aired.string,
            mal_url: anime.url,
            mal_id: anime.mal_id,
        });
    });

    return filteredResults;
}
