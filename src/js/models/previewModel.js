import { API_URL } from "../config.js";
import { getJSON } from "../helpers.js";

export const state = {
    data: {},
    tags: [],
    relations: []
}

export const loadPreview = async function(id) {
    try {
        const data = await getJSON(`${API_URL}&id=${id}`);
        state.data = data.hits[0];
        state.tags =  state.data.tags.split(',');
    } catch (error) { throw error; }  
};

export const loadRelationsPreview = async function() {
    try {
         const query = state.tags.map(tag => tag).join('');
         const relations = await getJSON(`${API_URL}&q=${query}&per_page=3`);
         state.relations = relations;
    } catch (error) { throw error; }
}