<template>
  <h4 id="vertical-email">
    devUgur@icloud.com
  </h4>
</template>

<script>
export default {
  name: "VerticalEmailComponent"
}
</script>

<style scoped>
#vertical-email{
  writing-mode: vertical-rl;
  text-orientation: upright;
  letter-spacing: -5px;
}

#vertical-email:hover{
  text-decoration: underline;
}
</style>