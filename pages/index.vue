<template>
<div>
  <div class="p-6 hero-slide">
    <vue-slick-carousel :arrows="false" :dots="true">
      <div class="rounded-xl bs-bg-light-green">
        <div class="container">
          <div class="flex items-center">
            <div class="w-1/2">
              <p class="bs-green-color font-size-32 font-medium mb-3">Save up 30% off</p>
              <h2 style="line-height: 80px" class="font-size-70 font-bold bs-gray-33">Bengal Vegetable <br>farm  Organic 100%</h2>
              <p class="font-size-22 font-medium mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula faucibus massa est elit maecenas.</p>
              <button class="bs-button mt-6">Shop Now</button>
            </div>
            <div class="w-1/2 flex justify-end pt-10">
              <img style="max-width:500px" src="~/assets/img/bs-hero.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="rounded-xl bs-bg-light-green">
        <div class="container">
          <div class="flex items-center">
            <div class="w-1/2">
              <p class="bs-green-color font-size-32 font-medium mb-3">Save up 50% off</p>
              <h2 style="line-height: 80px" class="font-size-70 font-bold bs-gray-33">Bengal Vegetable <br>farm  Organic 100%</h2>
              <p class="font-size-22 font-medium mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula faucibus massa est elit maecenas.</p>
              <button class="bs-bg-green py-2 px-8 text-white rounded-full text-lg font-medium mt-6">Shop Now</button>
            </div>
            <div class="w-1/2 flex justify-end pt-10">
              <img style="max-width:500px" src="~/assets/img/bs-hero.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="rounded-xl bs-bg-light-green">
        <div class="container">
          <div class="flex items-center">
            <div class="w-1/2">
              <p class="bs-green-color font-size-32 font-medium mb-3">Save up 90% off</p>
              <h2 style="line-height: 80px" class="font-size-70 font-bold bs-gray-33">Bengal Vegetable <br>farm  Organic 100%</h2>
              <p class="font-size-22 font-medium mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula faucibus massa est elit maecenas.</p>
              <button class="bs-bg-green py-2 px-8 text-white rounded-full text-lg font-medium mt-6">Shop Now</button>
            </div>
            <div class="w-1/2 flex justify-center pt-10">
              <img style="max-width:500px" src="~/assets/img/bs-hero.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </vue-slick-carousel>
  </div>
  <div class="py-10 bs-category-slide">
    <div class="container">
      <h3 class="text-4xl bs-gray-33 mb-4">Search by Category</h3>
      <div style="background-color:#E0E0E0" class="w-full relative h-1 rounded-2xl">
        <div style="" class="absolute w-1/12 top-0 left-0 bs-bg-green h-1 rounded-2xl"></div>
      </div>
      <vue-slick-carousel style="margin-top: 30px" v-bind="CategoryCarouselSetting">
      <div class="bs-category-bg flex items-center justify-center flex-col py-6">
        <div class="h-28 flex justify-center items-center">
          <img src="~/assets/img/category-1.png" alt="">
        </div>
        <h5 class="text-xl bs-gray-33 text-center">Groceries</h5>
      </div>
      <div class="bs-category-bg flex items-center justify-center flex-col py-6">
          <div class="h-28 flex justify-center items-center">
            <img src="~/assets/img/category-2.png" alt="">
          </div>
          <h5 class="text-xl bs-gray-33 text-center">Fish</h5>
      </div>
      <div class="bs-category-bg flex items-center justify-center flex-col py-6">
        <div class="h-28 flex justify-center items-center">
          <img src="~/assets/img/category-3.png" alt="">
        </div>
        <h5 class="text-xl bs-gray-33 text-center">Meat</h5>
      </div>
      <div class="bs-category-bg flex items-center justify-center flex-col py-6">
          <div class="h-28 flex justify-center items-center">
            <img src="~/assets/img/category-4.png" alt="">
          </div>
          <h5 class="text-xl bs-gray-33 text-center">Vegetables</h5>
      </div>
      <div class="bs-category-bg flex items-center justify-center flex-col py-6">
          <div class="h-28 flex justify-center items-center">
            <img src="~/assets/img/category-5.png" alt="">
          </div>
          <h5 class="text-xl bs-gray-33 text-center">Fruits</h5>
      </div>
      <div class="bs-category-bg flex items-center justify-center flex-col py-6">
          <div class="h-28 flex justify-center items-center">
            <img src="~/assets/img/category-6.png" alt="">
          </div>
          <h5 class="text-xl bs-gray-33 text-center">Ice Cream</h5>
      </div>
      <div class="bs-category-bg flex items-center justify-center flex-col py-6">
          <div class="h-28 flex justify-center items-center">
            <img src="~/assets/img/category-1.png" alt="">
          </div>
          <h5 class="text-xl bs-gray-33 text-center">Groceries</h5>
      </div>
        <template #prevArrow="arrowOption">
          <div class="custom-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </template>
        <template #nextArrow="arrowOption">
          <div class="custom-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </template>
      </vue-slick-carousel>
    </div>
  </div>
  <div class="container">
    <div class="flex -mx-3">
      <div class="w-1/2 mx-3 bg-gray-400 px-12 py-20 promo-bg bg-cover bg-center rounded-2xl">
        <div class="w-6/12">
          <h5 class="bs-dark-orang-color text-2xl mb-2">Buy 1 Get 1</h5>
          <h2 style="line-height: 55px" class="font-size-46 bs-gray-33">Fresh Fruits Collection</h2>
          <button class="bs-white-button mt-8">Shop Now</button>
        </div>
      </div>
      <div class="w-1/2 mx-3 bg-gray-400 px-12 py-20 promo-bg-2 bg-cover bg-center rounded-2xl">
        <div class="w-6/12">
          <h5 class="bs-dark-orang-color text-2xl mb-2">Buy 1 Get 1</h5>
          <h2 style="line-height: 55px" class="font-size-46 bs-gray-33">Fresh Fruits Collection</h2>
          <button class="bs-white-button mt-8">Shop Now</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return{
      CategoryCarouselSetting:{
        "slidesToShow": 6,
      }
    }
  }
}
</script>
