<template>
  <div id="intro-view">
    <particles-bg-component id="particles"></particles-bg-component>
  </div>
</template>

<script>
import particlesBgComponent from "@/components/particles/particlesBg.component";
export default {
  components: {
    particlesBgComponent,
  }
}
</script>

<style scoped>
#particles{
  z-index: -10 !important;
}
#intro-view{
  height: 100vh;
}
</style>