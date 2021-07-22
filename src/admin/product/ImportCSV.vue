<template>
    <div class="admin">
        <SideBar />
        <div class="staff-update">
            <div class="import">
                <span class="text title">Import CSV</span>
                <div class="input-file">
                    <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" />
                    <button v-on:click="submitFile()">Upload</button>
                </div>
            </div>
            
            <div class="btn-staff">
                <button @click="importFile()" class="btn-update">Import</button>
                <button @click="cancel()" class="btn-cancel">Cancel</button>
            </div>
        </div>
    </div>
</template>
<script>
import api from "@/services/upload.service";
import SideBar from "@/admin/SideBar";
export default {
    name : 'ImportCSV',
    components : {
        SideBar
    },
    data(){
        return {
            file: '',
        }
    },
    methods: {
        async cancel() {
            await this.$router.push("/admin-products");
        },
        importFile(){
            api.importCSVToDB()
            .then(function(){
                    console.log('SUCCESS!!');
            })
            .catch(function(){
                console.log('FAILURE!!');
            });
        },
        submitFile(){
            let formData = new FormData();
            if(this.file != ''){
                formData.append('file', this.file);
                api.uploadCSV(formData)
                .then(function(){
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

.import {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
    height: 300px;
    margin-bottom: 30px;
}

.input-file button {
    cursor: pointer;
}

.btn-staff {
    display: flex;
    justify-content: space-between;
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

</style>
