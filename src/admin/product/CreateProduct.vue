<template>
    <div class="admin">
        <SideBar />
        <div class="create-product">
            <div class="create-header">
                <span class="text title">CRATE NEW PRODUCT</span>
            </div>
            <div class="product-info">
                <div class="form">
                    <span class="text">Product Name</span>
                    <input type="text" v-model="name" placeholder="name" />
                    <span class="text">Description</span>
                    <textarea v-model="description" placeholder="description" ></textarea>
                    <span class="text">Price</span>
                    <input type="text" v-model="price" placeholder="price" />
                    <span class="text">Price Sale</span>
                    <input type="text" v-model="price_sale" placeholder="price sale" />
                    <span class="text">Category</span>
                    <select multiple v-model="categories">
                        <option value="1">Men</option>
                        <option value="2">Women</option>
                        <option value="3">Kid</option>
                        <option value="4">Clothing</option>
                        <option value="5">Shoes</option>
                    </select>
                    <span class="text">Images</span>
                    <div class="input-file">
                        <div v-for="img, index in images" :key="index">
                            <img :src="img" />
                        </div>
                        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" />
                        <button class="btn-upload" v-on:click="$refs.file.click()">+</button>
                        <button class="btn-submit" v-on:click="submitFile()">Upload</button>
                    </div>
                </div>
            </div>
            <div class="btn-staff">
                <button @click="createNewProduct()" class="btn-update">Submit</button>
                <button class="btn-cancel">Cancel</button>
            </div>
        </div>
    </div>
</template>
<script>
import SideBar from "@/admin/SideBar"
import api from "@/services/upload.service";
import axios from "axios";
export default {
    name:'CreateProduct',
    components : {
        SideBar,
    },
    data(){
        return {
            file: '',
            images: [],
            name: '',
            description: '',
            price: '',
            price_sale: '',
            categories: [],
        }
    },
    methods: {
        submitFile(){
            let formData = new FormData();
            if(this.file != ''){
                formData.append('file', this.file);
                api.uploadImages(formData)
                .then(response => {
                    this.images.push(response);
                })
                .catch(function(){
                    console.log('FAILURE!!');
                });
            }
        },

        handleFileUpload(){
            this.file = this.$refs.file.files[0];
        },

        async createNewProduct() {
            let cates = [];
            for (let i = 0; i < this.categories.length; i++) {
                cates.push({id: parseInt(this.categories[i])})
            }
            let imgs = [];
            for (let i = 0; i < this.images.length; i++) {
                imgs.push({image_url: this.images[i]})
            }
            const product = {
                name : this.name,
                description: this.description,
                price: parseInt(this.price),
                is_sale: true,
                price_sale: parseInt(this.price),
                categories: cates,
                images: imgs,
            }
            console.log(product)
            await axios.post("http://localhost:10000/admin/products", product, {withCredentials: true});
            await this.$router.push("/admin-products");
        }
    }
}
</script>

<style scoped>

.form select {
    height: 100px;
    margin-bottom: 10px;
    padding: 10px
}

.form textarea {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
}

.btn-staff {
    display: flex;
    justify-content: space-around;
}
.btn-staff button {
    border: none;
    color: #fff;
    cursor: pointer;
    height: 40px;
    width: 80px;
}

.btn-update {
    background-color: #16a085;
}

.btn-cancel {
    background-color: #f39c12;
}

.btn-delete {
    background-color: #c0392b;
}
.input-file {
    display: flex;
    justify-content: center;
    align-items: center;    
}
.input-file img {
    height: 100px;
    width: 100px;
    margin-right: 10px;
    margin-bottom: 30px;
    border: 1px solid #7f8c8d;
}
.input-file input {
    display: none;
}
.btn-submit{
    height: 100px;
    width: 100px;
    margin-left: 10px;
    margin-bottom: 30px;
    border: 1px solid #7f8c8d;
    cursor: pointer;
}
</style>
