import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";

import myRouter from "./routes.js";

axios.defaults.baseURL = "https://cis410-store-api.azurewebsites.net";

const myApp = createApp(App)
myApp.use(myRouter);
myApp.mount("#app");
