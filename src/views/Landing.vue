<template>
  <div>
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Landing/Header.vue";
import Footer from "@/components/Landing/Footer.vue";
import Content from "@/components/Landing/Content.vue";

export default {
  name: "Landing",
  components: { Header, Footer, Content },
  async mounted() {
    if (this.$store.state.auth.user.username) return;
    if (this.$route.query.success) await this.$store.dispatch("LOGIN");
  },
};
</script>
