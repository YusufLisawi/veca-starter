export default class CNavComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._complete = 0;
    }

    get complete() {
        return this._complete;
    }

    set complete(val) {
        this.setAttribute('complete', val);
    }

    static get observedAttributes() { return ["complete"]; }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'complete': {
                this._complete = newValue;
            }
        }
    }
    connectedCallback() {
        var template = /*html*/`
            <h1>test ${this.complete}</h1>
            <button>increment</butt>
        `;


        this.shadowRoot.innerHTML = template;
        var btn = this.shadowRoot.querySelector('button');

        btn.addEventListener('click',() => {
            this._complete = +this._complete + +1;
            this.connectedCallback();
        });
    }

    increment() {
    }


}
customElements.define("c-nav", CNavComponent);
