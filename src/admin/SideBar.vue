<template>
    <div class="category-container">

        <div class="admin-profile">
            <img src="@/assets/icons/login-icon.png" alt="profile" />
            <div class="text">Hello, Admin</div>
        </div>

        <span class="text title"><router-link to="/dashboard" class="router">Dashboard</router-link></span>
        
        <div class="admin-menu">
            <span class="text"><router-link to="/admin-products" class="router">Poducts</router-link></span>
            <span class="text"><router-link to="/admin-staffs" class="router">Staff</router-link></span>
            <span class="text">Orders</span>
        </div>

        <div class="admin-profile">
            <img src="@/assets/icons/logout-icon.png" alt="logout" />
            <div class="text">Logout</div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'SideBar'
}
</script>
