<template>
  <div id="topnav-component" ref="topnav" class="">
    <div class="side-content">
      <TextLogoComponent></TextLogoComponent>
    </div>
    <div class="mid-content">
      <router-link to="/">Home</router-link>
      <router-link to="/">About</router-link>
      <router-link to="/">Work</router-link>
      <router-link to="/">Contact</router-link>
    </div>
    <div class="side-content"></div>
  </div>
</template>

<script>
import TextLogoComponent from "@/components/logos/textLogo.component";
export default {
  components: {
    TextLogoComponent,
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if(window.scrollY >= 60 ){
        this.$refs.topnav.classList.add('blur');
      }else{
        this.$refs.topnav.classList.remove('blur');
      }
    })
  }
}
</script>

<style scoped>
#topnav-component {
  position: fixed;
  height: 60px;
  width: 100%;
  display: flex;
  place-items: center;
  justify-content: space-between;

  z-index: 1000;
}

.side-content{
  max-width: 200px;
  width: 100%;
  height: 100%;
}

.side-content:first-of-type{
  border-right: 1px dotted var(--white);
}

.side-content:last-of-type{
  border-left: 1px dotted var(--white);
}

#topnav-component a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}

#topnav-component a.router-link-exact-active {
  color: var(--white);
}

@media(max-width: 769px) {
  .mid-content{
    display: none !important;
  }
}
</style>