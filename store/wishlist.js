export const state = () => ({
    wishlist:[],
})
export const mutations = {
  ADDTOWISHLIST(state,product){
    let  getWishList = JSON.parse(localStorage.getItem('wishlist'));
    let newProduct = true;
    getWishList.forEach(item=>{
      if (item.id === product.id){
        newProduct = false;
      }
    });
    if (newProduct) {
      getWishList.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
      this.$toast.success("Added To Wishlist!");
    }
    //Save in LocalStore
    localStorage.setItem('wishlist',JSON.stringify(getWishList));
    state.wishlist = getWishList;
  },
  REMOVE_WISHLIST(state,product_id){
    let  getWishList = JSON.parse(localStorage.getItem('wishlist'));
    getWishList.forEach((item,index) =>{
      if (item.id === product_id){
        getWishList.splice(index,1);
      }
    });
    localStorage.setItem('wishlist',JSON.stringify(getWishList));
    state.wishlist = getWishList;
    this.$toast.warning("Remove From Wishlist!");
  }
}
export const actions = {
  addToWishlist({commit}, product) {
    commit('ADDTOWISHLIST', product)
  },
  removeWishlist({commit}, product_id) {
    commit('REMOVE_WISHLIST', product_id)
  }
}
export const getters = {
  getWishList(state){
    return state.wishlist;
  }
}
