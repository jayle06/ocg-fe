<template>
    <div class="admin">
        <SideBar />
        <div class="staff-update">
            <span class="text title">STAFF INFOMATION</span>
            <div class="form">
                <input type="text" placeholder="full name" />
                <input type="email" placeholder="email" />
                <input type="text" placeholder="phone number" />
                <input type="text" placeholder="address" />
            </div>
            <div class="btn-staff">
                <button class="btn-update">Update</button>
                <button class="btn-cancel">Cancel</button>
            </div>
            
            <span class="text title head">CHANGE PASSWORD</span>
            <div class="form">
                <input type="password" placeholder="new password" />
                <input type="password" placeholder="confirm new password" />
            </div>
            <div class="btn-staff">
                <button class="btn-update">Update</button>
                <button class="btn-cancel">Cancel</button>
            </div>
        </div>
    </div>
</template>
<script>
import SideBar from "@/admin/SideBar"
export default {
    name : 'Profile',
    components : {
        SideBar
    }
}
</script>
<style scoped>

.head {
    margin-top: 30px;
}

.btn-staff {
    display: flex;
    justify-content: space-around;
}

.btn-staff button {
    border: none;
    color: #fff;
    cursor: pointer;
    height: 40px;
    width: 80px;
}

.btn-update {
    background-color: #16a085;
}

.btn-cancel {
    background-color: #f39c12;
}

.btn-delete {
    background-color: #c0392b;
}
</style>