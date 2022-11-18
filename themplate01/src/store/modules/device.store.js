// State
const state = {
    mode: null,
    name: null
}

// Getters
const getters = {
    mode: state => {
        return state.mode;
    }
}

// Actions
const actions = {
    init({commit}){

        let deviceName = navigator.userAgent;

        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){

            commit('SET_DEVICE_MODE', 'mobile');

            if(deviceName.includes('Android')){
                commit('SET_DEVICE_NAME', 'Android');
            }
            if(deviceName.includes('webOS')){
                commit('SET_DEVICE_NAME', 'webOS');
            }
            if(deviceName.includes('iPhone')){
                commit('SET_DEVICE_NAME', 'iPhone');
            }
            if(deviceName.includes('iPad')){
                commit('SET_DEVICE_NAME', 'iPad');
            }
            if(deviceName.includes('iPod')){
                commit('SET_DEVICE_NAME', 'iPod');
            }
            if(deviceName.includes('BlackBerry')){
                commit('SET_DEVICE_NAME', 'BlackBerry');
            }
            if(deviceName.includes('IEMobile')){
                commit('SET_DEVICE_NAME', 'IEMobile');
            }
            if(deviceName.includes('Opera Mini')){
                commit('SET_DEVICE_NAME', 'Opera Mini');
            }
        }else{

            commit('SET_DEVICE_MODE', 'desktop');

            if(deviceName.includes('Macintosh')){
                commit('SET_DEVICE_NAME', 'Macintosh');
            }
            if(deviceName.includes('Windows')){
                commit('SET_DEVICE_NAME', 'Windows');
            }
            if(deviceName.includes('Linux')){
                commit('SET_DEVICE_NAME', 'Linux');
            }
        }
        //console.log(navigator.userAgent);
        //console.log(state.mode);
        //console.log(state.name);
    }
}
// Mutations
const mutations = {
    SET_DEVICE_MODE(state, mode){
        state.mode = mode;
    },

    SET_DEVICE_NAME(state, name){
        state.name = name;
    },

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}