<template>
  <section class="container is-max-desktop my-5">
    <div class="card my-5">
      <header class="card-header">
        <p class="card-header-title">
          <input v-model="newPost.title" class="input" type="text" />
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          <textarea
            v-model="newPost.body"
            class="textarea"
            placeholder="write your thoughts..."
          ></textarea>
        </div>
      </div>
      <footer class="card-footer p-4 is-flex is-justify-content-flex-end">
        <button
          @click="handleCreatePost"
          :class="'button is-medium px-5 ' + postButton"
        >
          Post
        </button>
      </footer>
    </div>
    <div
      class="posts"
      v-for="(post, indexP) of $store.state.post.posts"
      :key="indexP"
    >
      <Post
        :_id="_id"
        :title="post.title"
        :body="post.body"
        :user="post.user.username"
      />

      <!-- <div
        class="box"
        v-for="comment of post.comments"
        :key="comment.post"
      >
        <Comment :email="comment.email" :body="comment.body" />
      </div> -->
    </div>
  </section>
</template>

<script>
import Post from "@/components/Post.vue";
import Comment from "@/components/Comment.vue";
import stylex from "@ladifire-opensource/stylex";

const styles = stylex.create({
  postButton: {
    background: "rgba(248, 185, 42, 1)",
    borderRadius: "2em",
  },
});

export default {
  name: "Feed",
  components: { Post },
  data() {
    return {
      newPost: {
        title: "",
        body: "",
      },
      commentClosed: false,
    };
  },
  computed: {
    postButton() {
      return stylex(styles.postButton);
    },
  },
  methods: {
    handleCreatePost() {
      if (!this.newPost.title) {
        alert();
        return;
      }
      if (!this.newPost.body) {
        alert();
        return;
      }

      this.$store.dispatch("CREATE_POST", this.newPost);
    },
    createNewComment() {
      this.commentClosed = !this.commentClosed;
    },
    submitComment() {},
  },
  async created() {
    if (!this.$store.state.auth.user.username) {
      window.location.href = "/auth/github";
      return;
    }

    await this.$store.dispatch("GET_POSTS");
  },
};
</script>

<style lang="scss" scoped>
// section {
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   flex-direction: column;
//   background-color: rgba(30, 80, 160, 0.55);
//   min-height: 100vh;
// }

// button {
//   background: #ffcf00;
//   border-radius: 15px;
//   align-self: flex-end;
//   float: right;
// }

// .box {
//   background: #fff5f5;
//   box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
//   border-radius: 15px;
// }

// .media {
//   width: 100%;
// }

// textarea {
//   border-radius: 15px;
// }

// .posts {
//   padding: 2rem;
//   background-color: #1e539f;
//   width: 70%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-content: space-around;
//   align-items: center;
// }
</style>
