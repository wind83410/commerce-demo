<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: !hasPre }">
        <a
          class="page-link"
          href="#"
          @click.prevent="$emit('change-page', currentPage - 1)"
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        v-for="page in totalPages"
        :key="page"
        class="page-item"
        :class="{ active: currentPage === page }"
      >
        <a
          class="page-link"
          href="#"
          @click.prevent="$emit('change-page', page)"
          >{{ page }}</a
        >
      </li>
      <li class="page-item" :class="{ disabled: !hasNext }">
        <a
          class="page-link"
          href="#"
          @click.prevent="$emit('change-page', currentPage + 1)"
          aria-label="Next"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    currentPage: Number,
    hasPre: Boolean,
    hasNext: Boolean,
    totalPages: Number
  }
}
</script>
