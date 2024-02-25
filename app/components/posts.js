export default class Posts extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        document.title = "Posts";
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
        <h1>Posts</h1>
        <c-link href="/posts/1">post 1</c-link>
        <c-link href="/posts/2">post 2</c-link>
        <c-link href="/posts/3">post 3</c-link>
    `;
    }
}
