<template>
  <div class="pagination-wrapper">
    <slot name="table"></slot>
    <div class="pagination">
      <button
        @click="
          setActive(1);

          $emit('changePage', 1);
        "
        type="button"
        class="pagination__button pagination__button--back"
      >
        &laquo;
      </button>
      <button
        type="button"
        v-for="index in pages"
        :key="index"
        class="pagination__button"
        :class="active === index && 'pagination__button--active'"
        @click="
          setActive(index);
          $emit('changePage', index);
        "
      >
        {{ index }}
      </button>

      <button
        type="button"
        class="pagination__button pagination__button--next"
        @click="
          setActive(paginationLimit);
          // eslint-disable-next-line prettier/prettier
          $emit('changePage', 25);"
      >
        &raquo;
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pagination",
  props: ["lastPage", "double"],
  setup(props) {
    const paginationLimit = ref(props.lastPage);
    const active = ref(1);

    const setActive = (index) => {
      active.value = index;
    };

    const pages = computed(() => {
      const range = [];

      for (let i = active.value - 2; i <= active.value + 4; i++) {
        if (i <= 0 || i > paginationLimit.value) {
          continue;
        }
        range.push(i);
      }

      return range;
    });

    return { paginationLimit, setActive, active, pages };
  },
};
</script>

<style scoped>
.pagination-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.pagination {
  display: flex;
  width: 100%;
  justify-content: center;
}

.pagination .pagination__button {
  border: none;
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  cursor: pointer;
}

.pagination .pagination__button:hover {
  background-color: grey;
}

.pagination .pagination__button--active {
  background-color: #05194e;
  color: white;
}
</style>
