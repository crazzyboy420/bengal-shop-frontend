export const state = () => ({
  cart:[]
})
export const mutations = {
  ADDTOCART(state,data) {
    let  productsLocalStorege = JSON.parse(localStorage.getItem('cart'));
    let newProduct = true;
    productsLocalStorege.forEach(item=>{
      if (item.id === data.product.id){
        newProduct = false;
      }
    });
    if (newProduct){
      productsLocalStorege.push({
        id:data.product.id,
        name:data.product.name,
        price:data.product.price,
        image:data.product.image,
        quantity:1,
      });
      this.$toast.success("Added To Cart!");
    }else {
      productsLocalStorege.forEach((exitingProduct,index)=>{
        if (exitingProduct.id === data.product.id){
          if (data.type === 'minus' && productsLocalStorege[index].quantity >1){
            productsLocalStorege[index].quantity -=1;
          }else if(data.type === 'plus'){
            productsLocalStorege[index].quantity +=1;
          }
        }
      })
    }
    //Save in Store
  state.cart = productsLocalStorege;
  //Save in LocalStore
    localStorage.setItem('cart',JSON.stringify(productsLocalStorege));
  },
  REMOVE_CART(state,product_id){
    let  productsLocalStorege = JSON.parse(localStorage.getItem('cart'));

    if(productsLocalStorege.length){
      productsLocalStorege.forEach((item,index) =>{
        if (item.id === product_id){
          productsLocalStorege.splice(index,1);
        }
      });
    }
    state.cart = productsLocalStorege;
    //Save in LocalStore
    localStorage.setItem('cart',JSON.stringify(productsLocalStorege));
    this.$toast.warning("Remove From Cart!");

  }
}
export const actions = {
  addToCart({commit}, product) {
    commit('ADDTOCART', product)
  },
  removeCart({commit}, product_id) {
    commit('REMOVE_CART', product_id)
  }
}
export const getters = {
  getCart(state){
    return state.cart;
  }
}
