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
                    <input type="text" placeholder="name" />
                    <span class="text">Description</span>
                    <textarea placeholder="description" ></textarea>
                    <span class="text">Price</span>
                    <input type="text" placeholder="price" />
                    <span class="text">Price Sale</span>
                    <input type="text" placeholder="price sale" />
                    <span class="text">Category</span>
                    <select multiple>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="kid">Kid</option>
                        <option value="shoes">Shoes</option>
                        <option value="clothing">Clothing</option>
                    </select>
                    <span class="text">Images</span>
                    <button class="btn-upload">+</button>
                </div>
            </div>
            <div class="btn-staff">
                <button class="btn-update">Submit</button>
                <button class="btn-cancel">Cancel</button>
            </div>
        </div>
    </div>
</template>
<script>
import SideBar from "@/admin/SideBar"
export default {
    name:'CreateProduct',
    components : {
        SideBar,
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
</style>
