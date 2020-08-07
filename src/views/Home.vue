<template>
	<div>
		<h1 class="title has-text-centered">
			Home Page
		</h1>

		<br />

		<div class="columns is-multiline is-mobile" style="padding-top:30px">
			<div class="column is-one-quarter">
				<div class="field">
					<label class="label">Search Restaurants</label>
					<div class="control">
						<input
							v-model="search"
							style="width:500px"
							class="input"
							type="text"
						/>
					</div>
				</div>
			</div>
			<div class="column is-one-quarter">
				<label class="label">Select Type</label>
				<div class="select">
					<select
						v-model="searchType"
						class="form-control"
						style="width:300px"
						name="type"
					>
						<option value="">Select...</option>
						<option
							:value="type"
							v-for="type in properties.types"
							:key="type"
							>{{ type }}</option
						>
					</select>
				</div>
			</div>
			<div class="column is-one-quarter">
				<label class="label">Select PriceRange</label>
				<div class="select">
					<select
						v-model="searchPriceRange"
						class="form-control"
						style="width:300px"
						name="type"
					>
						<option value="">Select...</option>
						<option
							:value="price_range"
							v-for="price_range in properties.prices"
							:key="price_range"
							>{{ price_range }}</option
						>
					</select>
				</div>
			</div>
			<div class="column is-one-quarter">
				<label class="label">Select Food</label>
				<div class="select">
					<select
						v-model="searchFood"
						class="form-control"
						style="width:300px"
						name="type"
					>
						<option value="">Select...</option>
						<option
							:value="foo"
							v-for="foo in properties.products"
							:key="foo"
							>{{ foo }}</option
						>
					</select>
				</div>
			</div>
		</div>
		<div class="has-text-centered">
			<button @click="resetFilter" class="button is-danger">
				Reset Filters
			</button>
		</div>
		<br />
		<div class="columns is-multiline is-mobile" style="padding-top:30px">
			<template v-for="res in restaurants">
				<div class="column is-one-quarter" :key="res.id">
					<div class="card-image">
						<figure class="image is-4by3">
							<img
								style="height:250px; width:250px; padding:10px; border: 1px solid gray"
								v-bind:src="res.img"
								alt="img 404"
							/>
						</figure>
					</div>
					<div class="card-content">
						<div class="media">
							<div class="media-content">
								<p class="title is-4">{{ res.name }}</p>
								<p class="subtitle is-6">{{ res.desc }}</p>
								<router-link
									tag="button"
									:to="'/details/' + res.id"
									class="button is-info"
									>Check menu</router-link
								>
							</div>
						</div>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			search: "",
			searchType: "",
			searchPriceRange: "",
			searchFood: "",
		};
	},
	computed: {
		restaurants: function() {
			return this.$store.state.restaurant.restaurants.filter((res) => {
				if (this.searchFood !== "") {
					return (
						res.name.toLowerCase().match(this.search.toLowerCase()) &&
						res.type.toLowerCase().match(this.searchType.toLowerCase()) &&
						res.priceRange.match(this.searchPriceRange) &&
						res.food.find((foo) => foo == this.searchFood)
					);
				} else {
					return (
						res.name.toLowerCase().match(this.search.toLowerCase()) &&
						res.type.toLowerCase().match(this.searchType.toLowerCase()) &&
						res.priceRange.match(this.searchPriceRange)
					);
				}
			});
		},

		properties: function() {
			return this.$store.state.restaurant;
		},
	},
	methods: {
		resetFilter() {
			this.search = "";
			this.searchFood = "";
			this.searchPriceRange = "";
			this.searchType = "";
		},
	},
};
</script>

<style></style>
