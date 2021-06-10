import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import Buefy from 'buefy'
import "/sass/buefy-overwrite.scss";

createApp(App).use(store).use(router).use(VueAxios, axios, Buefy).mount("#app");
