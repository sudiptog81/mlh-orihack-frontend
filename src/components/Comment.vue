<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <!-- <img class="image" :src="imgPath" alt="userimage" /> -->
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{ email }}</strong> <!-- <small>31m</small> -->
          <br>
          {{ body }}
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">

          <!-- V-if here to check if the user owns this comment -->
          <a class="level-item" @click="replyToComment()">
            <span class="icon is-small"><i class="fas fa-reply"></i></span>
          </a>
          <a class="level-item" @click="deleteComment()">
            <span class="icon is-small"><i class="fa fa-trash"></i></span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</template>

<script>
/*
{
  postId: 1, 
  id: 1, 
  name: "id labore", 
  email: "Eliseo@gardner.biz", 
  body: "lorem"
}
*/

export default {
  name: "Comment",
  props: {
    imgPath: {
      type: String,
    },
    email: {
      type: String,
    },
    timePosted: {
      type: String,
    },
    body: {
      type: String,
    }
  },
  methods: {
    deleteComment() {
      // delete
    },
    replyToComment() {
      // reply
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
