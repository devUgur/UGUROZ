<template>
  <h3 id="vertical-email">
    devUgur@icloud.com
  </h3>
</template>

<script>
export default {
  name: "VerticalEmailComponent"
}
</script>

<style scoped>
#vertical-email{
  writing-mode: vertical-rl;
  /*text-orientation: upright;*/
  text-transform: uppercase;
}

#vertical-email:hover{
  text-decoration: underline;
}
</style>