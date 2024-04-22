// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import QualificationForm from './components/QualificationForm.vue';
import ContactForm from './components/ContactForm.vue';
import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/qualify', component: QualificationForm },
  { path: '/contact', component: ContactForm },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
