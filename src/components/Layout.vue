<template>
  <main class="Layout">
    <slot name="header"></slot>
    <slot name="content"></slot>
    <slot name="footer"></slot>
  </main>
</template>

<script>
export default {
  name: "AppLayout",
  setup() {},
};
</script>

<style scoped>
.Layout {
  display: flex;
  width: 100%;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: space-between;
}
</style>
