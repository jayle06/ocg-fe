import api from "@/services/orders.service";

const state = () => ({
    orders: [],
    order: [],
    page: 1,
    month: "",
    email:"",
    phone:"",
    isLoading: true,
});
  
const getters = {};

const actions = {
    async getAllOrders({state, commit }, {page, month}){
        console.log(state.cc)
        if(page) commit("setPage", page);
        if(month) commit("setMonth", month);
        const orders = await api.getAllOrders({
            page: state.page,
            month: state.month,
        });
        commit("setOrders", orders);
        
    },
    async getOrderById({commit}, id){
        const order = await api.getOrderById(id);
        commit("setOrder", order)
    },
    setInfo({commit}, {email, phone}){
        commit("setEmail", email);
        commit("setPhone", phone)
    },
    async getCustomerOrders({state, commit}, {page}){
        if(page)commit("setPage", page)
        const orders = await api.getCustomerOrders({
            email: state.email,
            phone: state.phone,
            page: state.page
        })
        commit("setOrders", orders)
    }
};

const mutations = {
    setOrders(state, orders){
        state.orders = orders;
        state.isLoading = false
    },
    setOrder(state, order){
        state.order = order
    },
    setPage(state, page){
        state.page = page
    },
    setMonth(state, month){
        state.month = month
    },
    setEmail(state, email){
        state.email = email
    },
    setPhone(state, phone){
        state.phone = phone
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};