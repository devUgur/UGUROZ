<template>
  <div id="work-item-component"
       class="container"
       @mousemove="mouseOver($event)"
       @mouseleave="mouseLeave($event)"
  >
    <div class="work-item" ref="workItem">
      <div class="body">
        <img class="image" :src="getImg(work.img)" alt="">
        <div class="year dark-blur">{{ work.year }}</div>
        <div class="title dark-blur">{{ work.title }}</div>

        <!-- {{ this.client_x }} | {{ this.client_y }} -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkItemComponent",
  props: ['work'],
  data(){
    return {
      constrain: 40,
      client_x: 0,
      client_y: 0
    }
  },
  methods: {
    mouseOver(e){
      let element = this.$refs.workItem;
      element.style.filter = "none;";
      element.style.transition = "all .1s";
      const constrain = this.constrain;

      let img = element.firstElementChild.firstElementChild;
      img.classList.remove('no-focus');
      img.classList.add('focus');

      let this_ = this;

      function transformElement(x, y, elm) {

        let box = elm.getBoundingClientRect();
        let calcX = -(y - box.y - (box.height / 2)) / constrain;
        let calcY = (x - box.x - (box.width / 2)) / constrain;

        this_.client_x = calcX;
        this_.client_y = calcY;
        //console.log(calcX, calcY)

        elm.style.transform  = "rotateX("+ calcX +"deg) "
            + "rotateY("+ calcY +"deg)";
      }

      window.requestAnimationFrame(function(){
        transformElement(e.clientX, e.clientY, element);
      });

      //this.$refs.workItem.style.background = "red";
    },
    mouseLeave(){
      //this.$refs.workItem.style.background = "lawngreen";
      let element = this.$refs.workItem;
      element.style.transition = "1s";

      // focus add and remove for grayscale
      let img = element.firstElementChild.firstElementChild;
      img.classList.remove('focus');
      img.classList.add('no-focus');

      element.style.transform = "rotateX(0) rotateY(0)";

    },
    getImg(filename){
      return require('@/assets/'+ filename)
    }
  }
}
</script>

<style scoped>
.container{
  height: 600px;
  width: 100%;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  transform-style: preserve-3d;
  perspective: 600px;
}

.work-item{
  position: relative;
  height: 360px;
  max-width: 700px;
  width: calc(100% - 40px);

  border-radius: 3px;
  padding: 50px 20px;

  transform-style: preserve-3d;
  transition: all .1s;
}

.work-item .body{
  width: 100%;
  height: 100%;
  box-shadow: var(--box-shadow-2);
  /* background-image: url("../../assets/barbier-website.png"); */
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;

}

.work .year,.title{
  position: absolute;
  padding: 10px 20px;
}

.title{
  right: 0;
  bottom: 80px;
}

.year{
  left: 0;
  top: 80px;

  font-weight: bold;
  font-size: 14px;
}

img{
  width: 100%;
  filter: grayscale(100%);
  transition: all var(--transition);
}

.focus{
  filter: none;
}
.no-focus{
  filter: grayscale(100%);
}

@media(max-width: 769px) {
  .container{
    max-height: 600px;
  }
}
</style>