<template>
  <div id="main-layout">
    <topnav-component></topnav-component>
    <div class="body-layout">
      <div class="sidebar-layout">
        <VerticalEmailComponent></VerticalEmailComponent>
      </div>
      <div class="view-layout">
        <IntroView></IntroView>
        <AboutView></AboutView>
      </div>
      <div class="sidebar-layout"></div>
    </div>
  </div>
</template>

<script>
import TopnavComponent from '@/components/navigation/topnav.component';

import IntroView from '@/views/main/Intro.view';
import AboutView from '@/views/main/About.view';

import VerticalEmailComponent from '@/components/sidebars/VerticalEmail.component';

export default {
  components: {
    TopnavComponent,
    IntroView,
    AboutView,

    VerticalEmailComponent
  }
}
</script>

<style scoped>
.body-layout{
  display: flex;
  min-height: 200vh;
}

.view-layout{
  width: 100%;
}

.view-layout > div:not(:first-child){
  padding: 0 20px;
}

.sidebar-layout{
  position: sticky;
  top: 60px;
  max-width: 100px;
  min-width: 60px;
  width: 100%;
  height: calc(100vh - 60px);
}

.sidebar-layout:first-of-type{
  display: flex;
  justify-content: center;
  place-items: center;
  border-right: 1px dotted var(--white);
}

.sidebar-layout:last-of-type{
  border-left: 1px dotted var(--white);
}

@media(max-width: 769px) {
  .sidebar-layout{
    display: none;
  }
}
</style>