import view from "./view.js";
class PaginationView extends view {
    _parentElement = document.querySelector('.pagination');
 
    _generateMarkup(){
        let html = "";
        for(let i=1; i<=this._data.page; ++i){
            html += this._generateButtonsMarkup(i);
        }
        return html;
    }

    _generateButtonsMarkup(page){
        return `
            <button data-page="${page}" class="btn btn--pagination">
                ${page} 
            </button>
        `;
    }

    addHandleClickPagination(handle){
        this._parentElement.addEventListener('click', function(e) {
            const btn =  e.target.closest('.btn');
            if(!btn) return;
            handle(+btn.dataset.page);
        });
    }

}

export default new PaginationView();