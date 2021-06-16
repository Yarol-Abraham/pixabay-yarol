import view from "./view.js";
class OverviewView extends view {
    _parentElement = document.querySelector('.overview');

    _generateMarkup(){
        return this._data.map(this._generateMarkupImages).join('');
    }

    _generateMarkupImages(image){
        return `
            <div class="overview__item">
                <a href="/preview.html/?id=${image.id}">
                    <img src="${image.webformatURL}" alt="${image.tags}" />
                </a>
                <h2>${image.tags}</h2>
            </div>
        `;
    }

    addHandleLoadOverview(handle){ window.addEventListener('load', handle); }

};

export default new OverviewView();