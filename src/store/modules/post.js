import Axios from "axios";

export default {
  state: () => ({
    posts: [],
  }),
  mutations: {
    setPosts: (state, posts) => {
      state.posts = posts;
    },
    deletePost: (state, id) => {
      state.posts = state.posts.filter((e) => e !== id);
    },
  },
  actions: {
    GET_POSTS: async ({ commit }, token) => {
      try {
        const response = await Axios.get(
          "https://jsonplaceholder.typicode.com/todos/"
        );
        commit("setPosts", response.data);
      } catch (error) {
        console.error(error);
      }
    },
    DELETE_POST: async ({ commit }, id) => {
      try {
        commit("deletePost");
      } catch (error) {
        console.error(error);
      }
    },
  },
  getters: {},
};
