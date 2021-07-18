<template>
    <div class="admin">
        <SideBar />
        <div class="staff-update">
            <span class="text title">STAFF INFOMATION</span>
            <div class="form">
                <input type="text" v-model="user.name" name="full_name" />
                <input type="email" v-model="user.email" name="email" />
                <input type="text" v-model="user.phone_number" name="phone_number" />
                <select>
                    <option value="ADMIN">ADMIN</option>
                    <option value="STAFF">STAFF</option>
                </select>
            </div>
            <div class="btn-staff">
                <button class="btn-update">Update</button>
                <button class="btn-cancel">Cancel</button>
                <button @click="deleteUser()" class="btn-delete">Delete</button>
            </div>
        </div>
    </div>
</template>
<script>
import SideBar from "@/admin/SideBar";
import { mapState } from "vuex";
export default {
    name : 'UpdateStaff',
    components : {
        SideBar
    },
    computed: {
        ...mapState("users", ["user"]),
    },
    created(){
        this.$store.dispatch("users/getUserById", this.$route.params.id);
    },
    methods: {
        async deleteUser() {
            await this.$store.dispatch("users/deleteUserById", this.$route.params.id);
            await this.$router.push("/admin-staffs");
        },
    }
}
</script>
<style scoped>

.btn-staff {
    display: flex;
    justify-content: space-between;
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
