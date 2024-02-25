import { initialState } from "./initialState.js";

class Store {
  #state = initialState;
  #listeners = new Set();
  static #instance = null;

  constructor() {
    if (Store.#instance) {
      return Store.#instance;
    }

    this.#listeners = new Set();
    Store.#instance = this;
  }

  static get instance() {
    return new Store(); // Get instance or create new one
  }

  getState() {
    return { ...this.#state };
  }

  setState(newState) {
    this.#state = { ...this.#state, ...newState };
    this.notifyListeners();
  }

  subscribe(listener) {
    this.#listeners.add(listener);
    return () => {
      this.#listeners.delete(listener);
    };
  }

  notifyListeners() {
    for (const listener of this.#listeners) {
      listener(this.getState());
    }
  }

  resetState() {
    this.#state = {};
    this.notifyListeners();
  }

  // Additional features coming soon
}

export default Store;
