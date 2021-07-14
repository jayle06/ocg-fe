<template>
    <div class="admin">
        <SideBar />
        <div class="staff-container">
            <div class="staff-header">
                <span class="text title">ORDERS MANAGEMENT</span>
                <router-link to="/new-orders" class="router"><button class="btn-add-new">ADD NEW</button></router-link>
            </div>
            <div class="staff-list">
                <div class="staff-box">
                    
                    <div class="staff-info head">
                        <span class="text title">No.</span>
                        <span class="text title">Name</span>
                        <span class="text title">Email</span>
                        <span class="text title">Phone</span>
                        <span class="text title">Time</span>
                    </div>
                    <router-link to="/order-details" class="router">
                        <div class="staff-info">
                            <span class="text">1.</span>
                            <span class="text">Le Minh Hoang</span>
                            <span class="text">admin@gmail.com</span>
                            <span class="text">0868253396</span>
                            <span class="text">10:54:30T714-07-2021</span>
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
    name: 'AdminOrder',
    components : {
        SideBar,
    }
}
</script>

<style scoped>
.staff-info {
    display: grid;
    grid-template-columns: 10% 20% 30% 20% 20%;
    align-items: center;
    border-top: 1px solid #000;
    padding: 10px;
    cursor: pointer;
}
.head {
    border-top: none;
}

.head:hover {
    background-color: #fff;
} 
</style>
