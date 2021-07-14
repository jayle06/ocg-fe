<template>
    <div class="bill">
        <div class="bill-container">
            <div class="bill-header">
                <img src="@/assets/icons/tick-icon.png" />
                <span class="text title">Thanks for your order!</span>
            </div>

            <div class="bill-info">
                <div class="customer-info">
                    <span class="text title">Name:</span>
                    <span class="text title">Mr. Jay Le</span>
                </div>
                <div class="customer-info">
                    <span class="text title">Email:</span>
                    <span class="text">mhoang0611@gmail.com</span>
                </div>
                <div class="customer-info">
                    <span class="text title">Phone:</span>
                    <span class="text">0868253396</span>
                </div>
                <div class="customer-info">
                    <span class="text title">Address:</span>
                    <span class="text">Xala - Phucla - Hadong - Hanoi</span>
                </div>
            </div>

            <div class="bill-box">
                <div class="bill-product">
                    <span class="text title">No.</span>
                    <span class="text title">Name</span>
                    <span class="text title">Quan</span>
                    <span class="text title">Price</span>
                    <span class="text title">Sub</span>
                </div>
                <div class="bill-product">
                    <span class="text">1.</span>
                    <span class="text">Adidas ultraboost 2020</span>
                    <span class="text">2</span>
                    <span class="text">$999</span>
                    <span class="text">$1998</span>
                </div>
                <div class="bill-product">
                    <span class="text">2.</span>
                    <span class="text">Adidas ultraboost 2020</span>
                    <span class="text">1</span>
                    <span class="text">$999</span>
                    <span class="text">$999</span>
                </div>
            </div>
            <div class="payment">
                <div class="text-payment">
                    <span class="text">Total products:</span>
                    <span class="text">2</span>
                </div>
                <div class="text-payment">
                    <span class="text">Subtotal:</span>
                    <span class="text">$2008</span>
                </div>
                <div class="text-payment">
                    <span class="text">Shipping fee:</span>
                    <span class="text">$10</span>
                </div>
                <div class="text-payment">
                    <span class="text title">Total:</span>
                    <span class="text title">$2018</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Bill'
}
</script>

<style scoped>
.bill {
    display: flex;
    justify-content: center;
    padding-top: 110px;
}
</style>
