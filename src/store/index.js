import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import auth from "./modules/auth";
import post from "./modules/post";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { auth, post },
  plugins: [
    createPersistedState({
      paths: ["auth", "post"],
    }),
  ],
});
