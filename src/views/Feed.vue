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
      <button v-if="!commentClosed" class="button" @click="createNewComment()">Comment</button>
      <article v-else class="media">
        <div class="media-content">
          <div class="field">
            <p class="control">
              <textarea class="textarea" placeholder="Add a comment..."></textarea>
            </p>
          </div>
          <button class="button">Submit</button>
        </div>
      </article>
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
  background-color: rgba(30, 80, 160, 0.55)
}

button {
  background: #ffcf00;
  border-radius: 15px;
  align-self: flex-end;
  float: right;
}

.box {
  background: #fff5f5;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}

.posts {
  padding: 2rem;
  background-color: #1e539f;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-around;
  align-items: center;
}
</style>
