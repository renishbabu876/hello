import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Form from '../views/Form.vue';
import Label from '../views/Label.vue';
import Dashboard from '../views/Dashboard.vue';


Vue.use(VueRouter);

const routes = [

  {
    path: '/',
    name: 'Form',
    component: Form,
  },
  {
    path: '/label',
    name: 'Label',
    component: Label,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
