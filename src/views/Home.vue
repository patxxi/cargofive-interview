<template>
  <app-pagination
    v-if="ports.data"
    :lastPage="ports.meta.last_page"
    @changePage="updateTable"
  >
    <template #table>
      <app-filter
        :data="ports.data"
        :filterKeys="headers"
        @handleFilter="filterTable"
        @handleClean="cleanFilter"
        :key="ports.data"
      ></app-filter>
      <app-table
        head="Puertos"
        :body="filteredPorts"
        :headers="headers"
        :key="filteredPorts"
      >
      </app-table>
    </template>
  </app-pagination>

  <h1 v-else>Loading...</h1>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import AppTable from "../components/Table.vue";
import AppPagination from "../components/Pagination.vue";
import AppFilter from "../components/Filter.vue";
import { getPorts } from "../utils/api";
export default {
  name: "HomeView",
  components: { AppTable, AppPagination, AppFilter },
  setup() {
    const ports = ref({});
    const filteredPorts = ref([]);

    const updateTable = async (index) => {
      /**
       *  Update the table when change page from pagination.
       *  it take the index of the pagination active page, for request this info from API
       *
       * @param (Number) index The index of the current page in the pagination
       */
      const request = await getPorts(index);
      ports.value = { ...request };
      filteredPorts.value = [...ports.value.data];
      window.scrollTo(0, 0);
    };

    onBeforeMount(async () => {
      /**
       * First request to the API for initial data, before the component is mount
       */
      await updateTable();
    });

    const filterTable = (query) => {
      /**
       * Execute the filters over the array of ports to show them.
       * It iterate through the query, and if it's not null, compare
       * the values of the query with every item in ports array.
       *
       * @param (Object) query A object key-value with the fields which gonna filter and their values
       *
       */
      for (let param in query) {
        if (query[param]) {
          filteredPorts.value = filteredPorts.value.filter(
            (port) => port[param] === query[param]
          );
        }
      }
    };

    const cleanFilter = () => {
      /**
       * Clean and re start the data for filteredPorts.
       */

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
