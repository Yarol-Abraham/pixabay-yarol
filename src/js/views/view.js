import cerrar from 'url:../../images/cerrar.svg';
class View {
    _component = document.querySelector('.component');
    message = "It seems that an error has occurred! Please please try again";
    _data;

    render(data){
      if(!data || Array.isArray(data) && data.length === 0 ) return this.renderError();
        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    _clear(){ 
      this._parentElement.innerHTML = ""; 
      this._component.innerHTML = "";
    }

    renderSpinner(){
        const markup = `
        <div class="lds-ring"><div></div><div></div><div></div><div>
        `;
        this._clear();
        this._component.insertAdjacentHTML('afterbegin', markup);
    };

    renderError(message = this.message){
       const markup = `
        <div class="error">
          <div>
            <img src="${cerrar}" alt="error" />
          </div>
          <h1>${message}</h1>
        </div>
       `;
       this._clear();
       this._component.insertAdjacentHTML('afterbegin', markup);
    }

};

export default View;