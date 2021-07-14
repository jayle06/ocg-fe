<template>
    <div class="admin order">
        <div class="staff-container">
            <div class="staff-header">
                <span class="text title">ORDERS MANAGEMENT</span>
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

                    <div class="staff-info">
                        <span class="text">1.</span>
                        <span class="text">Le Minh Hoang</span>
                        <span class="text">admin@gmail.com</span>
                        <span class="text">0868253396</span>
                        <span class="text">10:54:30T714-07-2021</span>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Order'
}
</script>
<style scoped>

.order {
    justify-content: center;
}

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