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
    addPost: (state, post) => {
      state.posts.push(post);
    },
  },
  actions: {
    GET_POSTS: async ({ commit }) => {
      try {
        const response = await Axios.get("/post", {
          withCredentials: true,
        });
        console.log(response.data);
        commit("setPosts", response.data.body);
      } catch (error) {
        console.error(error);
      }
    },
    CREATE_POST: async ({ commit }, post) => {
      try {
        const response = await Axios.post("/post/create", post, {
          withCredentials: true,
        });
        commit("addPost", response.data.body);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    DELETE_POST: async ({ commit }, id) => {
      try {
        const response = await Axios.post(
          "/delete",
          { id },
          { withCredentials: true }
        );
        commit("deletePost", id);
      } catch (error) {
        console.error(error);
      }
    },
  },
  getters: {},
};
