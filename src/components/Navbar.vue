<template>
  <div>
    <nav class="nav-container">
      <span>
        <router-link to="/">OriHack</router-link>
        <router-link
          :class="links"
          v-if="$store.state.auth.user.username"
          to="/dashboard"
        >
          Dashboard
        </router-link>
        <router-link :class="links" to="/about">About</router-link>
      </span>
      <span>
        <span v-if="$store.state.auth.user.username" class="mr-2">
          Hey, {{ $store.state.auth.user.username }}!
        </span>
        <button v-if="!$store.state.auth.user.username" @click="handleLogin">
          <i class="fab fa-github"></i> Login with GitHub
        </button>
        <span v-else>
          Hey, {{ $store.state.auth.user.username }}!
          <button @click="handleLogout">Logout</button>
        </span>
      </span>
    </nav>
  </div>
</template>

<script>
import stylex from "@ladifire-opensource/stylex";

const styles = stylex.create({
  links: {
    marginLeft: "1em",
  },
});

export default {
  computed: {
    links() {
      return stylex(styles.links);
    },
  },
  methods: {
    handleLogin() {
      window.location.href = "/auth/github";
    },
    handleLogout() {
      this.$store.dispatch("LOGOUT");
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
    border-radius: 2rem;
    display: inline-block;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
}
</style>
