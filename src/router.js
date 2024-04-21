// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import QualificationForm from './components/QualificationForm.vue';
import ContactForm from './components/ContactForm.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/qualify', component: QualificationForm },
  { path: '/contact', component: ContactForm }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
