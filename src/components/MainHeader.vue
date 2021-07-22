<template>
    <div>
        <div class="nav-bar">
            <router-link to="/" class="router"><img src="@/assets/logo.png" alt="logo" /></router-link>
            <div class="nav-menu">
                <ul>
                    <router-link to="/" class="router"><li>Home</li></router-link>
                    <router-link to="/products" class="router"><li>Products</li></router-link>
                    <router-link to="/about" class="router"><li>About</li></router-link>
                    <router-link to="/contact" class="router"><li>Contact</li></router-link>
                    <router-link to="/lookup" class="router"><li>Orders Tracking</li></router-link>
                    <router-link to="/dashboard" class="router"><li>Admin</li></router-link>
                </ul>
            </div>
            <div class="nav-cart">
                <span class="text cart-len">{{totalItems}}</span>
                <router-link to="/cart" class="router"><img src="@/assets/icons/cart-icon.png" alt="cart" /></router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name : 'MainHeader',
    computed : {
        ...mapGetters('cart', ["totalItems"])
    },
    created(){
        this.$store.commit("cart/getProductsInCart");
    },
}
</script>

<style scoped>
.nav-cart {
    position: relative;
}
.cart-len{
    position: absolute;
    background-color: #2c3e50;
    color: #fff;
    /* width: 25px; */
    padding: 5px;
    /* font-size: 18px; */
    border-radius: 5px;
    top: 0;
    left: 30px;
}
</style>