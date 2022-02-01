<template lang="pug">
.input-group
  //- .input-group-prepend 
  //-   span.input-group-text 搜尋
  input.form-control(v-model="searchTerm")
  .input-group-append
    .btn.btn-outline-secondary(@click="clearSearch") X
    .btn.btn-outline-secondary(@click="search") 搜尋
</template>

<script>
export default {
  props: {
    defaultSearchTerm:{
      type: String,
      default: '',
    },
    onSearch: {
      type: Function,
      default: () => {},
    },
  },
  data(){
    return {
      searchTerm: ''
    }
  },
  methods:{
    clearSearch(){
      this.searchTerm = ''
      this.search()
    },
    search(){
      this.onSearch(this.searchTerm)
    }
  },
  watch:{
    defaultSearchTerm:{
      handler(newValue){
        this.searchTerm = newValue
      },
      immediate: true
    }
  }
};
</script>

<style>
</style>