<template>
  <div class="hello">
    <div class="d-flex justify-content-center align-items-center page">404 Error Not Found Page</div>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.page {
  width: 100vw;
  height: 100vh;
}
</style>
