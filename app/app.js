import Authentication from "./auth/Authentication.js";
import { Core } from "./core/core.js";
import Http from "./http/http.js";
import Router from "./router/router.js";
import { routes } from "./routes.js";
import Store from "./state/store.js";

class App {
  constructor(routes) {
    const router = new Router(routes);
    new Core();
    new Store();
    new Authentication();
    new Http();
    router.init();
  }
}

new App(routes);

// async function testAuthentication() {
//     try {
//         // Simulate user authentication
//         const user = await Authentication.instance.doAuthentication('test@example.com', 'password123');
//         console.log('Authenticated user:', user);

//         // Access the authenticated user's information
//         console.log('Current authentication status:', Authentication.instance.auth);

//         // Simulate logging out
//         Authentication.instance.auth = null;
//         console.log('Logged out. Current authentication status:', Authentication.instance.auth);
//     } catch (error) {
//         console.error('Authentication error:', error);
//     }
// }

// // Call the test function
// testAuthentication();

