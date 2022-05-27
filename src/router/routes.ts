import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/login', component: () => import('pages/AppPages/Login.vue') },

      {
        path: '/info',
        component: () => import('pages/AppPages/Info.vue'),
      },
      {
        path: '/repos',
        component: () => import('pages/AppPages/Repos.vue'),
      },
      {
        path: '/repo details',
        component: () => import('pages/AppPages/RepoDetails.vue'),
      },
       {
                    path: '/repo gists',
                    component: () => import('pages/AppPages/RepoGists.vue'),
                  },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
