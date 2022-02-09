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
</div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>
