<template>
  <div class="col-sm-4">
    <div class="card" style="width: 18rem;" v-for="res in data.restaurants" :key="res.id">
      <!--<v-img  height="200"
      :src="url" alt="#404"></v-img>-->
      <div class="card-body">
        <h5 class="card-title">{{res.name}}</h5>
        <p class="card-text">{{res.desc}}</p>
        <!--<router-link tag="a" :to="'/details/'+name" href="#" class="btn btn-primary">Check menu</router-link> -->
      </div>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    data() {
      return this.$store.state.customers;
    },
  },
};
</script>

<style>
</style>
