<template>
  <main class="Layout">
    <slot name="header"></slot>
    <slot name="content"></slot>
    <slot name="footer"></slot>
  </main>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Layout",
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
