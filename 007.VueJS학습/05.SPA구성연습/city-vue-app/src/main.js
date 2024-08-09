// 맨처음 읽게되는 JS파일
import Vue from 'vue'
// 구성 Root VUE 파일 
import App from './App'
// 뷰JS 라우터 불러오기 
import router from './Router'
// 뷰엑스 스토어 JS 불러오기 
import store from './store'

// 팁 메세지 안나오게 하는 코드 (몰라도댐)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store, // 스토어 사용등록 !
  router, //라우터 사용등록 !
  components: { App },
  template: '<App/>',
  // 뷰 인스턴스 생성직후 호출 코드구역 
  created(){
    // 데이터 초기화 메서드 호출!
    store.commit('initSet'); //첫이미지호출   
  },
})
