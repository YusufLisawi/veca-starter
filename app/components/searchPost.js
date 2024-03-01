import { postStore } from "../state/postStore.js";

export default class SearchPost extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.input;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = /*html*/`
        <form method="get" >
            <input type="text" name="search" placeholder="Search post...">
            <button type="submit">Search</button>
        </form>
        `;

        this.shadowRoot.querySelector('form').addEventListener('submit', this.#onSubmit.bind(this));
        this.input = this.shadowRoot.querySelector('input');
    }

    #onSubmit(event) {
        event.preventDefault();
        postStore.fetchPostsByKeyword(this.input.value);   
    }
    
}
