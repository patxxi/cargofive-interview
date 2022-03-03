<template>
  <div class="filter-wrapper">
    <div class="filters-container">
      <div class="filter" v-for="filter in filters" :key="filter">
        <span>{{ filter }}</span>
        <select :name="filter" :id="filter" v-model="query[filter]">
          <option :value="null"></option>
          <option
            :value="value"
            v-for="value in getUniqueValues(filter)"
            :key="value"
          >
            {{ value }}
          </option>
        </select>
      </div>
    </div>
    <div class="buttons-container">
      <button @click="$emit('handleFilter', query)">Filter</button>
      <button
        @click="
          cleanFilter();
          $emit('handleClean');
        "
      >
        Clear
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "AppFilter",
  props: ["data", "filterKeys"],
  setup(props) {
    const query = ref({});

    const getUniqueValues = (key) => {
      /**
       * It methods use Sets to get the unique values of the current page for
       * the options in select input on template. Simply iterate through
       * the data and try to add the value in Set.
       *
       * @param (String) key The key of the inputs fields
       *
       * @return (Array) uniqueValues The unique values in data for that field
       */
      const uniqueValues = new Set();
      props.data.forEach((element) => {
        uniqueValues.add(element[key]);
      });
      return uniqueValues;
    };

    const cleanFilter = () => {
      /**
       * Clear the query object for the filter
       */

      query.value = {};
    };

    return { filters: props.filterKeys, getUniqueValues, query, cleanFilter };
  },
};
</script>

<style scoped>
.filter-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: white;
  padding-top: 10px;
}

.filter-wrapper .buttons-container {
  width: 200px;
  display: flex;
  justify-content: space-around;
  margin: 10px 0px;
}

.filter-wrapper .buttons-container button {
  width: 80px;
}

.filters-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.filters-container .filter {
  width: 150px;
  margin: 0px 10px;
}

.filters-container .filter select {
  width: 100%;
}
</style>
