<template>
  <section>
    <div class="posts" v-for="post of $store.state.post.posts" :key="post.id">
      <Post :title="post.title" :id="post.id" :body="post.body" />
      <div
        class="box"
        v-for="comment of $store.state.comment.comments"
        :key="comment.id + comment.postId"
      >
        <Comment :email="comment.email" :body="comment.body" />
      </div>
      <button v-if="!commentClosed" @click="createNewComment">Comment</button>
      <div v-else>
        <div class="box"></div>
        <button>Post</button>
      </div>
    </div>
  </section>
</template>

<script>
import Post from "@/components/Post.vue";
import Comment from "@/components/Comment.vue";

export default {
  name: "Feed",
  components: { Post, Comment },
  data() {
    return {
      commentClosed: false,
    };
  },
  methods: {
    createNewComment() {
      if (!this.commentClosed) {
        console.log("Open Comment Box");
      }
    },
  },
  async created() {
    await this.$store.dispatch("GET_POSTS");
    await this.$store.dispatch("GET_COMMENTS", 1);
  },
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

button {
  background: #ffcf00;
  border-radius: 15px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.box {
  background: #fff5f5;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}

.posts {
  background-color: #1e539f;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-around;
  align-items: center;
  margin: 1rem;
}
</style>
