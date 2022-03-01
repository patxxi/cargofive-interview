<template>
  <basic-table head="Puertos" :body="array" :headers="headers"></basic-table>
</template>

<script>
import BasicTable from "../components/Table.vue";
export default {
  name: "HomeView",
  components: { BasicTable },
  setup() {
    const array = [
      {
        id: 742,
        name: "Abu Dhabi, AEAUH",
        country: "United Arab Emirates",
        continent: "AS",
        coordinates: "24.4821 54.502135",
      },
      {
        id: 743,
        name: "Ajman, AEAJM",
        country: "United Arab Emirates",
        continent: "AS",
        coordinates: "25.41093 55.4573",
      },
      {
        id: 744,
        name: "Fujairah, AEFJR",
        country: "United Arab Emirates",
        continent: "AS",
        coordinates: "25.12769 56.356",
      },
      {
        id: 745,
        name: "Jebel Ali, AEJEA",
        country: "United Arab Emirates",
        continent: "AS",
        coordinates: "25.00063 55.0493",
      },
    ];

    const headers = ["Id", "Name", "Country", "Continent", "Coordinates"];

    return { array, headers };
  },
};
</script>

<style scoped></style>
