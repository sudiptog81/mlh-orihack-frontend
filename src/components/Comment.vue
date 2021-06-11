<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img
          class="image"
          :src="`https://github.com/${user}.png`"
          :alt="`${user}`"
        />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          {{ body }}
          <br />
          by <a :href="'https://github.com/' + user">{{ user }}</a>
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
export default {
  name: "Comment",
  props: {
    user: String,
    body: {
      type: String,
    },
  },
  methods: {
    deleteComment() {
      // delete
    },
    replyToComment() {
      // reply
    },
  },
};
</script>

<style lang="scss" scoped></style>
