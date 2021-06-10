import Axios from "axios";

export default {
  state: () => ({
    comments: [],
  }),
  mutations: {
    setComments: (state, comments) => {
      state.comments = comments;
    },
    deletePost: (state, id) => {
      state.comments = state.comments.filter((e) => e !== id);
    },
  },
  actions: {
    GET_COMMENTS: async ({ commit }, id) => {
      try {
        const response = await Axios.get(
          `https://jsonplaceholder.typicode.com/post/${id}/comments`
        );
        commit("setComments", response.data);
      } catch (error) {
        console.error(error);
      }
    },
    EDIT_COMMENT: async ({ commit }, id) => {
      try {
        commit("deletePost");
      } catch (error) {
        console.error(error);
      }
    },
  },
  getters: {},
};
