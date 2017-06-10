import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

export default new Vuex.Store({
state:{
    show:false,
    title:'首页'
},
mutations:{
    showState(state){
        state.show=!state.show  
    },
    changeTitle(state,titleName){
        state.title=titleName;
    }
}





})

