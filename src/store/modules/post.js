import Axios from "axios";

export default {
  state: () => ({
    posts: [],
  }),
  mutations: {
    setPosts: (state, posts) => {
      state.posts = posts;
    },
    unsetPosts: (state) => {
      state.posts = [];
    },
    deletePost: (state, id) => {
      state.posts = state.posts.filter((e) => e._id !== id);
    },
    addPost: (state, post) => {
      state.posts.unshift(post);
    },
  },
  actions: {
    GET_POSTS: async ({ commit }) => {
      try {
        const response = await Axios.get("/post/", {
          withCredentials: true,
        });
        commit("setPosts", response.data.body);
      } catch (error) {
        console.error(error);
      }
    },
    CREATE_POST: async ({ commit }, post) => {
      try {
        await Axios.post("/post/create", post, {
          withCredentials: true,
        });
        const response = await Axios.get("/post/", {
          withCredentials: true,
        });
        commit("setPosts", response.data.body);
        alert("Created Post");
      } catch (error) {
        console.error(error);
      }
    },
    LIKE_POST: async ({ commit }, post) => {
      try {
        await Axios.post(
          "/like/create/",
          { post },
          {
            withCredentials: true,
          }
        );
        const response = await Axios.get("/post/", {
          withCredentials: true,
        });
        commit("setPosts", response.data.body);
      } catch (error) {
        console.error(error);
      }
    },
    COMMENT_ON_POST: async ({ commit }, { body, post }) => {
      try {
        await Axios.post(
          "/comment/create/",
          { body, post },
          {
            withCredentials: true,
          }
        );
        const response = await Axios.get("/post/", {
          withCredentials: true,
        });
        commit("setPosts", response.data.body);
      } catch (error) {
        console.error(error);
      }
    },
    DELETE_POST: async ({ commit }, id) => {
      try {
        const response = await Axios.post(
          "/post/delete/",
          { id },
          { withCredentials: true }
        );
        commit("deletePost", id);
        alert("Deleted Post");
      } catch (error) {
        console.error(error);
      }
    },
  },
  getters: {},
};
