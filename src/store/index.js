import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import auth from "./modules/auth";
import post from "./modules/post";
import comment from "./modules/comment";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { auth, post, comment },
  plugins: [
    createPersistedState({
      paths: ["auth", "post", "comment"],
    }),
  ],
});
