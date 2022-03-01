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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
