export const state = () => ({
  modalData:{
    product:[],
    modal:false,
    added:false,
  }
})
export const mutations = {
  TiggerModal(state,product) {
    state.modalData.product = product;
    state.modalData.modal = true;
    const wishLocalStorege = JSON.parse(localStorage.getItem('wishlist'));
    wishLocalStorege.forEach(item =>{
      if (item.id === product.id){
        state.modalData.added = true;
      }
    });
  },
  RESET_MODAL(state,product) {
    state.modalData.product = [];
    state.modalData.modal = false;
    state.modalData.added = false;
  }
}
export const actions = {
  triggerModal({commit}, product) {
    commit('TiggerModal', product)
  },
  resetModal({commit}){
    commit('RESET_MODAL');
  }
}
export const getters = {
  getModal(state){
    return state.modalData;
  }
}
