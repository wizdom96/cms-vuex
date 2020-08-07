<template>
	<nav class="navbar" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item">
				<img
					src="https://www.1face1.com/ht/wp-content/uploads/2017/10/order-online-21-21.png"
					width="112"
					height="28"
				/>
			</a>
		</div>

		<div class="navbar is-primary" style="width:2000px">
			<div class="navbar-start">
				<a
					v-for="link in links"
					:key="link.title"
					class="navbar-item"
					@click="$router.push(link.url)"
					>{{ link.title }}</a
				>
			</div>

			<div class="navbar-end">
				<div class="navbar-item">
					<div class="buttons"></div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: "Navbar",
	props: ["links"],
};
</script>
<style scoped>
a.navbar-item {
	text-transform: capitalize;
}
</style>
