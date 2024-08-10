import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import About from "../views/About.vue";
import Intro from "../views/Intro.vue";
import ShowPosts from "../views/posts/show.vue";
import CreatePost from "../views/posts/Create.vue";
import Tag from "../views/posts/Tag.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/intro",
    name: "Intro",
    component: Intro,
  },
  {
    path: "/posts/create",
    name: "CreatePost",
    component: CreatePost,
  },
  {
    path: "/posts/:id",
    name: "ShowPost",
    component: ShowPosts,
    props: true,
  },
  {
    path: "/tag/:tag",
    name: "Tag",
    component: Tag,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
