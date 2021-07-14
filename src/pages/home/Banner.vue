<template>
    <div class="banner">
        <img src="@/assets/img/banner.jpg" alt="banner" />
        <div class="banner-content">
            <h3 class="text title">SUCCESSFUL WITH SPORTS</h3>
            <span class="text" >Performance apparel that is suitable for many sports, inspired by innovation. Raise the bar, together.</span>
            <router-link to="/products" class="router"><button class="btn">Shopping Now</button></router-link>
        </div>
    </div>
</template>
<script>
export default {
    name : 'Banner'
}
</script>