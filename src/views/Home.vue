<template>
  <Pagination
    v-if="ports.data"
    :lastPage="ports.meta.last_page"
    @changePage="updateTable"
  >
    <template #table>
      <basic-table
        head="Puertos"
        :body="ports.data"
        :headers="headers"
        :key="ports.data"
      ></basic-table>
    </template>
  </Pagination>

  <h1 v-else>Loading...</h1>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import BasicTable from "../components/Table.vue";
import Pagination from "../components/Pagination.vue";
import { getPorts } from "../utils/api";
export default {
  name: "HomeView",
  components: { BasicTable, Pagination },
  setup() {
    const ports = ref({});

    const updateTable = async (index) => {
      const { data } = await getPorts(index);
      ports.value = { ...data };
      window.scrollTo(0, 0);
    };

    onBeforeMount(async () => {
      await updateTable();
    });

    const headers = ["Id", "Name", "Country", "Continent", "Coordinates"];

    return { ports, headers, updateTable };
  },
};
</script>

<style scoped></style>
