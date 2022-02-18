<template>
  <accordion>
    <accordion-item :openByDefault="true">
      <template slot="accordion-trigger">
        <h3 class="text-xl rounded-t font-semibold bs-gray-33 flex items-center justify-between bs-bg-light-green px-8 py-4 cursor-pointer">
          Category
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </h3>
      </template>
      <template slot="accordion-content">
        <ul style="border-color: #EBFAEB" class="pt-4 border border-t-0 pb-3 rounded-b">
          <li class="px-6 py-2">
            <accordion>
              <accordion-item :openByDefault="true">
                <template slot="accordion-trigger">
                  <h3 class="flex justify-between items-center py-2 hover:text-green-200 cursor-pointer">
                    Fruits
                    <svg v-if="" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </h3>
                </template>
                <template slot="accordion-content">
                  <accordion>
                    <accordion-item :openByDefault="true">
                      <template slot="accordion-trigger">
                        <p class="flex justify-between items-center pl-2 py-2 hover:text-green-200 cursor-pointer">
                          Green Fruits
                          <svg v-if="" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                          </svg>
                        </p>
                      </template>
                      <template slot="accordion-content">
                        <p class="pl-4 hover:text-green-200 cursor-pointer">Fresh Fruits</p>
                      </template>
                    </accordion-item>
                  </accordion>
                </template>
              </accordion-item>
            </accordion>
          </li>
          <li class="py-2 px-6 font-medium hover:text-green-200 cursor-pointer"><nuxt-link to="/">Vegetables</nuxt-link></li>
          <li class="py-2 px-6 font-medium hover:text-green-200 cursor-pointer"><nuxt-link to="/">Groceries</nuxt-link></li>
          <li class="py-2 px-6 font-medium hover:text-green-200 cursor-pointer"><nuxt-link to="/">Bevarage</nuxt-link></li>
        </ul>
      </template>
    </accordion-item>
  </accordion>
</template>

<script>
export default {
  name: "Sidebar",
  data(){
    return{
    }
  }
}
</script>

<style scoped>

</style>
