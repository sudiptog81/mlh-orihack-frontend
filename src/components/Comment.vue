<template>
  <div class="media">
    <img class="image" :src="imgPath" alt="userimage">
    <div class="content">
      <h3>{{ username }}</h3>
      <p>{{ timePosted }}</p>
      <p>{{ comment }}</p>
    </div>
    <i class="fas fa-ellipsis-h" @click="editComment()"></i>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    imgPath: {
      type: String
    },
    username: {
      type: String
    },
    timePosted: {
      type: String
    },
    comment: {
      type: String
    }
  },
  methods: {
    editComment() {
      // edit 
    }
  }
};
</script>

<style lang="scss" scoped>
  img {
    width: 15%;
  }

  .media {
    width: 100%;
    height: 6rem;
    overflow: hidden;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .content {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
</style>
