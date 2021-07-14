<template>
<div class="admin">
    <SideBar />
    <div class="staff-container">
        <div class="staff-header">
            <span class="text title">PRODUCTS MANAGEMENT</span>
            <router-link to="/new-products" class="router"><button class="btn-add-new">ADD NEW</button></router-link>
        </div>
        <div class="staff-list">
            <div class="staff-box">
                
                <div class="staff-info head">
                    <span class="text title">No.</span>
                    <span class="text title">Images</span>
                    <span class="text title">Name</span>
                    <span class="text title">Price</span>
                    <span class="text title">Sale</span>
                </div>
                <router-link to="/update-products" class="router">
                    <div class="staff-info">
                        <span class="text">1.</span>
                        <span class="text">
                            <img src="http://localhost:10000/images/Dep_adilette_Shower_DJen_GZ1013_02_standard_hover.jpg" />
                        </span>
                        <span class="text">Sandals</span>
                        <span class="text">$999</span>
                        <span class="text">$500</span>
                    </div>
                </router-link>
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

.staff-info {
    display: grid;
    grid-template-columns: 10% 20% 40% 15% 15%;
    align-items: center;
    border-top: 1px solid #000;
    padding: 10px;
    cursor: pointer;
}

.staff-info img{
    width: 50px;
}
.head {
    border-top: none;
}

.head:hover {
    background-color: #fff;
}
</style>