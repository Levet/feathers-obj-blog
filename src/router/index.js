import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HelloWorld from "../components/HelloWorld";

const routes = [
  {name: "hello", component: HelloWorld, path: ""}
]

const router = new VueRouter({
  routes
})

export default router
