<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button
      :class="buttonClass"
      v-if="!this.$store.state.auth.user.id"
      @click="handleLogin"
    >
      Login
    </button>
    <button :class="buttonClass" v-else @click="handleLogout">Logout</button>
    <p v-if="this.$store.state.auth.user.id">
      Fetched {{ this.$store.state.auth.user.title }}
    </p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import stylex from "@ladifire-opensource/stylex";

const styles = stylex.create({
  button: {
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#1DA1F2",
    color: "#fff",
  },
});

export default {
  computed: {
    buttonClass() {
      return stylex(styles.button);
    },
  },
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
