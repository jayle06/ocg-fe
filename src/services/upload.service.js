import axios from "axios";
import { API_DOMAIN } from "@/config";

export default{
    async uploadImages(file){
        return axios.post(`${API_DOMAIN}/admin/uploads`, file ,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            withCredentials: true,
        }).then((response) => {
            return response.data.image_url;
        })
    },
    async uploadCSV(file){
        return axios.post(`${API_DOMAIN}/admin/csv`, file ,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            withCredentials: true,
        });
    },
    async importCSVToDB(){
        return axios.post(`${API_DOMAIN}/admin/multi-products`, null ,
        {
            withCredentials: true,
        });
    },
}