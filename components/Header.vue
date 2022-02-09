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
        <nuxt-link class="bs-icon-box flex items-center rounded-full hover:bg-gray-100 justify-center" to="/"><img src="~/assets/img/heart.png" alt=""></nuxt-link>
        <nuxt-link class="relative bs-icon-box mx-2 flex items-center rounded-full hover:bg-gray-100 justify-center" to="/"><img src="~/assets/img/u_shopping-bag.png" alt=""><span class="absolute w-4 h-4 rounded-full bs-bg-dark-orange text-white text-xs top-0 right-1 flex justify-center items-center">5</span></nuxt-link>
        <nuxt-link class="flex items-center" to="/" ><span class="bs-icon-box flex items-center rounded-full hover:bg-gray-100 justify-center"><img src="~/assets/img/user.png" alt=""></span><span class="ml-2">Account</span></nuxt-link>
      </div>
    </div>
    <div class="flex justify-between items-center">
      <div class="flex bs-bg-green py-2 px-3 rounded-full text-white w-96 cursor-pointer">
        <div class="min-w-max"><img src="~/assets/img/menu-right.png" alt=""></div>
        <div class="text-lg w-full text-center">All Categorise</div>
        <div class="min-w-max"><img src="~/assets/img/chevron-down.png" alt=""></div>
      </div>
      <div class="flex text-center w-full justify-center -ml-4">
        <nuxt-link class="text-lg p-4" to="/">Home</nuxt-link>
        <nuxt-link class="text-lg p-4" to="/">Shop</nuxt-link>
        <nuxt-link class="text-lg p-4" to="/">Contact</nuxt-link>
        <nuxt-link class="text-lg p-4" to="/">About</nuxt-link>
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
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
