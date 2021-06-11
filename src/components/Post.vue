<template>
  <div class="box">
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <!-- <img class="image" :src="imgPath" alt="userimage" /> -->
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ id }}</strong> <!-- <small>31m</small> -->
            <br>
            {{ body }}
          </p>
        </div>
      </div>
      <figure class="media-right">
        <a @click="likePost()">
          <span class="icon is-large"><i lass="far fa-heart"></i></span>
        </a>
      </figure>
    </article>
    <hr />
    <div class="post-mark-down">
      {{ body }}
    </div>
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
    imgPath: {
      type: String,
    },
    username: {
      type: String,
    },
    timePosted: {
      type: String,
    },
    postTitle: {
      type: String,
    },
    postLikes: {
      type: String,
    },
    postMD: {
      type: String,
    },
    userId: Number,
    id: Number,
    title: String,
    body: String,
  },
  methods: {
    likePost() {
      // like
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  background: #fff5f5;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}
</style>
