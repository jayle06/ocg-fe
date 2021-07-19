import api from "@/services/users.service";

const state = () => ({
    users: [],
    user: {},
    profiles: {},
    status: false,
});

const getters = {};

const actions = {
    async getProfiles({ commit }) {
        const profiles = await api.getProfiles();
        commit("setProfiles", profiles);
    },
    async updateProfiles({ commit }, payload) {
        const user = await api.updateProfiles(payload);
        commit("setUser", user);
    },
    async updatePassword({ commit }, payload) {
        const status = await api.updatePassword(payload);
        commit("setStatus", status);
    },
    async getAllUsers({ commit }) {
        const users = await api.getAllUsers();
        commit("setUsers", users);
    },
    async getUserById({ commit }, userId) {
        const user = await api.getUserById(userId);
        commit("setUser", user);
    },
    async createNewUser({ commit }, payload) {
        const user = await api.createNewUser(payload);
        commit("setUser", user);
    },
    async login({ commit }, payload) {
        const user = await api.login(payload);
        commit("setUser", user);
    },
    async logout({ commit }) {
        const status = await api.logout();
        commit("setStatus", status);
    },
    async deleteUserById({ commit }, userId) {
        const status = await api.deleteUserById(userId);
        commit("setStatus", status);
    },
    async updateUserById({commit}, payload) {
        const user = await api.updateUserById(payload);
        commit("setUser", user);
    }
};

const mutations = {
    setProfiles(state, profiles){
        state.profiles = profiles;
    },
    setUsers(state, users) {
        state.users = users;
    },
    setUser(state, user) {
        state.user = user;
    },
    setStatus(state, status){
        state.status = status;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};