<template>
	<div id="app" class="container">
		<Navbar :links="navigationLink"></Navbar>
		<section class="hero">
			<div class="hero-body">
				<div class="container">
					<br />
					<router-view class="view"></router-view>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
	name: "app",
	components: {
		Navbar,
	},
	created() {},
	computed: {
		navigationLink() {
			return this.$router.options.routes.map((i) => {
				return {
					title: i.name,
					url: i.path,
					child: i.child ? i.child : [],
				};
			});
		},
	},
};
</script>

<style></style>
