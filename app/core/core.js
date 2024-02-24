import { components } from "../components.js";
import { ComponentRegistry } from "./component-registry.js";


export class Core {
    static #instance = null;
    constructor() {
        if (!Core.#instance) {
            Core.#instance = this;
        } else {
            throw new Error('use instance');
        }

        ComponentRegistry.register(components);

        return Core.#instance;
    }

    static getInstance() {
        if (!Core.#instance) {
            Core.#instance = new Core();
        }
        return Core.#instance;
    }
}
