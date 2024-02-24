import CFooter from "./components/layouts/footer.js";
import CNavbar from "./components/layouts/navbar.js";
import CTest from "./components/example.js";
import CPost from "./components/post.js";
import CPosts from "./components/posts.js";
import CHome from "./components/home.js";
import { routerComponents } from "./router/router.js";

// Define the components of the layouts and their tagname
export const layoutComponents = [
  {
    tagName: "c-navbar",
    component: CNavbar,
  },
  {
    tagName: "c-footer",
    component: CFooter,
  },
];

// Define the components of the app and their tagname
export const components = [
    ...layoutComponents,
    ...routerComponents,
    {
        tagName: 'c-home',
        component: CHome,
    },
    {
        tagName: 'c-test',
        component: CTest,
    },
    {
        tagName: 'c-post',
        component: CPost
    },
    {
        tagName: 'c-posts',
        component: CPosts
    },
];
