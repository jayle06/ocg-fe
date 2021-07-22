import axios from "axios";
import { API_DOMAIN } from "@/config";


const state = () => ({
    revenues: [],
    date:[],
    rev: [],
    totals : [],
    isLoading: false
});

const getters= {};

const actions = {
    async getRevenues({ commit }){
        var revenues
        await axios.get(`${API_DOMAIN}/admin/revenues`, {withCredentials: true})
        .then(response => (revenues = response.data))
        commit("setRevenues", revenues)
    }
}

const mutations = {
    setRevenues(state, revenues){
        state.date = []
        state.rev = []
        state.revenues = revenues
        for (let i = 0; i < state.revenues.length; i++ ){
            state.date.push(state.revenues[i].date)
            state.rev.push(state.revenues[i].revenue)
        }
        state.isLoading = true
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
  };