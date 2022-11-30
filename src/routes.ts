import { createRouter, createWebHistory } from 'vue-router';
import ListView from './views/ListView.vue';

const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'persons',
      component: ListView,
    },
  ],
});

export default routes;
