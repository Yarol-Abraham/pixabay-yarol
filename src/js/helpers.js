import { TIMEOUT_SEC } from './config.js';
export const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(() => {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};

export const getJSON = async function(url) {
    try {
        const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
        const data = await res.json();
        if(!res.ok) throw new Error("no results found! Please try again");
        return data;
    } catch (error) { 
        throw error; 
    }
};