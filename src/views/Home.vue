<template>
  <Pagination
    v-if="ports.data"
    :lastPage="ports.meta.last_page"
    @changePage="updateTable"
  >
    <template #table>
      <Filter
        :data="ports.data"
        :filterKeys="headers"
        @handleFilter="filterTable"
        @handleClean="cleanFilter"
      ></Filter>
      <basic-table
        head="Puertos"
        :body="filteredPorts"
        :headers="headers"
        :key="filteredPorts"
      >
      </basic-table>
    </template>
  </Pagination>

  <h1 v-else>Loading...</h1>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import BasicTable from "../components/Table.vue";
import Pagination from "../components/Pagination.vue";
import Filter from "../components/Filter.vue";
import { getPorts } from "../utils/api";
export default {
  name: "HomeView",
  components: { BasicTable, Pagination, Filter },
  setup() {
    const ports = ref({});
    const filteredPorts = ref([]);

    const updateTable = async (index) => {
      const request = await getPorts(index);
      ports.value = { ...request };
      filteredPorts.value = [...ports.value.data];
      window.scrollTo(0, 0);
    };

    onBeforeMount(async () => {
      await updateTable();
    });

    const filterTable = (query) => {
      for (let param in query) {
        if (query[param]) {
          filteredPorts.value = filteredPorts.value.filter(
            (port) => port[param] === query[param]
          );
        }
      }
    };

    const cleanFilter = () => {
      filteredPorts.value = [...ports.value.data];
    };

    const headers = ["id", "name", "country", "continent", "Coordinates"];

    return {
      ports,
      headers,
      updateTable,
      filterTable,
      filteredPorts,
      cleanFilter,
    };
  },
};
</script>

<style scoped></style>
