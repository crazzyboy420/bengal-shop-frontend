<template>
<div>
<div class="container">
  <div class="flex py-10">
    <div class="w-1/4">
      <div class="flex items-center">
        <div class="min-w-max w-20 h-20 bs-bg-light-green flex items-center justify-center rounded-lg mr-4">
          <img class="w-14" src="~/assets/img/Vector.png" alt="">
        </div>
        <div class="min-w-max">
          <h4 class="text-xl font-medium bs-gray-33 mb-2">24 Customer Support</h4>
          <p class="bs-gray-3">Contact us 24 hours</p>
        </div>
      </div>
    </div>
    <div class="w-1/4">
      <div class="flex items-center">
        <div class="min-w-max w-20 h-20 bs-bg-light-green flex items-center justify-center rounded-lg mr-4">
          <img class="w-14" src="~/assets/img/t-shart.png" alt="">
        </div>
        <div class="min-w-max">
          <h4 class="text-xl font-medium bs-gray-33 mb-2">Authentic Products</h4>
          <p class="bs-gray-3">Contact us 24 hours</p>
        </div>
      </div>
    </div>
    <div class="w-1/4">
      <div class="flex items-center">
        <div class="min-w-max w-20 h-20 bs-bg-light-green flex items-center justify-center rounded-lg mr-4">
          <img class="w-14" src="~/assets/img/Vector-2.png" alt="">
        </div>
        <div class="min-w-max">
          <h4 class="text-xl font-medium bs-gray-33 mb-2">Secure Payment</h4>
          <p class="bs-gray-3">Contact us 24 hours</p>
        </div>
      </div>
    </div>
    <div class="w-1/4">
      <div class="flex items-center">
        <div class="min-w-max w-20 h-20 bs-bg-light-green flex items-center justify-center rounded-lg mr-4">
          <img class="w-14" src="~/assets/img/Vector-3.png" alt="">
        </div>
        <div class="min-w-max">
          <h4 class="text-xl font-medium bs-gray-33 mb-2">Best Prices & Offers</h4>
          <p class="bs-gray-3">Contact us 24 hours</p>
        </div>
      </div>
    </div>
  </div>
