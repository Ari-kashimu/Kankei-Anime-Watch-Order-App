// * Sort the filteredResult (anime) according to the aired date

export function sortResults(filteredResult) {
    filteredResult.sort((a, b) => {
        const dateA = a.startedFrom
            ? new Date(a.startedFrom)
            : new Date(8640000000000000); // max date
        const dateB = b.startedFrom
            ? new Date(b.startedFrom)
            : new Date(8640000000000000);
        return dateA - dateB;
    });
}
