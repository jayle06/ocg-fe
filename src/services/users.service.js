import axios from "axios";
import { API_DOMAIN } from "@/config";

export default{
    async login(user) {
        return await axios.post(`${API_DOMAIN}/login`, user, {withCredentials: true})
        .then((response) => {
            localStorage.setItem("user", JSON.stringify(response.data));
            return response.data
        });
    },
    async logout(){
        return await axios.post(`${API_DOMAIN}/logout`, null ,{withCredentials: true })
        .then((response) => {
            localStorage.removeItem("user")
            return response.data
        });
    },
    async getProfiles(){
        return axios.get(`${API_DOMAIN}/admin/profiles`, {withCredentials: true})
        .then((response) => {
            return response.data;
        });
    },

    async updateProfiles(user) {
        return axios.put(`${API_DOMAIN}/admin/update-information`, user, {withCredentials: true})
        .then((response) => {
            return response.data;
        });
    },

    async updatePassword(payload) {
        return axios.put(`${API_DOMAIN}/admin/change-password`, payload, {withCredentials: true})
        .then((response) => {
            return response.data;
        });
    },

    async getAllUsers(){
        return axios.get(`${API_DOMAIN}/api/admin/users`, {withCredentials: true})
        .then((response) => {
            return response.data;
        });
    },

    async getUserById(userId) {
        return axios.get(`${API_DOMAIN}/api/admin/users/${userId}`, {withCredentials: true})
        .then((response) => {
            return response.data;
        });
    },
    async createNewUser(user){
        return axios.post(`${API_DOMAIN}/api/admin/users`, user ,{withCredentials: true})
        .then((response) => {
            return response.data;
        })
    },
    async deleteUserById(userId){
        return axios.delete(`${API_DOMAIN}/api/admin/users/${userId}`, {withCredentials: true})
        .then((response) => {
            return response.data;
        });
    },
    async updateUserById(userId, user) {
        return axios.put(`${API_DOMAIN}/api/admin/users/${userId}`, user ,{withCredentials: true})
        .then((response) => {
            return response.data;
        })
    }

}