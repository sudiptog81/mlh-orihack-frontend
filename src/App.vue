<template>
  <Navbar />
  <router-view class="content" />
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: { Navbar },
};
</script>

<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
}

.section {
  padding: 2rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(30, 83, 159, 0.55);
}
</style>
