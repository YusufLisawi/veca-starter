export default class CPosts extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return [];
    }

    attributeChangedCallback(name, oldValue, newValue) {
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = /*html*/`
        <h1>Post</h1>
        <c-link href="/posts/1">post 1</c-link>
        <c-link href="/posts/2">post 2</c-link>
        <c-link href="/posts/3">post 3</c-link>
    `;
    }
}
