<template>
  <div>
    <tool-bar></tool-bar>
    <section>
      <h2>jobs view</h2>
    </section>
    <section>
      <div v-for="jobs in jobsInfo">{{ jobs.title }}</div>
    </section>
  </div>
</template>

<script>
import ToolBar from "components/ToolBar";
export default {
  name: "Jobs",
  components: {ToolBar},
  computed:{
    jobsInfo(){
      return this.$store.state.jobsList
    }
  },
  created() {
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>

<style scoped>

</style>
