<template>
<div class="admin">
    <SideBar />
    <div class="staff-container">
        <div class="staff-header">
            <span class="text title">STAFFS MANAGEMENT</span>
            <router-link to="/new-staffs" class="router"><button class="btn-add-new">ADD NEW</button></router-link>
        </div>
        <div class="staff-list">
            <div class="staff-box" >
                
                <div class="staff-info head">
                    <span class="text title">No.</span>
                    <span class="text title">Name</span>
                    <span class="text title">Email</span>
                    <span class="text title">Phone</span>
                    <span class="text title">Role</span>
                </div>
                <div v-for="user, id in users" :key="user.id">
                    <router-link :to="'/admin-staffs/' + user.id" class="router">
                        <div class="staff-info" >
                            <span class="text">{{id + 1}}.</span>
                            <span class="text">{{user.name}}</span>
                            <span class="text">{{user.email}}</span>
                            <span class="text">{{user.phone}}</span>
                            <span class="text">{{user.role}}</span>
                        </div>
                    </router-link>
                </div>
                
            </div>
        </div>
    </div>
</div>
    
</template>
<script>
import SideBar from "@/admin/SideBar"
import { mapState } from "vuex";
export default {
    name : 'AdminStaff',
    components : {
        SideBar,
    },
    computed: {
        ...mapState("users", ["users"]),
    },
    created() {
        this.$store.dispatch("users/getAllUsers");
    },
}
</script>