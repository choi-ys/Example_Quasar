<template>
  <div>
    <tool-bar></tool-bar>
    <section>
      <h2>news view</h2>
    </section>
    <section>
      <div v-for="news in newsInfo">{{ news.title }}</div>
    </section>
  </div>
</template>

<script>
import ToolBar from "components/ToolBar";
export default {
  name: "News",
  components: {ToolBar},
  computed: {
    newsInfo(){
      return this.$store.state.newsList
    }
  },
  created() {
    this.$store.dispatch('FETCH_NEWS')
  }
}
</script>

<style scoped>

</style>
