<template>
<div>
 <div class="container">
   <div class="flex py-6">
     <div class="w-1/4 mr-6"><sidebar/></div>
     <div class="w-3/4">
       <div class="cat-bg w-full bg-gray-400 p-14 rounded bg-center bg-cover">
         <div class="w-2/4">
           <h5 class="bs-dark-orang-color text-xl mb-4">Buy 1 Get 1</h5>
           <h2 class="text-4xl bs-green-color font-bold">Up to 30% Discount on Selected Items</h2>
         </div>
       </div>
       <div class="pt-10">
         <h2 class="bs-gray-33 text-4xl font-bold">Fruits Collection</h2>
         <div class="py-4 flex justify-between items-center">
           <p>
             <span class="text-lg">Fruits</span>
             <span class="border-r-2 mx-3 border-gray-400"></span>
             <span class="text-lg">Green Fruits</span>
             <span class="border-r-2 mx-3 border-gray-400"></span>
             <span class="text-lg">Fresh Fruits</span>
           </p>
           <div class="flex items-center">
             <p><span class="font-medium">20</span> Products Found</p>
             <select class="ml-3 menu-select">
               <option value="">Default Sorting</option>
               <option value="">Sort by price</option>
               <option value="">Sort by discount</option>
             </select>
           </div>
         </div>
       </div>
       <div class="flex flex-wrap -mx-4 mt-6 text-center">
         <div class="w-1/3 px-4 mb-8" v-for="items in product">
           <SingleProductBox :product="items"/>
         </div>
       </div>
       <div class="text-center mt-4">
         <button class="bs-button inline-block">Load More</button>
       </div>
     </div>
   </div>
 </div>
</div>
</template>

<script>
import SingleProductBox from "../components/SingleProductBox";
import Sidebar from "../components/Sidebar";
import ProductInfo from "assets/product-info.json";
export default {
  name: "category",
  components: {Sidebar, SingleProductBox},
  data(){
    return{
      product:[]
    }
  },
  mounted() {
   this.product = ProductInfo;
  }
}
</script>

<style scoped>

</style>
