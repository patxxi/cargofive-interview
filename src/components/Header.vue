<template>
  <header class="header">
    <img src="../assets/logo.svg" alt="" />
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  setup() {},
};
</script>

<style scoped>
.header {
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 10px 0px;
  background-color: white;
}

.header img {
  height: 50px;
}
</style>
