import { counterStore as store } from "../state/counterStore.js";

export default class Counter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.unsubscribe = store.subscribe(() => {
      this.render();
    });
  }

  disconnectedCallback() {
    this.unsubscribe();
  }

  render() {
    const { count } = store.getState();
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
