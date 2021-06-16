import view from "./view.js";

class PreviewView extends view {

    _parentElement = document.querySelector('.preview');

    _generateMarkup(){
        const { data, relations : { hits } } = this._data;
       return `
        <div class="preview__image" >
            <h1>${data.tags}</h1>
            <img src="${data.largeImageURL}", alt="${data.tags}" />
        </div>
        <div class="preview__content">
            <div class="preview__user">
                <img src="${data.userImageURL}", alt="${data.user}" />
                <a 
                    href="https://pixabay.com/users/${data.user}-${data.user_id}"
                    target="_blank"    
                >
                    ${data.user}
                </a>
            </div>
            <div class="preview__download">
                <p>Free for commercial use, No attribution required</p>
                <a href="${data.pageURL}" target="_blank" >Free Download</a>
            </div>
            <div class="preview__related--box">
                <h1> Related Images </h1>
                ${hits.map(this._generateRelationsMarkup).join('')}
            </div>
        </div>
       `;
    }

    _generateRelationsMarkup(image){
        return `
            <div class="relate--image">
                <a href="/preview.html/?id=${image.id} ">
                    <img src="${image.webformatURL}" />
                </a>
            </div>
        `;
    }

    addHandleLoadPreview(handle){
        window.addEventListener('load', handle);
    }
}

export default new PreviewView();