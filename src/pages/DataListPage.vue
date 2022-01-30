<template lang="pug">
  .container-fluid
    .row.text-center
      h1.h1.col 台北市公園資料
    DataList.my-2(:items="filterList")
    .row.justify-content-center
      vPagination(
        v-model="page" 
        :page-count="pageCount" 
        :classes="bootstrapPaginationClasses")
</template>

<script>
import DataList from "../components/DataList/DataList.vue"
import dataSource from  "../assets/park_data_source.json"
import vPagination from 'vue-plain-pagination'
import ParkDetail from '../models/ParkDetail'
import { mapActions } from 'vuex'
export default {
  components: { DataList, vPagination },
  data(){
    return {
      page:1,
      per: 12,
      bootstrapPaginationClasses: {
        ul: 'pagination',
        li: 'page-item',
        liActive: 'active',
        liDisable: 'disabled',
        button: 'page-link'  
      },
    }
  },
  beforeMount(){
    if(!this.$store.state.parks.list.length){
      console.log('set parks')
      this.setParks(dataSource.map(
        parkJSON => new ParkDetail(parkJSON)
      ))
    }
  },
  methods:{
    ...mapActions('parks',[
      'setParks'
    ])
  },
  computed:{
    filterList(){
      const start = (this.page-1) * this.per
      return  this.$store.state.parks.list.slice(start, start + this.per)
    },
    pageCount(){
      return Math.ceil(this.$store.state.parks.list.length / this.per)
    }
  }
};
</script>

<style>
</style>