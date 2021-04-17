import Vue from 'vue'
import Vuex from 'vuex'
import { fetchAsksList } from '../api/index.js'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    /**
     * mutations에 의해 commit된 API 응답 데이터의 저장소
     *  - actions를 이용해 호출된 API의 응답값이 mutations을 통해 satate에 저장
     */
    state:{
      askList: []
    },
    /**
     * axios를 이용해 정의된 API 통신 모듈 호출 부
     */
    actions:{
      FETCH_ASK(context){
        /**
         * javascript의 Arrow Fucntion을 이용하여
         * axios의 this가 아닌 vue component의 매개변수에 접근
         * 문법 : () => {}
         */
        fetchAsksList()
          .then((response =>{
            /**
             * actions계층에서 제공하는 context를 이용하여 mutations에 정의된 함수 호출
             * context(mutations함수명, 전달 Data)
             */
            context.commit('SET_ASK', response.data)
          }))
          .catch((error =>{
            console.log(error);
          }))
      }
    },
    /**
     * actions 계층의 API 응답 데이터를 state에 저장
     */
    mutations:{
      SET_ASK(state, data){
        state.askList = data;
      }
    },
    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
