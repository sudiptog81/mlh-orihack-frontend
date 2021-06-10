<template>
  <div class="box">
    <div class="media">
      <img class="image" :src="imgPath" alt="userimage">
      <div class="content">
        <h3>{{ username }}</h3>
        <p>{{ timePosted }}</p>
      </div>
      <h1>{{ postTitle }}</h1>
      <i class="far fa-heart"></i>
    </div>
    <hr>
    <div class="post-mark-down">
      {{ postMD }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
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
    postTitle: {
      type: String
    },
    postLikes: {
      type: String
    },
    postMD: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
  img {
    width: 15%;
  }

  h1 {
    width: 45%;
  }

  .box {
    background: #FFF5F5;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
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
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
</style>
