import { createRouter , createWebHistory } from "vue-router";

import Home from "@/views/home/Home.vue"
import About from "@/views/about/About.vue"
import Writer from "@/views/writer/Writer.vue"
import Schedule from "@/views/schedule/Schedule.vue"
import Idea from "@/views/idea/Idea.vue"
import Chat from "@/views/chat/Chat.vue"
import Code from "@/views/code/Code.vue"
import Setting from "@/views/setting/Setting.vue"
import Project from "@/views/project/Project.vue"
import NotFound from "@/views/other/NotFound.vue"

export const menuList = [
{id:'1',title:"Schedule", icon: "bi-calendar", link:"/schedule" },
{id:'2',title:"Idea", icon: "bi-lightbulb", link:"/idea" },
{id:'3',title:"Writer", icon: "bi-vector-pen", link:"/writer" },
{id:'4',title:"Project", icon: "bi-graph-up-arrow", link:"/project" },
{id:'5',title:"Chat", icon: "bi-chat-left-dots",  link:"/chat" },
{id:'6',title:"Code", icon: "bi-code-square", link:"/code" },
]

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
export const routes = [
    // will match everything and put it under `$route.params.pathMatch`
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/schedule', name: 'schedule', component: Schedule },
    { path: '/writer', name: 'writer', component: Writer },
    { path: '/idea', name: 'idea', component: Idea },
    { path: '/chat', name: 'chat', component: Chat },
    { path: '/code', name: 'code', component: Code },
    { path: '/project', name: 'project', component: Project },
    { path: '/setting', name: 'setting', component: Setting },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
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