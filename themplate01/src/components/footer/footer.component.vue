<template>
  <div id="footer-component" class="blur">
    <div class="footer-body"></div>
    <div class="footer-foot"></div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
}
</script>

<style scoped>
#footer-component{
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 500px;

  padding: 0 5%;
}

.footer-foot{
  height: 60px;

  background-color: #2c3e50;
}
</style>