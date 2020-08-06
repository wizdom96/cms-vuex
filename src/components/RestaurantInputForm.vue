<template>
	<div>
		<form @submit="submit($event)">
			<div class="field">
				<label class="label">{{ editAddText }} First Name</label>
				<div class="control">
					<input
						class="input"
						v-model="restaurant.name"
						type="text"
						placeholder="Name"
						required
					/>
				</div>
			</div>

			<div class="field">
				<label class="label">{{ editAddText }} Type</label>
				<select class="form-control" name="type">
					<option :value="type" v-for="type in data.types" :key="type">{{
						type
					}}</option>
				</select>
			</div>

			<div class="field-body">
				<div class="field is-narrow">
					<label class="label">Select food</label>
					<div class="control" v-for="product in data.products" :key="product">
						<input type="checkbox" v-model="restaurant.food" :value="product" />
						{{ product }}
					</div>
				</div>
			</div>

			<div class="field-body">
				<div class="field is-narrow">
					<label class="label">Select food</label>
					<div class="control" v-for="type in data.types" :key="type">
						<input type="radio" v-model="restaurant.type" :value="type" />
						{{ type }}
					</div>
				</div>
			</div>

			<div class="field">
				<label class="label">{{ editAddText }} Price Range</label>
				<div class="control" v-for="price in data.prices" :key="price">
					<input
						type="radio"
						v-model="restaurant.priceRange"
						:value="price"
					/>{{ price }}
				</div>
			</div>

			<div class="field">
				<label class="label">Image URL</label>
				<div class="control">
					<input
						class="input"
						v-model="restaurant.img"
						type="text"
						placeholder="Link for Image"
						required
					/>
				</div>
			</div>

			<div class="field">
				<label class="label">Description</label>
				<div class="control">
					<input
						class="input"
						v-model="restaurant.desc"
						type="text"
						placeholder="Description"
						required
					/>
				</div>
			</div>

			<div class="field is-grouped" style="margin-top:20px">
				<div class="control">
					<button class="button is-link">{{ editAddText }} restaurant</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: "RestaurantInputForm",
	props: ["editId"],
	data() {
		return {
			restaurant: {
				name: "",
				type: "",
				food: [],
				priceRange: "",
				desc: "",
				img: "",
			},
		};
	},
	watch: {
		editId(val) {
			if (val) {
				let current = this.$store.state.restaurant.restaurants.filter((i) => {
					if (i.id == val) return true;
					else false;
				})[0];

				this.restaurant.name = current.name;
				this.restaurant.type = current.type;
				this.restaurant.priceRange = current.priceRange;
				this.restaurant.food = current.food;
				this.restaurant.img = current.img;
				this.restaurant.desc = current.desc;
			} else {
				this.resetFormData();
			}
		},
	},
	computed: {
		data() {
			return this.$store.state.restaurant;
		},
		editAddText() {
			return this.editId ? "Edit" : "Insert";
		},
	},
	methods: {
		resetFormData() {
			this.restaurant = {
				name: "",
				type: "",
				food: [],
				priceRange: "",
				desc: "",
				img: "",
			};
		},
		submit(event) {
			event.preventDefault();
			var payload = this.restaurant;

			if (!this.editId) {
				payload["id"] =
					this.$store.state.restaurant.restaurants.length != 0
						? Math.max(
								...this.$store.state.restaurant.restaurants.map((i) => i.id)
						  ) + 1
						: 0;
				const restaurant = { ...payload };
				this.$store.dispatch("addRestaurant", restaurant);
				this.$swal(
					"Created Succesfully!",
					"Record has been created",
					"success"
				);

				this.resetFormData();
			} else {
				payload["id"] = this.editId;
				const restaurant = { ...payload };
				this.$store.dispatch("editRestaurant", restaurant);
				this.$swal(
					"Updated Succesfully!",
					"Record has been updated",
					"success"
				);
			}
		},
	},
};
</script>
