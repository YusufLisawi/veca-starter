import { Core } from "./core/core.js";
import Router from "./router/router.js";
import { routes } from "./routes.js";

class App {
  constructor(routes) {
    const router = new Router(routes);
    new Core();
    router.init();
  }
}

new App(routes);
