import view from "./view.js";

class SearchView extends view {
    _parentElement = document.querySelector('.search');
    message = "No results found, please try another name";

    getQuery(){
        const query = this._parentElement.querySelector('.search__input').value;
        this._clearInputValue();
        return query;
    }

    _clearInputValue(){ this._parentElement.querySelector('.search__input').value = ""; }

    addHandleSearchClick(handle){
        this._parentElement.addEventListener('submit', function(e) {
            e.preventDefault();
            handle();
        })
    }

}

export default new SearchView();