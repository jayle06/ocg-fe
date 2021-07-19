<template>
    <div class="category-container">

        <div class="admin-profile">
            <router-link to="/profiles" class="router"><img src="@/assets/icons/login-icon.png" alt="profile" /></router-link>
            <div class="text">Hello, {{profiles.name}}</div>
        </div>

        <span class="text title"><router-link to="/dashboard" class="router">Dashboard</router-link></span>
        
        <div class="admin-menu">
            <span class="text"><router-link to="/admin-products" class="router">Products</router-link></span>
            <span class="text"><router-link to="/admin-staffs" class="router">Staffs</router-link></span>
            <span class="text"><router-link to="/admin-orders" class="router">Orders</router-link></span>
        </div>

        <div class="admin-profile" @click="logout()">
            <img src="@/assets/icons/logout-icon.png" alt="logout" />
            <div class="text">Logout</div>
        </div>

    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    name: 'SideBar',
    data(){
        return{ 
            user: {},
        }
    },
    methods: {
        async logout() {
            await this.$store.dispatch("users/logout");
            await this.$router.push("/login");
        },
    },
    computed: {
        ...mapState("users", ["profiles"]),
        
    },
    created(){
        this.$store.dispatch("users/getProfiles", {});
    },
}
</script>
