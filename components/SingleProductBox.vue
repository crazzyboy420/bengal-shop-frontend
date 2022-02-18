<template>
  <div class="single-product-slide">
    <div class="relative bg-green-100 h-96">
      <img class="mx-auto h-full" :src="product.image" alt="">
      <div class="absolute z-20 top-3 left-3 pl-6 pt-1 pb-2 pr-3 rounded bs-bg-gray-33 text-white"><span class="font-medium">New</span></div>
      <div class="absolute product-hover transition-all top-0 w-full h-full flex justify-center items-center flex-col">
        <div class="absolute top-0 bs-bg-gray-33 w-full h-full opacity-50 rounded"></div>
        <div class="relative z-10">
          <button v-if="!matched" @click.prevent="addToCart(product,'plus')" class="text-center text-white text-xl">Add to Cart</button>
        </div>
        <div v-if="matched" class="relative z-10 flex items-center justify-center">
            <span @click.prevent="addToCart(product,'minus')" class="inline-block w-14 h-14 rounded-full text-white border-white border  flex items-center justify-center font-medium cursor-pointer">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
               </svg>
            </span>
          <span class="inline-block w-14 h-14 rounded-full text-white border-white border  flex items-center justify-center font-medium font-size-28 bg-white bs-green-color mx-4 cursor-pointer">{{quantity}}</span>
          <span @click.prevent="addToCart(product,'plus')" class="inline-block w-14 h-14 rounded-full text-white border-white border  flex items-center justify-center font-medium cursor-pointer">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
               </svg>
            </span>
        </div>
        <button @click.prevent="productDetails" class="absolute bs-gray-99 left-0 cursor-pointer bottom-0 bs-bg-gray-6 py-2 w-full flex items-center justify-center rounded-t">
          Details
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
    <h5 class="text-xl bs-gray-33 text-center mt-4">{{product.name}}</h5>
    <p class="text-center mt-2"><span class="bs-dark-orang-color font-medium text-xl mr-2">${{product.sale}}.00</span><del style="color:#bf3d3d;" class="text-lg">${{product.price}}.00</del></p>
  </div>
</template>
<script>
export default {
  name: "SingleProductBox",
  props:['product'],
  data(){
    return{
      matched: false,
      quantity:'',
    }
  },
  methods:{
    productDetails(){
      this.$store.dispatch('product-details-models/triggerModal',this.product);
    },
    addToCart(product,type){
      this.$store.dispatch('cart/addToCart',
        {
          product:product,
          type:type
        });
    },
    productCheacher(){
      const getProductLocalStorage = JSON.parse(localStorage.getItem('cart'));
      const productStore = this.$store.getters['cart/getCart'];
      let cart = [];
      if (getProductLocalStorage.length){
        cart = getProductLocalStorage;
      }else {
        cart = productStore;
      }
      cart.forEach(item =>{
        if (item.id === this.product.id){
          this.matched = true;
          this.quantity = item.quantity;
        }
      });
    },
  },
  mounted() {
    this.productCheacher();

    this.$store.watch(
      () => {
        return this.$store.getters['cart/getCart'];
      },
      (val) => {
       this.productCheacher();
      },
      {
        deep:true
      }
    );
  }
}
</script>

<style scoped>

</style>
