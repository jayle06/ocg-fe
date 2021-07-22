import axios from "axios";
import { API_DOMAIN } from "@/config";

export default{
    async getRevenueByDay(){
        return axios.get(`${API_DOMAIN}/admin/revenues`).then((response) => {
            return response.data;
        });
    },

    async getAllOrders({month, page}){
        return axios.get(
            `${API_DOMAIN}/admin/orders?_page=${page}&_month=${month}`,
            {withCredentials: true}
        )
        .then((response) => {
            return response.data.orders
        });
    },

    async getOrderById(orderId){
        return axios.get(`${API_DOMAIN}/admin/orders/${orderId}`).then((response) => {
            return response.data;
        });
    },
    
    async createOrder(order){
        return axios.post(`${API_DOMAIN}/api/v1/orders`, order).then((response) => {
            return response.data;
        });
    },
    async getCustomerOrders({email, phone, page}){
        return axios.get(`${API_DOMAIN}/api/v1/customer-orders?_email=${email}&_phone=${phone}&_page=${page}`).then((response) => {
            return response.data;
        });
    }
}




