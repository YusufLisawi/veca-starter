import Store from "../state/store.js";

export default class Counter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.store = Store.getInstance();
  }

  connectedCallback() {
    this.render();
    this.unsubscribe = this.store.subscribe(() => {
      this.render();
    });
  }

  disconnectedCallback() {
    this.unsubscribe();
  }

  render() {
    const { count } = this.store.getState();
    this.shadowRoot.innerHTML = /*html*/ `
      <style>
        /* Add styling here */
      </style>
      <h1>Counter App</h1>
      <p>Count: ${count}</p>
      <c-buttons></c-buttons>
    `;
  }
}
