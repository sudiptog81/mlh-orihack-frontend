<template>
  <section>
    <article class="media">
      <div class="media-content">
        <div class="field">
          <div class="control">
            <input v-model="newPost.title" type="text" />
          </div>
        </div>
        <div class="field">
          <p class="control">
            <textarea
              class="textarea"
              v-model="newPost.body"
              placeholder="Write your thoughts..."
            ></textarea>
          </p>
        </div>
        <button @click="createPost" class="button">Post</button>
      </div>
    </article>
    <div class="posts" v-for="post of $store.state.post.posts" :key="post.id">
      <Post :title="post.title" :body="post.body" :user="post.user" />
      <!-- <div
        class="box"
        v-for="comment of post.comments"
        :key="comment.post"
      >
        <Comment :email="comment.email" :body="comment.body" />
      </div> -->
      <button v-if="!commentClosed" class="button" @click="createNewComment()">
        Comment
      </button>
      <article v-else class="media">
        <div class="media-content">
          <div class="field">
            <p class="control">
              <textarea
                class="textarea"
                placeholder="Add a comment..."
              ></textarea>
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
  methods: {
    createPost() {
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
      if (!this.commentClosed) {
        console.log("Open Comment Box");
      }
    },
  },
  async created() {
    await this.$store.dispatch("GET_POSTS");
  },
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(30, 80, 160, 0.55);
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
