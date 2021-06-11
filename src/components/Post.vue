<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{ title }}</p>
    </header>
    <div class="card-content">
      <div class="content">
        {{ body }}
        <br />
        <span>
          by
          <a :href="'https://github.com/' + user">{{ user }}</a>
        </span>
      </div>
    </div>
    <footer class="card-footer">
      <a @click="likePost(id)" class="card-footer-item">
        <span class="icon is-large"><i class="fa fa-heart"></i></span>
      </a>
      <a
        v-if="user === $store.state.auth.user.username"
        @click="deletePost(id)"
        class="card-footer-item"
      >
        <span class="icon is-large"><i class="fa fa-trash"></i></span>
      </a>
    </footer>
  </div>
</template>

<script>
/*
 {
    "userId": 1,
    "id": 1,
    "title": " reprehenderit",
    "body": "qecto"
 }
*/

export default {
  name: "Post",
  props: {
    _id: String,
    user: String,
    title: String,
    body: String,
  },
  methods: {
    handleLikePost(id) {
      // like
    },
    handleDeletePost(id) {
      // delete
    },
  },
};
</script>

<style lang="scss" scoped></style>
