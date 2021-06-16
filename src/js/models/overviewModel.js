import { API_URL, TOTAL_RESULTS } from "../config.js";
import { getJSON } from "../helpers.js";

export const state = {
    hits: [],
    totalHits: 0,
    totalResult: TOTAL_RESULTS,
    query: "",
    page: 1,
    initPage: 1,
};

export const loadImages = async function(goToPage = state.initPage) {
    try {
        let url = `${API_URL}&page=${goToPage}`;
        if(state.query) url = `${url}&q="${state.query}"`;
        const data = await getJSON(url);
        if(data.totalHits === 0) throw new Error("No results found, please try another name");
        state.hits = data.hits;
        state.totalHits = data.totalHits;
        state.page = parseInt( Math.ceil( state.totalHits / state.totalResult ) );
    } catch (error) { throw error; }
};

