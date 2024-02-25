export default class Home extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    document.title = "Home";
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(name, oldValue, newValue) {}

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
        <c-counter></c-counter>
    `;
  }
}

customElements.define("c-home", Home);