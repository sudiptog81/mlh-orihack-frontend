<template>
  <div class="about">
    <h1 :class="heading">This is an about page</h1>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import stylex from "@ladifire-opensource/stylex";

const styles = stylex.create({
  heading: {
    color: "#ff0000",
  },
});

export default {
  computed: {
    heading() {
      return stylex(styles.heading);
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
