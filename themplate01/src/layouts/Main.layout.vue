<template>
  <div id="main-layout">
    <topnav-component></topnav-component>
    <threejs-background-component></threejs-background-component>
    <div class="body-layout">
      <div class="sidebar-layout">
       <VerticalEmailComponent></VerticalEmailComponent>
      </div>
      <div class="view-layout">
        <div v-if="mainPage" class="main-view">
          <MainView></MainView>
        </div>
        <div v-else class="component-view">
          <router-view></router-view>
        </div>


      </div>
      <div class="sidebar-layout"></div>
    </div>
    <div class="footer-layout">
      <FooterComponent></FooterComponent>
    </div>
  </div>
</template>

<script>
import TopnavComponent from '@/components/navigation/topnav.component';
import FooterComponent from "@/components/footer/footer.component";

import MainView from "@/views/Main.view";

import ThreejsBackgroundComponent from '@/components/threejs/ThreejsBackground.component'

import VerticalEmailComponent from '@/components/sidebars/VerticalEmail.component';


export default {
  components: {
    TopnavComponent,
    FooterComponent,

    MainView,
    ThreejsBackgroundComponent,

    VerticalEmailComponent
  },
  computed: {
    mainPage(){
      return this.$route.path === "/";
    }
  },
}
</script>

<style scoped>

.body-layout{
  display: flex;
}

.view-layout{
  width: 100%;
}

.component-view{
  padding: 0 30px;
  padding-top: 150px;
  padding-bottom: 30px;
}


.sidebar-layout{
  position: sticky;
  top: 60px;
  max-width: 100px;
  min-width: 60px;
  width: 100%;
  height: calc(100vh - 60px);
  transition: all 1s;
}

.sidebar-layout:first-of-type{
  display: flex;
  justify-content: center;
  place-items: center;
  /* border-right: 1px dotted var(--white); */
}

.sidebar-layout:last-of-type{
  /* border-left: 1px dotted var(--white); */
}

@media(max-width: 769px) {
  .sidebar-layout{
    display: none !important;
  }
}
</style>