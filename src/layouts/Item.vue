<template>
  <div>
    <tool-bar></tool-bar>
    <div class="q-pa-md">
      <section class="q-pa-md">
          <div :id="`${itemInfo.id}`" class="text-h4">{{ itemInfo.title }}</div>
      </section>
      <section >
        <div>
          <p v-html="`${itemInfo.content}`" class="text-body1"></p>
        </div>
      </section>
      <section>
        <div>
          <template>
            <div class="q-pa-md q-gutter-md">
              <q-list bordered class="rounded-borders full-width" separator>
                <q-item-label header>comments</q-item-label>

                <q-item v-for="item in itemInfo.comments" clickable v-ripple>
                  <q-item-section top avatar>
                    <q-avatar>
                      <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                    </q-avatar>
                  </q-item-section>

                  <q-item-section>
                    <q-item-label caption lines="2">
                      <span class="text-weight-bold">{{ item.user }}</span>
                    </q-item-label>
                    <q-item-label>
                      <p v-html="`${item.content}`" class="text-body2"></p>
                    </q-item-label>
                  </q-item-section>

                  <q-item-section side top>
                    {{ item.time_ago }}
                  </q-item-section>

                </q-item>
              </q-list>
            </div>
          </template>
        </div>
      </section>
      <section>
        <template>
          <div>
            <q-btn class="bg-primary full-width" to="/ask">List</q-btn>
          </div>
        </template>
      </section>
    </div>
  </div>
</template>

<script>
import ToolBar from "components/ToolBar";
import { fetchAskItem } from "../api/index"

export default {
  name: "Item",
  components: {ToolBar},
  data(){
    return{
      itemInfo: {},
    }
  },
  created() {
    const itemNo = this.$route.params.id;
    fetchAskItem(itemNo)
      .then((response=>{
        this.itemInfo = response.data
      }))
      .then((error=>{
        console.log(error);
      }))
  }
}
</script>

<style scoped>

</style>
