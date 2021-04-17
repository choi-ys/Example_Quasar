<template>
  <div>
    <h1>ask View</h1>
    <div v-for="ask in aksList">{{ ask.title }}</div>
  </div>
</template>

<script>
import {fetchAsksList} from '../api/index.js'

export default {
  name: "Ask",
  data(){
    return{
      aksList: [],
    }
  },
  created() {
    /**
     * javascript의 Arrow Fucntion을 이용하여
     * axios의 this가 아닌 vue component의 매개변수에 접근
     * 문법 : () => {}
     */
    fetchAsksList()
      .then((response) => {
        this.aksList = response.data;
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
</script>

<style scoped>

</style>
