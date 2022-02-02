<template lang="pug">
.container-fluid.py-3
  .row.text-center
    h1.h1.col 台北市公園資料
  .row
    SearchBar.col(:onSearch="onSearch" :defaultSearchTerm="searchTerm")
  DataList.my-2(:items="pagedList", :onItemSelected="onParkSelected")
  .row.justify-content-center
    vPagination(
      v-model="page",
      :page-count="pageCount",
      :classes="bootstrapPaginationClasses"
    )
</template>

<script>
import vPagination from 'vue-plain-pagination'
import DataList from '../components/DataList/DataList.vue'
import SearchBar from '../components/SearchBar.vue'

export default {
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    searchTerm: {
      type: String,
      default: ''
    }
  },
  components: { DataList, vPagination, SearchBar },
  data() {
    return {
      page: 1,
      per: 12,
      bootstrapPaginationClasses: {
        ul: 'pagination',
        li: 'page-item',
        liActive: 'active',
        liDisable: 'disabled',
        button: 'page-link'
      }
    }
  },
  methods: {
    onParkSelected({ id }) {
      this.$router.push({ path: `parks/${id}` })
    },
    onSearch(searchTerm) {
      this.$router
        .push({ path: '/parks', query: { p: 1, s: searchTerm } })
        .catch(() => {})
    }
  },
  computed: {
    filterList() {
      return this.$store.state.parks.list
        .filter(
          (park) => park.title.includes(this.searchTerm)
        )
    },
    pagedList() {
      const start = (this.currentPage - 1) * this.per
      return this.filterList
        .slice(start, start + this.per)
    },
    pageCount() {
      return Math.ceil(this.filterList.length / this.per)
    }
  },
  watch: {
    currentPage: {
      handler(newValue) {
        this.page = newValue
      },
      immediate: true
    },
    page: {
      handler(newValue) {
        this.$router
          .push({ path: '/parks', query: { p: newValue, s: this.searchTerm } })
          .catch(() => {})
      }
    }
  }
}
</script>

<style>
</style>
