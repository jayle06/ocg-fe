import axios from "axios";
import { API_DOMAIN } from "@/config";

export default{
    async getProducts({ page, order, search, categoryId, isSale }){
        let filterCategory = "";
        if (categoryId) filterCategory = "&categoryId=" + categoryId;

        return axios
        .get(
            `${API_DOMAIN}/api/v1/products?_page=${page}&_order=${order}&_sale=${isSale}&q=${search}${filterCategory}`
        )
        .then((response) => {
            const products = response.data.products.map((product) => {
              return product;
            });
            return {
              totalItems: response.data.total,
              products: products,
            };
        });
    },
    async getCategories(){
        return axios.get(`${API_DOMAIN}/api/v1/categories`).then((response) => {
            return response.data;
        });
    },
    async getProductById(productId) {
        return axios.get(`${API_DOMAIN}/api/v1/products/${productId}`).then((response) => {
          return response.data;
        });
    },

    async getBestSales(){
        return axios.get(`${API_DOMAIN}/api/v1/best-sale`).then((response) => {
            return response.data;
        });
    },
    async getNewProducts(){
        return axios.get(`${API_DOMAIN}/api/v1/new-products`).then((response) => {
            return response.data;
        });
    }
}