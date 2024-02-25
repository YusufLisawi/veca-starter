import Buttons from "./components/buttons.js";
import Counter from "./components/counter.js";
import Footer from "./components/layouts/footer.js";
import Navbar from "./components/layouts/navbar.js";
import Test from "./components/example.js";
import Post from "./components/post.js";
import Posts from "./components/posts.js";
import { routerComponents } from "./router/router.js";

// Define the components of the layouts and their tagname
export const layoutComponents = [
  { tagName: "c-navbar", component: Navbar },
  { tagName: "c-footer", component: Footer },
];

// Define the components of the app and their tagname
export const components = [
  ...layoutComponents, // IMPORTANT: Keep this line
  ...routerComponents, // IMPORTANT: Keep this line

  { tagName: "c-test", component: Test },
  { tagName: "c-post", component: Post },
  { tagName: "c-posts", component: Posts },
	{ tagName: 'c-counter', component: Counter },
	{ tagName: 'c-buttons', component: Buttons },
];
