// import all components from the components folder
import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/components/Home.vue";
import Github from "/src/components/Github.vue";
import About from "/src/components/About.vue";
import Work from "/src/components/Work.vue";
import Travel from "/src/components/Travel.vue";
import Contact from "/src/components/Contact.vue";
import Education from "/src/components/Education.vue";

// store all the routes in an array of objects with the following properties
// set path to the route and set component to the component to be rendered

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
  {
    path: "/education",
    name: "Education",
    component: Education,
  },
];

// create a new router instance with the history object and the routes array of objects as parameters to createRouter function
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
