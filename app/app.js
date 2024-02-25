import { Core } from "./core/core.js";
import Router from "./router/router.js";
import { routes } from "./routes.js";
import Store from "./state/store.js";

class App {
  constructor(routes) {
    const router = new Router(routes);
    new Core();
    new Store();
    router.init();
  }
}

new App(routes);
