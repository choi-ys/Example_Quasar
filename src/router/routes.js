
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/news',
    component: () => import('layouts/News')
  },
  {
    path: '/ask',
    component: () => import('layouts/Ask.vue')
  },
  {
    path: '/jobs',
    component: () => import('layouts/Jobs')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
