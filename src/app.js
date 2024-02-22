import Router from "./router/router.js";

const routes = [
    {
        path: "/",
        component: "../components/home.js",
    },
    {
        path: "/posts",
        component: "../components/posts.js",
    },
    {
        path: "/posts/:id",
        component: "../components/post.js",
    },
    {
        path: "/test",
        component: "../components/example.js",
    },
];

class App {
    constructor(routes) {
        const router = new Router(routes);
        router.init();
    }
}

new App(routes);