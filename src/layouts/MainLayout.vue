<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App Example Project
        </q-toolbar-title>

        <div>Quasar version : {{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'News',
    caption: 'today\'s news !',
    icon: 'article',
    link: '/news'
  },
  {
    title: 'Ask',
    caption: 'get solution !',
    icon: 'help',
    link: '/ask'
  },
  {
    title: 'Jobs',
    caption: 'get new job !',
    icon: 'work',
    link: '/jobs'
  },
  {
    title: 'profile',
    caption: 'get new job !',
    icon: 'person',
    link: '/profile'
  },
  {
    title: 'Github',
    caption: 'github.com/choi-ys',
    icon: 'code',
    link: 'https://github.com/choi-ys'
  },
  {
    title: 'Quasar Guide',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://quasar.dev/start/pick-quasar-flavour'
  },
  {
    title: 'Quasar Icon',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://fonts.google.com/icons?selected=Material+Icons'
  }
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
