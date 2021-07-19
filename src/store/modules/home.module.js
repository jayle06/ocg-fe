import api from "@/services/products.service";

const state = () => ({
    newArrivals: [],
    bestSells: [],
});
  
const getters = {};

const actions = {
    async getBestSells({ commit }){
        const products = await api.getBestSells();
        console.log("bestsale", products)
        commit("setBestSells", products)
    },
    
    async getNewArrivals({ commit }){
        const products = await api.getNewArrivals();
        console.log(products)
        commit("setNewArrivals", products)
    }
}

const mutations = {
    setBestSells(state, products){
        state.bestSells = products;
    },
    
    setNewArrivals(state, products){
        state.newArrivals = products
    },
    
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
