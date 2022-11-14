import { createStore } from 'vuex'

// Import Store Modules
import styleStore from "@/store/modules/style.store";

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    style: styleStore,
  }
})
