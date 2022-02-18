<template>
<div>
  <div class="container py-10">
    <h2 class="text-2xl bs-gray-33 font-bold mb-6">Cart</h2>
    <table class="table-auto w-full">
      <thead>
      <tr>
        <th class="border px-4 py-2 w-8"></th>
        <th class="w-12 border px-4 py-2">Image</th>
        <th class="border px-4 py-2">Name</th>
        <th class="border px-4 text-center py-2">Price</th>
        <th class="border px-4 text-center py-2">Quntity</th>
        <th class="border px-4 text-center py-2">Total</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in product">
        <td @click="removeCart(item.id)" class="border px-4 py-2 text-center text-red-400 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </td>
        <td class="border px-4 py-2"><img :src="item.image" alt=""></td>
        <td class="border px-4 py-2">{{item.name}}</td>
        <td class="border px-4 text-center py-2">${{item.price.toFixed(2)}}</td>
        <td class="border px-4 text-center py-2">
          <button class="bs-gray-33 font-bold px-2 hover:text-green-400" @click.prevent="cartChange(item,'minus')">-</button>
          {{item.quantity}}
          <button class="bs-gray-33 font-bold px-2 hover:text-green-400" @click.prevent="cartChange(item,'plus')">+</button>
        </td>
        <td class="border px-4 text-center py-2">${{(item.quantity * item.price).toFixed(2)}}</td>
      </tr>
      <tr>
        <td class="border px-4 text-center py-2" colspan="5">Total</td>
        <td class="border px-4 text-center py-2">${{total.toFixed(2)}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
export default {
  name: "cart",
  data(){
    return{
      product:[],
      total:0,
    }
  },
  methods:{
    removeCart(product_id){
      this.$store.dispatch('cart/removeCart',product_id);
      this.product = JSON.parse(localStorage.getItem('cart'));
      this.prodcutWatcher()
    },
    prodcutWatcher(){
     const localStorageCartData = JSON.parse(localStorage.getItem('cart'));
      this.product = localStorageCartData;
      this.total = 0;
      localStorageCartData.forEach(item =>{
        this.total += (item.price * item.quantity);
      })

    },
    cartChange(product,type){
      this.$store.dispatch('cart/addToCart',
        {
          product:product,
          type:type
        });
      this.prodcutWatcher();
    },
  },
  mounted() {
    this.prodcutWatcher();
  }
}
</script>

<style scoped>

</style>
