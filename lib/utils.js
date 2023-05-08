export const highlightString = (str, query) => {
    return query
        ? str.replace(new RegExp(query, 'gi'), (match) => `<mark>${match}</mark>`)
        : str;
};
