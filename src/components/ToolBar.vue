<template>
  <div class="q-pa-md">
    <q-toolbar class="bg-primary text-white rounded-borders">
      <q-btn flat label="Homepage" />
      <q-space />

      <q-tabs shrink>
        <q-route-tab to="/news">news</q-route-tab>
        <q-route-tab to="/ask">ask</q-route-tab>
        <q-route-tab to="/jobs">jobs</q-route-tab>
      </q-tabs>
    </q-toolbar>
  </div>
</template>

<script>

export default {
  name: "ToolBar",
}
</script>

<style scoped>

</style>
