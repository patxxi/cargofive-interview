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
export default {
  name: "BasicTable",
  props: ["headers", "head", "body"],
  setup(props) {
    return {
      tableHeaders: props.headers,
      tableHead: props.head,
      tableBody: props.body,
    };
  },
};
</script>

<style scoped>
.table-wrapper {
  margin: 10px 0px;
  box-shadow: 10px 35px 50px rgba(0, 0, 0, 0.4);
}

.fl-table {
  font-size: 1rem;
  border-collapse: collapse;
  width: 100%;
  white-space: nowrap;
  background-color: white;
}

.fl-table tr,
.fl-table th {
  text-align: center;
  padding: 5px;
}

.fl-table thead th {
  color: #ffffff;
  background: #05194e;
}
</style>
