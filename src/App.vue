<template lang="pug">
#app.py-3
  DataListPage
</template>

<script>
import DataListPage from "./pages/DataListPage.vue";

export default {
  name: "App",
  components: {
    DataListPage,
  },
};
</script>

<style lang="scss">
@import "./scss/main.scss";
#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.hover:hover{
  cursor: pointer;
}
h1, h2, h3, h4, h5, h6{
  font-size: 1rem;
  font-weight: inherit;
  margin: 0;
  padding: 0;
  display: inline-block;
  line-height: inherit;
}
</style>
