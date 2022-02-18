<template>
<div>
  <div class="container">
    <div class="flex justify-between my-5 items-center">
      <nuxt-link to="/" class="flex font-size-32 font-medium bs-gray-33">
        <img style="max-width: 50px;" class="mr-3" src="~/assets/img/logo.png" alt="">Bengal shop
      </nuxt-link>
      <div class="w-96">
        <div class="border border-gray-200 rounded-full p-1 flex items-center">
          <div class="min-w-max mx-2">
            <img src="~/assets/img/search.png" alt="">
          </div>
          <input class="focus:outline-none w-full" type="search" placeholder="search here.....">
          <button class="bs-bg-button text-white px-6 py-2 rounded-full" type="submit">Search</button>
        </div>
      </div>
      <div class="min-w-max flex">
        <nuxt-link class="bs-icon-box flex items-center relative rounded-full hover:bg-gray-100 justify-center" to="/wishlist"><img src="~/assets/img/heart.png" alt=""><span class="absolute w-4 h-4 rounded-full bs-bg-dark-orange text-white text-xs top-0 right-1 flex justify-center items-center">{{wish_counter}}</span></nuxt-link>
        <nuxt-link class="relative bs-icon-box mx-2 flex items-center rounded-full hover:bg-gray-100 justify-center" to="/cart"><img src="~/assets/img/u_shopping-bag.png" alt=""><span class="absolute w-4 h-4 rounded-full bs-bg-dark-orange text-white text-xs top-0 right-1 flex justify-center items-center">{{count}}</span></nuxt-link>
        <nuxt-link class="flex items-center" to="/" ><span class="bs-icon-box flex items-center rounded-full hover:bg-gray-100 justify-center"><img src="~/assets/img/user.png" alt=""></span><span class="ml-2">Account</span></nuxt-link>
      </div>
    </div>
    <div class="flex justify-between items-center">
      <div v-click-outside="clickOutside"  @click="categoryToggle" class="flex relative bs-bg-green py-2 px-3 rounded-full text-white w-96 cursor-pointer">
        <div class="min-w-max relative z-20"><img src="~/assets/img/menu-right.png" alt=""></div>
        <div class="text-lg w-full text-center relative z-20">All Categorise</div>
        <div class="min-w-max relative z-20">
           <svg v-if="categoryList == false" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
           </svg>
          <svg v-if="categoryList == true" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
          </svg>
        </div>
        <div v-bind:class="categoryList ? 'block visible':'hidden invisible'" class="absolute bs-bg-green w-full left-0 z-10 top-5 rounded-b-2xl">
          <ul class="py-5">
            <li class="py-2 px-6 block hover:text-green-200"><nuxt-link to="">Vegetables</nuxt-link></li>
            <li class="py-2 px-6 block hover:text-green-200"><nuxt-link to="">Fruits</nuxt-link></li>
            <li class="py-2 px-6 block hover:text-green-200"><nuxt-link to="">Green Fruits</nuxt-link></li>
            <li class="py-2 px-6 block hover:text-green-200"><nuxt-link to="">Groceries</nuxt-link></li>
            <li class="py-2 px-6 block hover:text-green-200"><nuxt-link to="">Meat</nuxt-link></li>
            <li class="py-2 px-6 block hover:text-green-200"><nuxt-link to="">Fish</nuxt-link></li>
            <li class="py-2 px-6 block hover:text-green-200"><nuxt-link to="">Bevarage</nuxt-link></li>
            <li class="py-2 px-6 block hover:text-green-200"><nuxt-link to="">Bevarage</nuxt-link></li>
            <li class="py-2 px-6 block hover:text-green-200"><nuxt-link to="">Fruits</nuxt-link></li>
          </ul>
        </div>
      </div>
      <div class="flex text-center w-full justify-center -ml-4">
        <nuxt-link class="text-lg p-4" to="/">Home</nuxt-link>
        <nuxt-link class="text-lg p-4" to="/category">Categorise</nuxt-link>
        <nuxt-link class="text-lg p-4" to="/contact">Contact</nuxt-link>
        <nuxt-link class="text-lg p-4" to="/about">About</nuxt-link>
        <nuxt-link class="text-lg p-4" to="/">Track Order</nuxt-link>
      </div>
      <div class="min-w-max">
        <nuxt-link class="bs-dark-orang-color text-xl font-medium" to="/">% Special Offer!</nuxt-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ClickOutside from 'vue-click-outside';
export default {
  name: "Header",
  data(){
    return{
      categoryList:false,
      count: '',
      wish_counter:0,
    }
  },

  methods:{
    categoryToggle(){
      this.categoryList = !this.categoryList;
    },
    clickOutside(){
      this.categoryList = false;
    },
    cartWatch(){
      const getProductLocalStorage = JSON.parse(localStorage.getItem('cart'));
      const productStore = this.$store.getters['cart/getCart'];
      let cart = [];
      if (getProductLocalStorage.length){
        cart = getProductLocalStorage;
      }else {
        cart = productStore;
      }
      if(cart.length) {
          this.count = 0;
        cart.forEach(item => {
          this.count = (+this.count) + (+item.quantity);
        })
      }else {
        this.count = 0;
      }


    },
    wishListWatcher(){
      const wishLocalStorge = JSON.parse(localStorage.getItem('wishlist'));
      if (wishLocalStorge.length){
          this.wish_counter = wishLocalStorge.length;
      }else {
        this.wish_counter = 0;
      }
    }
  },
  mounted() {
    const localData = localStorage.getItem('cart');
    const wishlistData = localStorage.getItem('wishlist');

    if (!localData){
      localStorage.setItem('cart','[]')
    }
    if (!wishlistData){
      localStorage.setItem('wishlist','[]')
    }
    this.cartWatch()
    this.$store.watch(
      () => {
        return this.$store.getters['cart/getCart'];
      },
      (val) => {
        this.cartWatch();
      },
      {
        deep:true
      }
    );
    this.wishListWatcher();
    this.$store.watch(
      () => {
        return this.$store.getters['wishlist/getWishList'];
      },
      (val) => {
        this.wishListWatcher();
      },
      {
        deep:true
      }
    );

  },
  directives: {
    ClickOutside
  }

}
</script>

<style scoped>

</style>
