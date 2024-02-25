import Store from "../state/store.js";

export default class Buttons extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.store = Store.getInstance();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
<button id="decrement">-</button>
<button id="increment">+</button>
`;

    let { count } = this.store.getState();
    this.shadowRoot
      .getElementById("increment")
      .addEventListener("click", () => {
        this.store.setState({ count: count + 1 }); // Update count in Store
      });

    this.shadowRoot
      .getElementById("decrement")
      .addEventListener("click", () => {
        this.store.setState({ count: count - 1 }); // Update count in Store
      });
  }
}
