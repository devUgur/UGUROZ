<template>
  <Particles id="tsparticles" :particlesInit="particlesInit" :options="ParticleNasaConfigs" />
</template>

<script>

import { loadFull } from "tsparticles";
import ParticleNasaConfig from './particlesjs-nasa-config.json'

export default {
  setup(){
    const particlesInit = async (engine) => {
      await loadFull(engine);
    };

    // expose to template and other options API hooks
    return {
      particlesInit
    }
  },
  computed: {
    ParticleNasaConfigs(){
      return ParticleNasaConfig;
    }
  },
}
</script>

<style scoped>
#tsparticles{
  height: 50vh !important;
  width: 100%;
}
</style>