<template>
  <router-view/>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('device/init');
  }
}
</script>

<style>

@import './styles/colors.style.css';
@import './styles/main.style.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--white);
}
</style>
