# VECA Framework Documentation

**VECA** is a lightweight JavaScript framework designed for building single-page applications (SPAs). It emphasizes simplicity and efficiency, featuring a straightforward routing system and a custom link component (`<c-link>`) to facilitate navigation.

## **Router**

The `Router` class stands at the core of the VECA framework, orchestrating the application's routes and managing navigation between them.

### **Usage**

To leverage the `Router`, you'll need to start by importing it into your project:

```javascript
import { Router } from 'app/router/router.js';
```

Next, instantiate the `Router` and define your application's routes:

```javascript
const appRouter = new Router([
  { path: "/", component: "path/to/HomePage.js" },
  { path: "/about", component: "path/to/AboutPage.js" },
  { path: "/posts/:id", component: "path/to/Post.js"}
  // Define additional routes as needed
]);
```

Routes are specified by a `path` and a `component`:
- **`path`**: A string that may include parameters prefixed with `:` (e.g., `/users/:userId`).
- **`component`**: A string indicating the path to the JavaScript module exporting the component.

### **Navigation**

To navigate programmatically, utilize the `navigate` method:

```javascript
appRouter.navigate("/about");
```

The `Router` automatically handles updating the browser's history upon navigation.

### **Singleton Instance**

Given that the `Router` class is implemented as a singleton, there can only be one instance throughout the application. Access this instance using the `getInstance` method:

```javascript
const router = Router.getInstance();
```

## **CLink Component**

The `CLink` component is a custom HTML element designed to provide navigational links within your SPA. It leverages the `Router` for seamless navigation upon click events.

### **Usage**

To incorporate the `CLink` component, ensure it's imported:

```javascript
import 'router/link.js';
```

Then, you can use `<c-link>` within your HTML just like any standard element:

```html
<c-link href="/posts" text="View Posts"></c-link>
```
or
```html
<c-link href="/posts">View Posts</c-link>
```

- **`href`**: Specifies the navigation target path.
- **`text`**: (Optional) Sets the display text for the link. If omitted, the element's innerHTML is used.

## **More features are coming soon**
<!-- ## **Conclusion**

The VECA framework is designed to streamline the development of SPAs by providing essential tools and components in a lightweight package. Its intuitive routing system, combined with the `<c-link>` component, simplifies navigation implementation, making it both easy and intuitive for developers. -->