<template>
  <div>
    <tool-bar></tool-bar>

    <section>
      <template>
        <div class="q-pa-md">
          <q-table
            :data="askInfo"
            :columns="columns"
            row-key="name"
            :pagination="initialPagination"
          >
            <template v-slot:body-cell-title="props">
              <q-td :props="props">
                <div class="text-subtitle1">
                  <a :href="`item/${props.row.id}`">{{ props.value }}</a>
                </div>
              </q-td>
            </template>
            <template v-slot:body-cell-comments-count="props">
              <q-td :props="props">
                <div>
                  {{ props.value }}
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
                <div class="time-ago">
                  {{ props.value }}
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
import { fetchAsksList } from '../api/index';

export default {
  name: "Ask",
  data() {
    return {
      askInfo: [],
      filter: '',
      initialPagination: {
        sortBy: 'desc',
        descending: false,
        rowsPerPage: 15
      },
      columns: [
        {
          name: 'title',
          required: true,
          label: 'title',
          align: 'left',
          field: row => row.title,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'comments-count',
          required: true,
          label: 'comments count',
          align: 'left',
          field: row => row.comments_count,
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
  created() {
    fetchAsksList()
      .then((response =>{
        this.askInfo = response.data
      }))
      .catch((error =>{
        console.log(error);
      }))
  }
}</script>

<style scoped>

</style>
