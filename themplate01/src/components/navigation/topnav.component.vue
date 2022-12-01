<template>
  <div id="topnav-component" ref="topnav" class="">
    <div class="side-content">
      <TextLogoComponent></TextLogoComponent>
    </div>
    <div class="mid-content">

    </div>
    <div class="side-content">
      <div class="vertical-list">
        <router-link to="/">Intro</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/work">Work</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/blog">Blog</router-link>
      </div>

      <div class="menu-item">
        <button id="menu-btn"> MENU </button>
      </div>
    </div>
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
      if(window.scrollY > 60 ){
        this.$refs.topnav.classList.add('dark-blur');
        this.$refs.topnav.style.height = "60px";
      }else{
        setTimeout( () => {

        },500);
        this.$refs.topnav.classList.remove('dark-blur');
        this.$refs.topnav.style.height = "120px";
      }
    })
  }
}
</script>

<style scoped>
#topnav-component {
  position: fixed;
  height: 120px;
  width: 100%;
  display: flex;
  place-items: center;
  justify-content: space-between;
  top: 0;
  transition: all var(--transition);
  z-index: 1000;
}

.side-content{
  max-width: 200px;
  width: 100%;
  height: 100%;
}

.side-content:first-of-type{
  max-width: 400px;
  /** border-right: 1px dotted var(--white); **/
  display: flex;
  justify-content: center;
  place-items: center;
}

.side-content:last-of-type{
  max-width: 500px;
  width: 100%;
  /** border-left: 1px dotted var(--white); **/
  display: flex;
  justify-content: center;
  place-items: center;
  margin-right: 100px;
}

.side-content a {
  font-weight: bold;
  color: #76828f;
  text-decoration: none;
  margin: 0 10px;
}

#topnav-component a:hover{
  color: #dae2ea;
  transition: var(--transition);
}

#topnav-component a.router-link-exact-active {
  color: var(--white);
}

#menu-btn{
  display: none;
  background: none;
  border: none;
  color: #dae2ea;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}

@media(max-width: 769px) {
  .mid-content{
    display: none !important;
  }

  .side-content:last-of-type{
    margin-right: 0;
  }

  .vertical-list{
    display: none;
  }

  #menu-btn{
    display: flex;
  }
}
</style>