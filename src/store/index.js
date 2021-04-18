import Vue from 'vue'
import Vuex from 'vuex'
import contentActions from './content/actions.js'
import contentMutations from './content/mutations.js'
import contentState from './content/state.js'

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
     * axios를 이용해 정의된 API 통신 모듈 호출 부
     */
    actions: contentActions,
    /**
     * actions 계층의 API 응답 데이터를 state에 저장
     */
    mutations: contentMutations,
    /**
     * mutations에 의해 commit된 API 응답 데이터의 저장소
     *  - actions를 이용해 호출된 API의 응답값이 mutations을 통해 satate에 저장
     */
    state: contentState,
    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
