import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/assets/css/styles.css";
import "@/assets/bootstrap/font/bootstrap-icons.min.css";
import App from "@/App.vue";
import router from "@/views/routes";


createApp(App)
.use(router)
.use(createPinia())
.mount("#app");