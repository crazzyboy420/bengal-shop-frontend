<template>
  <div>
    <div class="container py-10 w-2/3">
      <h2 class="text-2xl bs-gray-33 font-bold mb-6">Wishlist</h2>
      <table class="table-auto w-full mx-auto">
        <thead>
        <tr>
          <th class="border px-4 py-2 w-8"></th>
          <th class="w-12 border px-4 py-2">Image</th>
          <th class="border px-4 py-2">Name</th>
          <th class="border px-4 text-center py-2">Price</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in product">
          <td @click="removeWishlist(item.id)" class="border px-4 py-2 text-center text-red-400 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </td>
          <td class="border px-4 py-2"><img :src="item.image" alt=""></td>
          <td class="border px-4 py-2">{{item.name}}</td>
          <td class="border px-4 text-center py-2">${{item.price.toFixed(2)}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "wishlist",
  data(){
    return{
      product:[],
    }
  },
  methods:{
    removeWishlist(product_id){
      this.$store.dispatch('wishlist/removeWishlist',product_id);
      this.product = JSON.parse(localStorage.getItem('wishlist'));
    }
  },
  mounted() {
    this.product = JSON.parse(localStorage.getItem('wishlist'));
  }
}

</script>

<style scoped>

</style>
