<template>
  <app-layout>
    <template #header>
      <app-header></app-header>
    </template>

    <template #content>
      <router-view />
    </template>

    <template #footer>
      <app-footer></app-footer>
    </template>
  </app-layout>
</template>

<script>
import AppHeader from "./components/Header.vue";
import AppFooter from "./components/Footer.vue";
import AppLayout from "./components/Layout.vue";
export default {
  setup() {},
  components: {
    AppHeader,
    AppFooter,
    AppLayout,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  background-color: #ebe4e4;
}
</style>
