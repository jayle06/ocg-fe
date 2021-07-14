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
                    <router-link to="/lookup" class="router"><li>Lookup</li></router-link>
                    <router-link to="/dashboard" class="router"><li>Admin</li></router-link>
                </ul>
            </div>
            <div class="nav-cart">
                <router-link to="/cart" class="router"><img src="@/assets/icons/cart-icon.png" alt="cart" /></router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>