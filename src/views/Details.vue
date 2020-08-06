<template>
	<div>
		<h4 class="title has-text-centered">
			{{ current.name }}
		</h4>
		<br />

		<div class="container">
			<div class="columns">
				<div class="column">
					<div class="card is-fullimage">
						<div class="card-image">
							<figure class="image is-4by3">
								<img v-bind:src="current.img" alt="img 404" />
							</figure>
						</div>
					</div>
				</div>
				<div class="column">
					<div class="card is-horizontal">
						<div class="card-image"></div>
						<div class="card-stacked">
							<div class="card-content">
								<div class="media-content">
									<p class="title is-4">{{ current.desc }}</p>
									<br />
									<h4><b>ON MENU</b></h4>
									<hr style="solid 1px" />

									<ul class="list-group">
										<li
											class="list-group-item list-group-item-action list-group-item-dark"
											v-for="food in current.food"
											:key="food"
										>
											{{ food.toUpperCase() }}
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<br />
					<a @click="navigate" class="button is-link" href="#" role="button"
						>Go To HomePage</a
					>
					&nbsp;&nbsp;&nbsp;
					<a class="button is-danger" href="#" role="button">Order</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	computed: {
		current() {
			return this.$store.state.restaurant.restaurants.find(
				(element) => element.id == this.$route.params.id
			);
		},
	},
	methods: {
		navigate() {
			this.$store.dispatch("reset");
			this.$router.push("/");
		},
	},
};
</script>

style
<style scoped>
img {
	height: 25em;
}
</style>
