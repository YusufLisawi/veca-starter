import { components } from "../components.js";
import { ComponentRegistry } from "./component-registry.js";


export class Core {
    static #instance = null;

    constructor() {
        if (Core.#instance) {
            return Core.#instance;
        }

        ComponentRegistry.register(components);

        Core.#instance = this;
    }

    static get instance() {
        return Core.#instance || new Core();
    }
}
