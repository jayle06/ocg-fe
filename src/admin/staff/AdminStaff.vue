<template>
<div class="admin">
    <SideBar />
    <div class="staff-container">
        <div class="staff-header">
            <span class="text title">STAFFS MANAGEMENT</span>
            <router-link to="/new-staffs" class="router"><button class="btn-add-new">ADD NEW</button></router-link>
        </div>
        <div class="staff-list">
            <div class="staff-box">
                
                <div class="staff-info head">
                    <span class="text title">No.</span>
                    <span class="text title">Name</span>
                    <span class="text title">Email</span>
                    <span class="text title">Phone</span>
                    <span class="text title">Role</span>
                </div>
                <router-link to="/update-staffs" class="router">
                    <div class="staff-info">
                        <span class="text">1.</span>
                        <span class="text">Le Minh Hoang</span>
                        <span class="text">admin@gmail.com</span>
                        <span class="text">0868253396</span>
                        <span class="text">ADMIN</span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</div>
    
</template>
<script>
import SideBar from "@/admin/SideBar"
export default {
    name : 'AdminStaff',
    components : {
        SideBar,
    }
}
</script>