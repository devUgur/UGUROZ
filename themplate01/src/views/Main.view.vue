<template>
  <div id="MainView">
    <IntroView></IntroView>
    <AboutView></AboutView>
    <WorkView></WorkView>
    <ContactView></ContactView>
  </div>
</template>

<script>
import IntroView from "@/views/main/Intro.view";
import AboutView from "@/views/main/About.view";
import WorkView from "@/views/main/Work.view";
import ContactView from "@/views/main/Contact.view";

export default {
  name: "MainView",
  components: {
    IntroView,
    AboutView,
    WorkView,
    ContactView
  }
}
</script>

<style scoped>
#MainView > div:not(:first-child){
  padding: 30px;
}
</style>