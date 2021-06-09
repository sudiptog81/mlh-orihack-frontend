<template>
  <div>
    <nav class="nav-container">
      <router-link to="/">OriHack</router-link>
      <button @click="handleLogin">
        <i class="fab fa-github"></i> Login with GitHub
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    handleLogin() {
      this.$router.push("/about");
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  height: 5em;
  left: 0px;
  top: 0px;
  background: rgba(29, 83, 159, 1);
}

nav.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  color: #ffffff;

  a {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: #ffffff;

    &.router-link-exact-active {
      color: rgba(248, 185, 42, 1);
    }
  }

  button {
    background: #ffffff;
    border: none;
    border-radius: 2rem;
    padding: 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
}
</style>
