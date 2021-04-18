export default {
  SET_NEWS(state, data){
    state.newsList = data;
  },
  SET_ASK(state, data){
    state.askList = data;
  },
  SET_JOB(state, data){
    state.jobsList = data;
  },
  SET_ITEM(state, data){
    state.itemInfo= data;
  }
}
