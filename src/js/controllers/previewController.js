import * as model from '../models/previewModel.js';
import previewView from '../views/previewView.js';
import searchView from '../views/searchView.js';


const controllerLoadPreview = async function() {  
    try {
        // loading...
        previewView.renderSpinner();
        // get id preview
        const id = new URLSearchParams(location.search).get("id");
        if(!id) throw new Error("No results found :(");
        // get preview
        await model.loadPreview(id);
        // get relations image
        await model.loadRelationsPreview();
        // render preview
        previewView.render(model.state);
    } catch (error) { previewView.renderError(error.message);}
};

const controllerSearch = function() {
    const query = searchView.getQuery();
    if(!query) return ;
    window.location.replace(`/home.html/?search=${query}`);
};

const init = function() {
    searchView.addHandleSearchClick(controllerSearch);
    previewView.addHandleLoadPreview(controllerLoadPreview);
};

init();