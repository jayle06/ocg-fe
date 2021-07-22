<template>
    <div class="admin">
        <SideBar />
        <div class="staff-update">
            <span class="text title">STAFF INFOMATION</span>
            <div class="form">
                <input type="text" v-model="name" :placeholder="user.name" name="full_name" />
                <input type="email" v-model="email" :placeholder="user.email" name="email" />
                <input type="text" v-model="phone_number" :placeholder="user.phone_number" name="phone_number" />
                <select v-model="role" name="role">
                    <option disabled value="">{{user.role}}</option>
                    <option value="ADMIN">ADMIN</option>
                    <option value="STAFF">STAFF</option>
                </select>
            </div>
            <div class="btn-staff">
                <button @click="updateUserById()" class="btn-update">Update</button>
                <button @click="cancel()" class="btn-cancel">Cancel</button>
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
    data() {
        return {
            id: parseInt(this.$route.params.id),
            name : "",
            email: "",
            phone_number: "",
            role: "",
        };
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
        async updateUserById() {
            const user = {
                id : this.id,
                name : this.name,
                email : this.email,
                phone_number : this.phone_number,
                role: this.role,
            }
            await this.$store.dispatch("users/updateUserById", user);
            await this.$router.push("/admin-staffs");
        },
        async cancel() {
            await this.$router.push("/admin-staffs");
        }
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

<style scoped>
::placeholder{
    color: #2c3e50;
}
</style>
