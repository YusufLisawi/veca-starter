class CFooter extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return [];
    }

    attributeChangedCallback(name, oldValue, newValue) {

    }

    connectedCallback() {
        var template = /*html*/`
           <footer>
                VECA Framework
            </footer>
        `;
        this.innerHTML = template;
    }
}

export default CFooter;