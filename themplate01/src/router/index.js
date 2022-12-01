import { createRouter, createWebHistory } from 'vue-router'
// import store from '../store/index';

import mainLayout from '@/layouts/Main.layout';

// child routes
import AboutView from "@/views/main/About.view";
import WorkView from "@/views/main/Work.view";
import ContactView from "@/views/main/Contact.view";
import BlogView from "@/views/Blog.view";

const routes = [
  {
    path: '/',
    name: 'Main',
    component: mainLayout,
    children: [
      { path: '/about', component: AboutView },
      { path: '/work', component: WorkView },
      { path: '/contact', component: ContactView },
      { path: '/blog', component: BlogView }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  window.scrollTo({ top: 0, behavior: 'auto' });
  next();
})

export default router
