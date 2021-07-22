import axios from "axios";
import { API_DOMAIN } from "@/config";

export default{
    async getRevenueByDay(){
        return axios.get(`${API_DOMAIN}/admin/revenues`).then((response) => {
            return response.data;
        });
    },
}