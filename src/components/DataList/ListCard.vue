<template lang="pug">
  .border.hover-animation.p-3.hover.d-flex.flex-column(@click="onClick(args)")
    .d-flex.align-items-center
      h2.font-weight-bold.w-100.flex-grow-1.mr-1.text-truncate.title {{title}}
      h3 {{remark}}
    .des
      p.mt-2.block-with-text {{description}}

</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    remark: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    onClick: {
      type: Function,
      default: () => {}
    },
    args: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss">
$description_height: 6em;
.title{
  font-size: 1em;
  font-weight: 300;
}
.des{
  height: $description_height;
}
.hover-animation{
  &:hover{
    background-color: rgba(255, 220, 207, 0.632);
  }
}
/* styles for '...' */
.block-with-text {
  /* hide text if it more than N lines  */
  overflow: hidden;
  /* for set '...' in absolute position */
  position: relative;
  /* use this value to count block height */
  line-height: 1.2em;
  /* max-height = line-height (1.2) * lines max number (3) */
  max-height: $description_height;
  /* fix problem when last visible word doesn't adjoin right side  */
  text-align: justify;
  /* place for '...' */
  // margin-right: -1em;
  padding-right: 1em;
  // padding-left: 1em;
  // margin-right: 1em;
}
/* create the ... */
.block-with-text:before {
  /* points in the end */
  content: '...';
  /* absolute position */
  position: absolute;
  /* set position to right bottom corner of block */
  right: 0;
  bottom: 0;
}
/* hide ... if we have text, which is less than or equal to max lines */
.block-with-text:after {
  /* points in the end */
  content: '';
  /* absolute position */
  position: absolute;
  /* set position to right bottom corner of text */
  right: 0;
  /* set width and height */
  width: 1em;
  height: 1em;
  margin-top: 0.2em;
  /* bg color = bg color under block */
  background: white;
}
</style>
