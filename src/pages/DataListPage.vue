<template lang="pug">
.container-fluid
  .row.text-center
    h1.h1.col 台北市公園資料
  DataList.my-2(:items="pagedList", :onItemSelected="onParkSelected")
  .row.justify-content-center
    vPagination(
      v-model="page",
      :page-count="pageCount",
      :classes="bootstrapPaginationClasses"
    )
</template>

<script>
import DataList from "../components/DataList/DataList.vue";
import dataSource from "../assets/park_data_source.json";
import vPagination from "vue-plain-pagination";
import ParkDetail from "../models/ParkDetail";
import { mapActions } from "vuex";
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    searchTerm: {
      type: String,
      default: "",
    },
  },
  components: { DataList, vPagination },
  data() {
    return {
      page: 1,
      per: 12,
      bootstrapPaginationClasses: {
        ul: "pagination",
        li: "page-item",
        liActive: "active",
        liDisable: "disabled",
        button: "page-link",
      },
    };
  },
  beforeMount() {
    if (!this.$store.state.parks.list.length) {
      console.log("set parks");
      this.setParks(
        dataSource.map(
          (parkJSON, index) => new ParkDetail({ ...parkJSON, id: index })
        )
      );
    }
  },
  methods: {
    ...mapActions("parks", ["setParks"]),
    onParkSelected({ id }) {
      this.$router.push({ path: `parks/${id}` });
    },
  },
  computed: {
    filterList() {
      return this.$store.state.parks.list
        .filter(
          (park) => park.title.includes(this.searchTerm)
        )
    },
    pagedList(){
      const start = (this.currentPage - 1) * this.per
      return this.filterList
        .slice(start, start + this.per);
    },
    pageCount() {
      return Math.ceil(this.filterList.length / this.per);
    },
  },
  watch: {
    currentPage: {
      handler(newValue) {
        this.page = newValue;
      },
      immediate: true,
    },
    page: {
      handler(newValue){
        this.$router
          .push({ path: '/parks', query: { p: newValue, s: this.searchTerm }})
          .catch(()=>{})
      }
    }
  },
};
</script>

<style>
</style>