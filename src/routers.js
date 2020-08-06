import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import Restaurant from "./views/Restaurant.vue";
import Details from "./views/Details.vue";

Vue.use(VueRouter);

const router = new VueRouter({
	mode: "history",
	routes: [
		{ path: "/", name: "home", component: Home },
		{ path: "/restaurant", name: "restaurant", component: Restaurant },
		{ path: "/details/:id", component: Details },
	],
});

export default router;
