<template>
  <div>
    <tool-bar></tool-bar>

    <section>
      <template>
        <div class="q-pa-md">
          <q-table
            :data="newsInfo"
            :columns="columns"
            row-key="name"
            :pagination="initialPagination"
            >
            <template v-slot:body-cell-title="props">
              <q-td :props="props">
                <div>
                  <div class="text-subtitle1">
                    <a :href="props.row.url" target="_blank">{{ props.value }}</a></div>
                </div>
              </q-td>
            </template>
            <template v-slot:body-cell-domain="props">
              <q-td :props="props">
                <div>
                  <div>
                    <a href="https://www.naver.com" target="_blank">{{ props.value }}</a></div>
                </div>
              </q-td>
            </template>
            <template v-slot:body-cell-user="props">
              <q-td :props="props">
                <div>
                  <router-link :to="`/user/${props.row.user}`">{{ props.value }}</router-link>
                </div>
              </q-td>
            </template>
            <template v-slot:body-cell-time-ago="props">
              <q-td :props="props">
                <div>
                  <p class="time-ago">{{ props.value }}</p>
                </div>
              </q-td>
            </template>
          </q-table>
        </div>
      </template>
    </section>

  </div>
</template>

<script>
import ToolBar from "components/ToolBar";

export default {
  name: "News",
  data() {
    return {
      filter: '',
      initialPagination: {
        sortBy: 'desc',
        descending: false,
        rowsPerPage: 15
        // rowsNumber: xx if getting data from a server
      },
      columns: [
        {
          name: 'title',
          required: true,
          label: 'Headline',
          align: 'left',
          field: row => row.title,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'domain',
          required: true,
          label: 'source to',
          align: 'left',
          field: row => row.domain,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'user',
          required: true,
          label: 'author',
          align: 'left',
          field: row => row.user,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'time-ago',
          required: true,
          label: 'time ago',
          align: 'left',
          field: row => row.time_ago,
          format: val => `${val}`,
          sortable: true
        },
      ],
    }
  },
  components: {ToolBar},
  computed: {
    newsInfo(){
      return this.$store.state.newsList
    }
  },
  created() {
    this.$store.dispatch('FETCH_NEWS')
  },
  methods:{
    rowClick(evt, row, index){
      window.open(this.newsInfo[index].url)
    }
  }
}
</script>

<style scoped>

</style>
