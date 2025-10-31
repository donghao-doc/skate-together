import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Posts from '../components/Posts.vue';
import Events from '../components/Events.vue';
import Login from '../components/Login.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/posts', name: 'Posts', component: Posts },
  { path: '/events', name: 'Events', component: Events },
  { path: '/login', name: 'Login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
