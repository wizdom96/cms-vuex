import Vue from "vue";
import Vuex from "vuex";
import restaurant from "./models/restaurant";

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		restaurant: restaurant,
	},
	mutations: {
		remove_restaurant(state, index) {
			if (index > -1) {
				state.restaurant.restaurants.splice(index, 1);
			}
		},
		add_restaurant(state, payload) {
			state.restaurant.restaurants.push(payload);
		},
		edit_restaurant(state, payload) {
			state.restaurant.restaurants = state.restaurant.restaurants.map((i) => {
				if (i.id == payload.id) {
					return payload;
				}
				return i;
			});
		},
	},
	actions: {
		removeRestaurant({ state, commit }, id) {
			try {
				var index = state.restaurant.restaurants
					.map((i) => {
						if (id == i.id) return true;
						return false;
					})
					.indexOf(true);

				if (index != -1) {
					commit("remove_restaurant", index);
					return true;
				} else {
					return false;
				}
			} catch (error) {
				return false;
			}
		},
		addRestaurant({ commit }, payload) {
			commit("add_restaurant", payload);
		},
		editRestaurant({ commit }, payload) {
			commit("edit_restaurant", {
				id: payload.id,
				name: payload.name,
				type: payload.type,
				food: payload.food,
				priceRange: payload.priceRange,
				img: payload.img,
				desc: payload.desc,
			});
		},
	},
});

export default store;
