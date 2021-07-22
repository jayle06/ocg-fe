<template>
    <div class="bill">
        <div class="bill-container">
            <div class="bill-header">
                <img src="@/assets/icons/icon-false.png" />
                <span class="text title">Sorry! Your transaction has been failed. Please try again!</span>
                <router-link to="/" class=""><button class="btn">Continue Shopping</button></router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PaymentFalse',
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
