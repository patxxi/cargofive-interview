<template>
  <div class="table-wrapper">
    <table class="fl-table">
      <thead v-if="head">
        <tr>
          <th v-for="(header, index) in tableHeaders" :key="index">
            {{ header }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(row, index) in tableBody" :key="index">
          <th v-for="(col, index) in row" :key="index">
            {{ col }}
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "BasicTable",
  props: ["headers", "head", "body"],
  setup(props) {
    const tableHeaders = ref(props.headers);
    const tableHead = ref(props.head);
    const tableBody = ref(props.body);

    return { tableHeaders, tableHead, tableBody };
  },
};
</script>

<style scoped>
.table-wrapper {
  margin: 10px 70px 70px;
  box-shadow: 0px 35px 50px rgba(0, 0, 0, 0.2);
  width: 70%;
}

.fl-table {
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: normal;
  border: none;
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  white-space: nowrap;
  background-color: white;
}

.fl-table td,
.fl-table th {
  text-align: center;
  padding: 8px;
}

.fl-table td {
  border-right: 1px solid #f8f8f8;
  font-size: 12px;
}

.fl-table thead th {
  color: white;
  background: black;
}
</style>
