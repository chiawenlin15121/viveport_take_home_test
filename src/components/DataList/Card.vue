<template lang="pug">
  .border.p-2.hover.d-flex.flex-column(@click="onClick('test')") 
    .d-flex.justify-content-between.align-items-center
      h2.mr-1.text-truncate.title {{title}}
      h3 {{remark}}
    .mt-2 {{description}}

</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    remark: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    onClick:{
      type: Function,
      default: () => {}
    }
  },
};
</script>

<style lang="scss">
.title{
  font-size: 1.2em;
  font-weight: 300;
}
</style>