</div>
  <div class="bs-footer-bg">
    <div class="container">
      <div class="flex py-24">
        <div class="w-1/2">
          <nuxt-link to="/" class="flex font-size-32 font-medium bs-gray-33">
            <img style="max-width: 50px;" class="mr-3" src="~/assets/img/logo.png" alt="">Bengal shop
          </nuxt-link>
          <p class="w-5/6 text-base my-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam ornare nam est gravida.
            Netus viverra rhoncus sit magna sapien ac eget parturient id. Est luctus dapibus quam aliquam in nisl turpis.
            Elit et dictum lacus morbi nec accumsan a in.</p>
          <div class="flex">
            <img class="mr-1 cursor-pointer" src="~/assets/img/Apple-badge.png" alt="">
            <img class="cursor-pointer" src="~/assets/img/Play-store-badge.png" alt="">
          </div>
        </div>
        <div class="w-1/2 flex">
          <div class="w-1/2">
            <h3 class="text-2xl mb-4">About Us</h3>
            <ul>
              <li><nuxt-link class="bs-gray-3 py-1.5 inline-block" to="/">About Karte</nuxt-link></li>
              <li><nuxt-link class="bs-gray-3 py-1.5 inline-block" to="/">Contact</nuxt-link></li>
              <li><nuxt-link class="bs-gray-3 py-1.5 inline-block" to="/">Career</nuxt-link></li>
              <li><nuxt-link class="bs-gray-3 py-1.5 inline-block" to="/">Terms & Conditions</nuxt-link></li>
              <li><nuxt-link class="bs-gray-3 py-1.5 inline-block" to="/"> Category</nuxt-link></li>
            </ul>
          </div>
          <div class="w-1/2">
            <h3 class="text-2xl mb-4">Info</h3>
            <ul>
              <li><nuxt-link class="bs-gray-3 py-1.5 inline-block" to="/">information</nuxt-link></li>
              <li><nuxt-link class="bs-gray-3 py-1.5 inline-block" to="/">Shipping</nuxt-link></li>
              <li><nuxt-link class="bs-gray-3 py-1.5 inline-block" to="/">Payment</nuxt-link></li>
              <li><nuxt-link class="bs-gray-3 py-1.5 inline-block" to="/">Return</nuxt-link></li>
              <li><nuxt-link class="bs-gray-3 py-1.5 inline-block" to="/">Blog</nuxt-link></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center py-10">
        <div class="min-w-max flex">
          <div class="w-12 h-12 bg-white rounded-md flex items-center justify-center mr-3 bs-footer-icon-box">
            <img class="bs-gray-icon-color" src="~/assets/img/facebook.png" alt="">
          </div>
          <div class="w-12 h-12 bg-white rounded-md flex items-center justify-center mr-3 bs-footer-icon-box">
            <img src="~/assets/img/instagram.png" alt="">
          </div>
          <div class="w-12 h-12 bg-white rounded-md flex items-center justify-center mr-3 bs-footer-icon-box">
            <img src="~/assets/img/Twitter.png" alt="">
          </div>
          <div class="w-12 h-12 bg-white rounded-md flex items-center justify-center bs-footer-icon-box">
            <img src="~/assets/img/skype.png" alt="">
          </div>
        </div>
        <div class="w-full bs-gray-3 flex justify-center">@2022 Copyright All Right Reserved by Bengal Shop</div>
        <div class="min-w-max flex">
          <img class="ml-3" src="~/assets/img/paypal.png" alt="">
          <img class="ml-3" src="~/assets/img/visa.png" alt="">
          <img class="ml-3" src="~/assets/img/ipay.png" alt="">
          <img class="ml-3" src="~/assets/img/gpay.png" alt="">
        </div>
      </div>
    </div>
  </div>
  <!--Product Details Model-->
  <div v-if="modal" class="w-full h-full fixed z-30 top-0 left-0 min-h-screen">
    <div @click="modalClose" class="absolute w-full h-full bg-black opacity-50"></div>
    <div class="bs-product-details-body relative rounded-2xl p-8 bg-white mx-auto top-10 flex">
      <div @click="modalClose" class="absolute right-3 cursor-pointer top-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 hover:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <div class="w-1/2 p-4">
        <img :src="product.image" alt="">
      </div>
      <div class="w-1/2 p-4">
        <p class="flex">
          <span style="color: #BDBDBD" class="mr-3">Status</span>
          <span class="bs-green-color">In Stock</span>
        </p>
        <h3 class="font-size-28 bs-gray-33 my-2">{{product.name}}</h3>
        <p class="mt-2 flex items-center"><span class="bs-gray-33 font-semibold text-4xl mr-2">${{product.sale}}.00</span><del style="color:#828282;" class="font-size-28">${{product.price}}.00</del></p>
        <p class="py-2 font-medium text-gray-600 border-b">20 Products sold in last 12 hours</p>
        <div class="flex justify-between items-center my-4">
          <p class="font-medium uppercase">Quantity</p>
          <div class="flex">
            <span @click.prevent="cartChange(product,'minus')" class="flex items-center justify-center w-12 h-12 rounded-full border cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
              </svg>
            </span>
            <span class="flex mx-3 items-center bs-product-icon-box-bg justify-center w-12 h-12 rounded-full font-semibold text-lg">{{quantity}}</span>
            <span @click.prevent="cartChange(product,'plus')" class="flex items-center justify-center w-12 h-12 rounded-full border cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </span>
          </div>
          <span class="font-size-14 text-gray-400">Only !0 Item Left!</span>
        </div>
        <button class="bs-bg-green text-lg font-medium w-full rounded-full text-white py-3">Add to Cart</button>
        <nuxt-link to="/cart" class="bs-bg-gray-6 text-center block mt-4 text-lg font-medium w-full rounded-full bs-gray-2 py-3">Buy Now</nuxt-link>
        <div class="flex justify-between py-4 border-b">
          <button v-if="added == false" @click.prevent="addToWishlist" class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Add to Wishlist
          </button>
          <div @click="modalClose">
          <nuxt-link v-if="added == true" to="/wishlist" class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-6 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
            Browse Wishlist
          </nuxt-link>
          </div>
          <nuxt-link to="" class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Share
          </nuxt-link>
        </div>
        <div class="pt-4">
         <div class="flex pb-2">
           <span class="w-1/4 bs-gray-4 font-medium uppercase">Sku</span>
           <span class="3/4 bs-gray-2 font-medium">{{product.sku}}</span>
         </div>
          <div class="flex pb-2">
           <span class="w-1/4 bs-gray-4 font-medium uppercase">category</span>
           <span v-for="category in product.categories" class="3/4 bs-gray-2 font-medium">{{category.name}} <span class="coma-hidden">,</span>&nbsp;</span>
         </div>
          <div class="flex pb-2">
           <span class="w-1/4 bs-gray-4 font-medium uppercase">tags</span>
           <span v-for="tag in product.tags" class="3/4 bs-gray-2 font-medium">{{tag.name}}<span class="coma-hidden">,</span>&nbsp;</span>
         </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Footer",
  data(){
    return{
      modal : false,
      product:[],
      quantity:0,
      added:false,
    }
  },
  methods:{
    modalClose(){
      this.$store.dispatch('product-details-models/resetModal');
    },
    prodcutWatcher(){
      const getProductLocalStorage = JSON.parse(localStorage.getItem('cart'));
      getProductLocalStorage.forEach(item =>{
        if(item.id === this.product.id){
          this.quantity = item.quantity;
        }
      });
    },
    cartChange(product,type){
      this.$store.dispatch('cart/addToCart',
        {
          product:product,
          type:type
        });
      this.prodcutWatcher();
    },
    addToWishlist(){
     this.$store.dispatch('wishlist/addToWishlist',this.product);
    },
    wishListref(){
      const wishlistProduct = JSON.parse(localStorage.getItem('wishlist'));
      wishlistProduct.forEach(item =>{
        if (item.id === this.product.id){
          this.added = true;
        }
      });
    }
  },
  mounted() {
    this.$store.watch(
      () => {
        return this.$store.getters['product-details-models/getModal'];
      },
      (val) => {
        this.modal = val.modal;
        this.product = val.product;
        this.prodcutWatcher();
        this.added = val.added;
      },
      {
        deep:true
      }
    );
    this.$store.watch(
      () => {
        return this.$store.getters['wishlist/getWishList'];
      },
      (val) => {
        this. wishListref();
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
