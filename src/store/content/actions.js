import {fetchAskItem, fetchAsksList, fetchJobsList, fetchNewsList} from "src/api";

export default {
    // FETCH_NEWS(context){
    //   fetchNewsList()
    //     .then((response =>{
    //       context.commit('SET_NEWS',response.data)
    //     }))
    //     .catch((error =>{
    //       console.log(error);
    //     }))
    // },
    // FETCH_ASK(context){
    //   /**
    //    * javascript의 Arrow Fucntion을 이용하여
    //    * axios의 this가 아닌 vue component의 매개변수에 접근
    //    * 문법 : () => {}
    //    */
    //   fetchAsksList()
    //     .then((response =>{
    //       /**
    //        * actions계층에서 제공하는 context를 이용하여 mutations에 정의된 함수 호출
    //        * context(mutations함수명, 전달 Data)
    //        */
    //       context.commit('SET_ASK', response.data)
    //     }))
    //     .catch((error =>{
    //       console.log(error);
    //     }))
    // },
    // FETCH_JOBS(context){
    //   fetchJobsList()
    //     .then((response =>{
    //       context.commit('SET_JOB', response.data)
    //     }))
    //     .catch((error =>{
    //       console.log(error);
    //     }))
    // },
    // FETCH_ITEMS(context, itemId){
    //   fetchAskItem(itemId)
    //     .then((response =>{
    //       context.commit('SET_ITEM' ,response.data)
    //     }))
    //     .catch()
    // }
}
