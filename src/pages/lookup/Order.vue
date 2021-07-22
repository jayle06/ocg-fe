<template>
    <div class="admin order">
        <div class="staff-container">
            <div class="staff-header">
                <span class="text title">ORDERS MANAGEMENT</span>
            </div>
            <div class="staff-list">
                <div class="staff-box" v-if="isLoading===false">
                    
                    <div class="staff-info head" v-if="isLoading===false">
                        <span class="text title">No.</span>
                        <span class="text title">Name</span>
                        <span class="text title">Email</span>
                        <span class="text title">Payment</span>
                        <span class="text title">Total</span>
                        <span class="text title">Time</span>
                        <span class="text title">Status</span>
                    </div>

                    <div class="staff-info" v-for="od, id in orders" :key="id">
                        <span class="text">{{id + 1}}</span>
                        <span class="text">{{od.full_name}}</span>
                        <span class="text">{{od.email}}</span>
                        <span class="text">{{od.payment}}</span>
                        <span class="text">{{od.total}}</span>
                        <span class="text">{{od.created_at}}</span>
                        <span class="text">{{od.status}}</span>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'Order',
    computed:{
        ...mapState("order", [
            "orders",
            "isLoading",
        ]),
    },
    async created(){
        await this.$store.dispatch("order/getCustomerOrders",{
            page: 1
        })
    }
}
</script>
<style scoped>

.order {
    justify-content: center;
}

.staff-info {
    display: grid;
    grid-template-columns: 5% 20% 30% 11% 12% 15% 10%;
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