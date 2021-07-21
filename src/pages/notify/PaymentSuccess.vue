<template>
    <div class="bill">
        <div class="bill-container">
            <div class="bill-header">
                <img src="@/assets/icons/tick-icon.png" />
                <span class="text title">Thanks for your order!</span>
                <router-link to="/" class=""><button class="btn">Continue Shopping</button></router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PaymentSuccess',
}
</script>
<style scoped>
.bill {
    display: flex;
    justify-content: center;
    padding-top: 110px;
}
.bill-header span {
    margin-bottom: 30px;
}
</style>
