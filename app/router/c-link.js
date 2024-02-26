import Router from "./router.js";

export default class Link extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      const href = this.getAttribute('href');
      const text = this.getAttribute('text') || this.innerHTML;
      this.shadowRoot.innerHTML = `<a class="c-link" href="${href}" style="cursor: pointer;">${text}</a>`;
  
      this.shadowRoot.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
        // Access the singleton Router instance for navigation
        const router = Router.instance;
        if (router) {
          router.navigate(href);
        } else {
          console.error('Router instance not found');
        }
      });
    }
}