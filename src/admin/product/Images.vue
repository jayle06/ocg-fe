<template>
    <div class="admin">
        <div class="input-file">
            <div v-for="img, index in images" :key="index">
                <img :src="img" />
            </div>
            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" />
            <button v-on:click="$refs.file.click()">+</button>
            <button v-on:click="submitFile()">Upload</button>
        </div>
    </div>
</template>
<script>
import api from "@/services/upload.service";
export default {
    name: 'Images',
    data(){
        return {
            file: '',
            images: [],
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
                    console.log('SUCCESS!!');
                })
                .catch(function(){
                    console.log('FAILURE!!');
                });
            }
        },

        handleFileUpload(){
            this.file = this.$refs.file.files[0];
        }
    }
}
</script>

<style scoped>
.input-file {
    display: flex;
    justify-content: center;
    align-items: center;    
}
.input-file img {
    height: 100px;
    width: 100px;
    margin-right: 10px;
    border: 1px solid #7f8c8d;
}
.input-file input {
    display: none;
}

.input-file button{
    height: 100px;
    width: 100px;
    background-color: #fff;
    border: 1px solid #7f8c8d;
    border-style: dashed;
    cursor: pointer;
}

</style>
