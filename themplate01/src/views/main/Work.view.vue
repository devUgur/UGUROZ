<template>
  <div id="workView">
    <h3> My work´s </h3>

    <div class="works-list">
      <div v-for="work in works" :key="work.id" class="work container">
        <work-item-component :work="work"></work-item-component>
      </div>
    </div>
  </div>
</template>

<script>
import WorkItemComponent from "@/components/work/WorkItem.component";
export default {
  name: "WorkView",
  components: { WorkItemComponent },
  data(){
    return {
      works: [
        {
          year: '10/10/2020',
          title: 'Corona test booking website',
          img: 'corona-booking-website.png'
        },
        {
          year: 2021,
          title: 'Football live data webscrapping',
          img: 'corona-booking-website.png' },
        {
          year: 2022,
          title: 'La Barberia - a barber website',
          img: 'barbier-website.png' },

      ]
    }
  },
}
</script>

<style scoped>
#workView{
  min-height: 100vh;
  border-top: 1px dotted white;
}

.works-list{
  overflow-x: auto;
  overflow-y: hidden;
}
</style>