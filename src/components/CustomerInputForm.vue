<template>
	<div>
		<form @submit="submit($event)">
			<div class="field">
				<label class="label">{{ editAddText }} First Name</label>
				<div class="control">
					<input
						class="input"
						v-model="customer.name"
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
						<input type="checkbox" v-model="customer.food" :value="product" />
						{{ product }}
					</div>
				</div>
			</div>

			<div class="field-body">
				<div class="field is-narrow">
					<label class="label">Select food</label>
					<div class="control" v-for="type in data.types" :key="type">
						<input type="radio" v-model="customer.type" :value="type" />
						{{ type }}
					</div>
				</div>
			</div>

			<div class="field">
				<label class="label">{{ editAddText }} Price Range</label>
				<div class="control" v-for="price in data.prices" :key="price">
					<input type="radio" v-model="customer.priceRange" :value="price" />{{
						price
					}}
				</div>
			</div>

			<div class="field">
				<label class="label">Image URL</label>
				<div class="control">
					<input
						class="input"
						v-model="customer.img"
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
						v-model="customer.desc"
						type="text"
						placeholder="Description"
						required
					/>
				</div>
			</div>

			<div class="field is-grouped" style="margin-top:20px">
				<div class="control">
					<button class="button is-link">{{ editAddText }} Customer</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: "CustomerInputForm",
	props: ["editId"],
	data() {
		return {
			customer: {
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
				let current = this.$store.state.customers.restaurants.filter((i) => {
					if (i.id == val) return true;
					else false;
				})[0];

				this.customer.name = current.name;
				this.customer.type = current.type;
				this.customer.priceRange = current.priceRange;
				this.customer.food = current.food;
				this.customer.img = current.img;
				this.customer.desc = current.desc;
			} else {
				this.resetFormData();
			}
		},
	},
	computed: {
		data() {
			return this.$store.state.customers;
		},
		editAddText() {
			return this.editId ? "Edit" : "Insert";
		},
	},
	methods: {
		resetFormData() {
			this.customer = {
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
			var payload = this.customer;

			if (!this.editId) {
				payload["id"] =
					this.$store.state.customers.restaurants.length != 0
						? Math.max(
								...this.$store.state.customers.restaurants.map((i) => i.id)
						  ) + 1
						: 0;
				const customer = { ...payload };
				this.$store.dispatch("addCustomer", customer);
				this.$swal(
					"Created Succesfully!",
					"Record has been created",
					"success"
				);

				this.resetFormData();
			} else {
				payload["id"] = this.editId;
				const customer = { ...payload };
				this.$store.dispatch("editCustomer", customer);
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
