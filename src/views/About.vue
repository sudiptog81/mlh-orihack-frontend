<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button v-if="!this.loggedIn" @click="handleLogin">Login</button>
    <button v-else @click="handleLogout">Logout</button>
    <p v-if="this.loggedIn">Fetched {{ this.$store.state.auth.user.title }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    ...mapActions(["LOGIN", "LOGOUT"]),
    async handleLogin() {
      await this.$store.dispatch("LOGIN");
      this.loggedIn = !this.loggedIn;
    },
    handleLogout() {
      this.$store.dispatch("LOGOUT");
      this.loggedIn = !this.loggedIn;
    },
  },
};
</script>
