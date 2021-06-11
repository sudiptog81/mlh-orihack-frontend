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
        const response = await Axios.get("/me", { withCredentials: true });
        commit("setUser", response.data);
      } catch (error) {
        console.error(error);
      }
    },
    LOGOUT: async ({ commit }) => {
      try {
        commit("unsetUser");
        window.location.href = "/auth/logout";
      } catch (error) {
        console.error(error);
      }
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.user,
  },
};
