import { counterStore as store } from "../state/counterStore.js";

export default class Buttons extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
<button id="decrement">-</button>
<button id="increment">+</button>
`;

    this.shadowRoot.getElementById("increment").addEventListener(
      "click",
      () => store.increment()
    );

    this.shadowRoot.getElementById("decrement").addEventListener(
      "click",
      () => store.decrement()
    );
  }
}
