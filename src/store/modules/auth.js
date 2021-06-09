import Axios from "axios";

export default {
  state: () => ({
    user: {},
  }),
  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
    unsetUser: (state) => {
      state.user = {};
    },
  },
  actions: {
    LOGIN: async ({ commit }, token) => {
      try {
        const response = await Axios.get(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        commit("setUser", response.data);
      } catch (error) {
        console.error(error);
      }
    },
    LOGOUT: async ({ commit }) => {
      try {
        commit("unsetUser");
      } catch (error) {
        console.error(error);
      }
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.user,
  },
};
