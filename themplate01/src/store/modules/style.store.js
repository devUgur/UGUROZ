// State
const state = {
    transitionName: null, // fade-in
    deviceMode: null, // mobile, desktop
    backgroundColor: null, // #hex, rgb()
    windowWidth: null, // 1028
    windowHeight: null, // 900
    scrollValue: null, // 0
    currentTarget: null, // null
    animationMode: null, // true, false
    brightnessMode: null, // dark, light
}

// Getter functions
const getters = {
    transitionName: state => {
        return state.transitionName;
    },
    deviceMode: state => {
        return state.deviceMode;
    },
    backgroundColor: state => {
        return state.backgroundColor;
    },
    windowHeight: state => {
        return state.windowHeight;
    },
    windowWidth: state => {
        return state.windowWidth;
    },
    scrollValue: state => {
        return state.scrollValue;
    },
    currentTarget: state => {
        return state.currentTarget;
    },
    animationMode: state => {
        return state.animationMode;
    },
    brightnessMode: state => {
        return state.brightnessMode;
    }
}

// Actions
const actions = {

}
// Mutations
const mutations = {
    SET_TRANSITION_NAME(state, name){
        state.transitionName = name;
    },
    SET_DEVICE_MODE(state, mode){
        state.deviceMode = mode;
    },
    SET_BACKGROUND_COLOR(state, color){
        state.backgroundColor = color;
    },
    SET_WINDOW_HEIGHT(state, height){
        state.windowHeight = height;
    },
    SET_WINDOW_WIDTH(state, width){
        state.windowWidth = width;
    },
    SET_SCROLL_VALUE(state, value){
        state.scrollValue = value;
    },
    SET_CURRENT_TARGET(state, target){
        state.currentTarget = target;
    },
    SET_ANIMATION_MODE(state, mode){
        state.animationMode = mode;
    },
    SET_BRIGHTNESS_MODE(state, mode){
        state.brightnessMode = mode;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}