<template lang="pug">
  .container-fluid
    .nav
      .backBtn.btn(@click="goBack") < Back
      .title
</template>

<script>
export default {
  methods:{
    goBack(){
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>