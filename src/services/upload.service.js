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
}