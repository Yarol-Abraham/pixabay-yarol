import * as model from '../models/overviewModel.js';
import overviewView from '../views/overviewView.js';
import paginationView from '../views/paginationView.js';
import searchView from '../views/searchView.js';

if(module.hot){ module.hot.accept(); }

const controllerOverview = async function(goToPage = model.state.initPage) {
    try {
        // loading...
        overviewView.renderSpinner();
        // get params search
        model.state.query = new URLSearchParams(location.search).get("search") || 
        model.state.query;
        // get results
        await model.loadImages(goToPage);
        // render results
        overviewView.render(model.state.hits);
        // render pagination
        paginationView.render(model.state);
        
    } catch (error) {
        if(error.message = "Failed to fetch") 
            error.message = "An unexpected error has occurred! Please reload the page";
        overviewView.renderError(error.message);
     }
};

const controllerSearch = async function() {
    const query = searchView.getQuery();
    if(!query) return ;
    model.state.query = query;
    controllerOverview(model.state.initPage);
}

const init = function() {
    overviewView.addHandleLoadOverview(controllerOverview);
    paginationView.addHandleClickPagination(controllerOverview);
    searchView.addHandleSearchClick(controllerSearch);
}
init();