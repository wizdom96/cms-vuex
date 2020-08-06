<template>
	<div class="columns is-multiline is-mobile" style="padding-top:30px">
		<template v-for="res in data.restaurants">
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
						</div>
					</div>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
export default {
	computed: {
		data() {
			return this.$store.state.customers;
		},
	},
};
</script>

<style></style>
