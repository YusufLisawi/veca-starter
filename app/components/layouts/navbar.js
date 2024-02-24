class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(name, oldValue, newValue) {}

  connectedCallback() {
    var template = /*html*/ `
            <nav>
                <c-link href="/">Home</c-link>
                <c-link href="/posts">Posts</c-link>
                <c-link href="/test">Test</c-link>
            </nav>
        `;
    this.innerHTML = template;
  }
}

export default Navbar;
