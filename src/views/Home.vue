<template>
  <basic-table
    head="Puertos"
    v-if="ports.body"
    :body="ports.body"
    :headers="headers"
  ></basic-table>

  <h1 v-else>Loading...</h1>
</template>

<script>
import { reactive, onBeforeMount } from "vue";
import BasicTable from "../components/Table.vue";
import { getPorts } from "../utils/api";
export default {
  name: "HomeView",
  components: { BasicTable },
  setup() {
    const ports = reactive({ body: null });

    onBeforeMount(async () => {
      const { data } = await getPorts();
      ports.body = data.data;
    });

    const headers = ["Id", "Name", "Country", "Continent", "Coordinates"];

    return { ports, headers };
  },
};
</script>

<style scoped></style>
