export default class Post extends HTMLElement {
    constructor(params) {
        console.log(params)
        super();
        this.attachShadow({ mode: 'open' });
        this.params = params;
    }

    static get observedAttributes() {
        return [];
    }

    attributeChangedCallback(name, oldValue, newValue) {}

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = /*html*/`
        <h1>Post ${this.params.id}</h1>
    `;
    }
}
