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
       {
         path: '/repo commits',
         component: () => import('pages/AppPages/RepoCommits.vue'),
      },
       {
         path: '/repo user details',
         component: () => import('pages/AppPages/RepoUserInfo.vue'),
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
