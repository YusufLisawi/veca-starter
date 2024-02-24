import RouterOutler from "./router-outlet.js"
import Link from "./c-link.js"

export default class Router {
  static #instance = null;

  constructor(routes = []) {
    if (Router.#instance) {
      return Router.#instance;
    }
    this.routes = routes;
    window.addEventListener("popstate", this.#renderCurrentRoute.bind(this));
    Router.#instance = this;
  }

  static getInstance() {
    if (!Router.#instance) {
      Router.#instance = new Router();
    }
    return Router.#instance;
  }

  addRoute(path, component) {
    this.routes.push({ path, component });
  }

  navigate(path) {
    history.pushState({}, "", path);
    this.#renderCurrentRoute();
  }

  #findRoute(path) {
    for (const route of this.routes) {
      const regex = `^${route.path.replace(/:[^\s/]+/g, "([^\\s/]+)")}$`;
      const match = path.match(new RegExp(regex));
      if (match) {
        const params = this.#extractParams(match, route.path);
        return { ...route, params };
      }
    }
    return null;
  }

  #extractParams(match, routePath) {
    const keys = routePath.match(/:[^\s/]+/g) || [];
    const params = {};
    keys.forEach((key, index) => {
      params[key.replace(":", "")] = match[index + 1];
    });
    return params;
  }

  async #renderCurrentRoute() {
    const path = window.location.pathname;
    const matchedRoute = this.#findRoute(path);

    if (!matchedRoute || !matchedRoute.component) {
      console.error(`No route matched for ${path}`);
      return;
    }

    const outlet = document.querySelector("router-outlet");
    if (!outlet) {
      console.error("<router-outlet> element not found in the document.");
      return;
    }

    // Loading and instantiating the component
    try {
      const ComponentPromise = matchedRoute.component(); // This is now always a function returning a promise
      const Component =
        (await ComponentPromise).default || (await ComponentPromise); // Handle both ES modules and normal objects
      let componentInstance;
      if (Object.keys(matchedRoute.params).length > 0)
        componentInstance = new Component(matchedRoute.params);
      else componentInstance = new Component();

      outlet.innerHTML = "";
      outlet.appendChild(componentInstance);
    } catch (err) {
      console.error(`Failed to load component for route ${path}:`, err);
    }
  }

  init() {
    this.#renderCurrentRoute();
  }
}

// IMPORTANT !!
export const routerComponents = [
  {
    tagName: "router-outlet",
    component: RouterOutler,
  },
  {
    tagName: "c-link",
    component: Link,
  },
];
