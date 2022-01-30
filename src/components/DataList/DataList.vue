<template lang="pug">
section.container
  .row
    .col-6.col-sm-4.col-md-3.my-1.rounded(v-for="item in items")
      Card(
        :onClick="onItemSelected" 
        :title="item.title"
        :remark="item.remark"
        :description="item.description")
</template>

<script>
import Card from "./Card.vue";
export default {
  props:{
    items:{
      type: Array,
      default: ()=>[]
    },
    onItemSelected:{
      type: Function,
      default: ()=>{}
    },
  },
  components: { Card },
};
</script>

<style lang="sass" scoped>
</style>
