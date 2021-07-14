<template>
<div class="admin">
    <SideBar />
    <div class="list-products">
        <div class="box">
            <img 
                src="http://localhost:10000/images/Dep_adilette_Shower_DJen_GZ1013_02_standard_hover.jpg" 
                alt="shoes" 
            />
            <div class="box-content">
                <span class="text title">Adidas yezzy 700 black</span>
                <span class="text">Category</span>
                <span class="text">$999</span>
            </div>

            <div class="btn-admin">
                <button class="btn-update">Update</button>
                <button class="btn-delete">Delete</button>
            </div>
        </div>
    </div>
</div>
    
</template>
<script>
import SideBar from "@/admin/SideBar"
export default {
    name: 'AdminProduct',
    components: {
        SideBar,
    }
}
</script>

<style scoped>

.btn-admin{
    display: flex;
    justify-content: space-between;
    /* box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2); */
}
.btn-admin button{
    width: 50%;
    height: 26px;
    cursor: pointer;
    color: #fff;
}

.btn-update{
    background-color: #16a085;
    border: 1px solid #16a085;
}

.btn-delete{
    background-color: #c0392b;
    border: 1px solid #c0392b;
}

</style>