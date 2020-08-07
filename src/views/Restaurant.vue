<template>
	<div>
		<h1 class="title has-text-centered">
			Edit Restaurants
		</h1>
		<br />

		<div class="columns" style="padding-top:30px">
			<div class="column is-three-fifths">
				<table v-if="data.length != 0" class="table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Type</th>
							<th>Food</th>
							<th>Price Range</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr
							v-for="(res, index_row) in data.restaurants"
							:key="index_row"
							v-bind:class="{ editing: editId === res.id }"
						>
							<td>{{ res.name }}</td>
							<td>{{ res.type }}</td>
							<td>
								<template v-for="foo in res.food">{{ foo }}<br /> </template>
							</td>
							<td>{{ res.priceRange }}</td>

							<td>{{ res.desc }}</td>
							<td>
								<p class="buttons">
									<a
										class="button is-small is-primary"
										@click="editRestaurant(res.id)"
										>Edit</a
									>
									<a
										class="button is-small is-danger"
										@click="deleteRestaurant(res.id)"
										>Delete</a
									>
								</p>
							</td>
						</tr>
					</tbody>
				</table>
				<div v-else class="notification is-danger">
					Warning !
					<strong>No Data to Show</strong>
				</div>
			</div>
			<div class="column">
				<a
					href="#"
					v-show="showAdd == false"
					@click="addRestaurant()"
					class="button is-small is-danger"
					style="float:right;margin-top:-20px"
					>X</a
				>
				<RestaurantInputForm :editId="editId"></RestaurantInputForm>
			</div>
		</div>
	</div>
</template>

<script>
import RestaurantInputForm from "../components/RestaurantInputForm.vue";

export default {
	name: "Restaurant",
	components: {
		RestaurantInputForm,
	},
	data() {
		return {
			showAdd: true,
			editId: "",
		};
	},
	computed: {
		data() {
			return this.$store.state.restaurant;
		},
		columns() {
			return this.$store.state.restaurant.restaurants.length > 0
				? Object.keys(this.$store.state.restaurant.restaurants[0])
				: [];
		},
	},
	methods: {
		editRestaurant(id) {
			this.editId = id;
			this.showAdd = false;
		},
		addRestaurant() {
			this.editId = "";
			this.showAdd = true;
		},
		deleteRestaurant(restaurant) {
			this.$swal({
				title: "Are you sure?",
				text: "You won't be able to revert this!",
				type: "warning",
				showCancelButton: true,
				confirmButtonText: "Yes, delete it!",
			}).then((result) => {
				if (result.value) {
					this.$store.dispatch("removeRestaurant", restaurant).then((res) => {
						if (res)
							this.$swal("Deleted!", "Record has been deleted.", "success");
						else this.$swal("Fail!", "Fail to delete record.", "error");
					});
				}
			});
		},
	},
};
</script>
<style>
.editing {
	background-color: #fff8db;
}
</style>
