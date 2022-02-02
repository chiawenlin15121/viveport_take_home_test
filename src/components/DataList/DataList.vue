<template lang="pug">
section
  .row
    .col-6.col-sm-4.col-md-3.my-1.rounded(v-for="item in items")
      ListCard(
        :onClick="onItemSelected"
        :args="item"
        :title="item.title"
        :remark="item.remark"
        :description="item.description")
</template>

<script>
import ListCard from './ListCard.vue'

export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    onItemSelected: {
      type: Function,
      default: () => {}
    }
  },
  components: { ListCard }
}
</script>

<style lang="sass" scoped>
</style>
