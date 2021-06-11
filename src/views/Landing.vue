<template>
  <div>
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Content from "@/components/Content.vue";

export default {
  name: "Landing",
  components: { Header, Footer, Content },
  async mounted() {
    if (this.$store.state.auth.user.username) return;
    if (this.$route.query.success) await this.$store.dispatch("LOGIN");
  },
};
</script>
