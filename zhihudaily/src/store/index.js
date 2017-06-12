import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nightStyle:false,
    popupVisible:false,
    title:'首页',
    detailId:0,
    extraInfo:{},
    long_comments:[],
    short_comments:[]
  },
  mutations: {
    changePopupVisible(state,ele){
    	state.popupVisible = !state.popupVisible
      if(ele){
        ele.style.transform = ''
      }
    },
    changeNightStyle(state){
    	state.nightStyle = !state.nightStyle
    },
    changeTitle(state,newTitle){
      state.title = newTitle
    },
    getExtraInfo(state,obj){
      state.extraInfo = obj
    },
    getLongComments(state,arr){
      state.long_comments = arr
    },
    getShortComments(state,arr){
      state.short_comments = arr
    },
    getDetailId(state,id){
      state.detailId = id
    }    
  }
})