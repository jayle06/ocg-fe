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
                        <span class="text title">Total</span>
                        <span class="text title">Payment</span>
                        <span class="text title">Time</span>
                        <span class="text title">Status</span>
                    </div>
                    <router-link to="/order-details" class="router">
                        <div class="staff-info" v-for="od in orders" :key="od">
                            <span class="text">1.</span>
                            <span class="text">{{od.full_name}}</span>
                            <span class="text">{{od.total}}</span>
                            <span class="text">{{od.payment}}</span>
                            <span class="text">{{od.created_at}}</span>
                            <span class="text">{{od.status}}</span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SideBar from "@/admin/SideBar"
import {mapState} from 'vuex'
export default {
    name: 'AdminOrder',
    components : {
        SideBar,
    },
    computed:{
        ...mapState("order",["orders", "page", "month"])
    },
    created(){
        this.$store.dispatch("order/getAllOrders",{
            page : 1,
            month : ""
        })
    }
}
</script>

<style scoped>
.staff-info {
    display: grid;
    grid-template-columns: 10% 25% 15% 15% 25% 10%;
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
