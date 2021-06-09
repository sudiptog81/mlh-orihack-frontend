<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button v-if="!this.$store.state.auth.user.id" @click="handleLogin">
      Login
    </button>
    <button v-else @click="handleLogout">Logout</button>
    <p v-if="this.$store.state.auth.user.id">
      Fetched {{ this.$store.state.auth.user.title }}
    </p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["LOGIN", "LOGOUT"]),
    async handleLogin() {
      await this.$store.dispatch("LOGIN");
    },
    handleLogout() {
      this.$store.dispatch("LOGOUT");
    },
  },
};
</script>
