import { createRouter , createWebHistory } from "vue-router";

import Home from "./Home.vue"
import About from "./About.vue"
import NotFound from "./NotFound.vue"

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
export const routes = [
    // will match everything and put it under `$route.params.pathMatch`
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(import.meta.env.BASE_URL),
    routes, // short for `routes: routes`
});

export default router;