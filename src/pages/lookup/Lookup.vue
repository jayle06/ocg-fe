<template>
    <div class="admin lookup">
        <div class="looking-order">
            <div class="create-header">
                <span class="text title">LOOKING FOR YOUR ORDERS</span>
            </div>
            <div class="product-info">
                <div class="form">
                    <span class="text">Please enter your email or your phone!</span>
                    <input type="email" placeholder="email or phone number" />
                </div>
            </div>
            <div class="btn-staff">
                <router-link to="/orders" class="router"><button class="btn">Submit</button></router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'Lookup'
}
</script>

<style scoped>
.lookup{
    justify-content: center;
}
.looking-order {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
    padding: 30px;
    width: 800px;
    height: 500px;
}
</style>