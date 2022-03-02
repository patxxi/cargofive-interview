<template>
  <footer class="footer">
    <div class="footer-info">
      <a href="https://github.com/patxxi/cargofive-interview">Github</a>
      <span>Francisco Ruiz</span>
      <a href="https://cargofive.com/es/">Cargofive</a>
    </div>
  </footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "v-footer",
  setup() {},
};
</script>

<style scoped>
.footer {
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin: 10px 0px 0px 0px;
  background-color: white;
}

.footer .footer-info a,
span {
  text-decoration: none;
  color: black;
  margin: 0px 10px;
  font-size: 1.2rem;
  font-weight: bolder;
}
</style>
