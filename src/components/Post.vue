<template>
  <div class="card my-5">
    <header class="card-header">
      <p class="card-header-title is-flex">
        <img
          class="image is-64x64 mr-5"
          :src="`https://github.com/${user}.png`"
          :alt="`${user}`"
        />

        {{ title }}
      </p>
    </header>
    <div class="card-content">
      <div class="content has-text-justified">
        {{ body }}
        <br />
        <span>
          by
          <a :href="'https://github.com/' + user">{{ user }}</a>
          <hr />
          <div class="is-flex">
            <input v-model="newComment" class="input" type="text" />
            <button @click="handlePostComment" class="button is-dark">
              Comment
            </button>
          </div>
          <div
            class="box is-flex is-flex-direction-column"
            v-for="(comment, indexC) of comments"
            :key="indexC"
          >
            <Comment :body="comment.body" :user="comment.user.username" />
          </div>
        </span>
      </div>
    </div>
    <footer class="card-footer">
      <a @click="handleLikePost" class="card-footer-item">
        <span class="icon is-large">
          <i class="fa fa-heart"></i>
        </span>
      </a>
      <a
        v-if="user === $store.state.auth.user.username"
        @click="handleDeletePost"
        class="card-footer-item"
      >
        <span class="icon is-large"><i class="fa fa-trash"></i></span>
      </a>
    </footer>
  </div>
</template>

<script>
import Comment from "./Comment.vue";

export default {
  name: "Post",
  components: { Comment },
  props: {
    id: { type: String, required: true },
    user: String,
    title: String,
    body: String,
    comments: [String],
  },
  data() {
    return {
      newComment: "",
    };
  },
  methods: {
    handleLikePost() {
      this.$store.dispatch("LIKE_POST", this.id);
    },
    handleDeletePost() {
      this.$store.dispatch("DELETE_POST", this.id);
    },
    handlePostComment() {
      this.$store.dispatch("COMMENT_ON_POST", {
        body: this.newComment,
        post: this.id,
      });
      this.newComment = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
