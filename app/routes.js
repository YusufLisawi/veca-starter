import CTest from "./components/example.js";
import CPost from "./components/post.js";
import CPosts from "./components/posts.js";

// Define routes with all components as functions returning a promise
export const routes = [
  {
    path: "/",
    component: () => import("./components/home.js"), // Lazy-loaded
  },
  {
    path: "/posts",
    component: () => Promise.resolve(CPosts), // Immediately available, wrapped in a Promise
  },
  {
    path: "/posts/:id",
    component: () => Promise.resolve(CPost),
  },
  {
    path: "/test",
    component: () => Promise.resolve(CTest),
  },
];
