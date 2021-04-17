<template>
  <div>
    <h1>ask View</h1>
    <div v-for="ask in askInfo">{{ ask.title }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    /**
     * Computed 시점에 store의 state에 저장된 API 응답 data 접근
     * @returns {[]}
     */
    askInfo(){
      return this.$store.state.askList;
    }
  },
  created() {
    /**
     * store에서 제공하는 dispatch를 이용하여 actions 계층에 적용된 API 통신 모듈 호출
     */
    this.$store.dispatch('FETCH_ASK');
    console.log(this.$route);
  }
}</script>

<style scoped>

</style>
