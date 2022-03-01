<template>
  <layout>
    <template #header>
      <Header></Header>
    </template>

    <template #content>
      <router-view />
    </template>

    <template #footer>
      <Footer></Footer>
    </template>
  </layout>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Layout from "./components/Layout.vue";
export default {
  setup() {},
  components: {
    Header,
    Footer,
    Layout,
  },
};
</script>
