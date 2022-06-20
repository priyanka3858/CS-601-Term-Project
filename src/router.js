import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/components/Home.vue";
import Github from "/src/components/Github.vue";
import About from "/src/components/About.vue";
import Work from "/src/components/Work.vue";
import Travel from "/src/components/Travel.vue";
import Contact from "/src/components/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/github",
    name: "Github",
    component: Github,
  },
  {
    path: "/work",
    name: "Work",
    component: Work,
  },
  {
    path: "/travel",
    name: "Travel",
    component: Travel,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
