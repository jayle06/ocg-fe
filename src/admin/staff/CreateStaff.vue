<template>
    <div class="admin">
        <SideBar />
        <form @submit.prevent="submit" class="staff-update">
            <span class="text title">CREATE NEW STAFF</span>
            <div class="form">
                <input type="text" v-model="name" name="full_name" placeholder="full name" />
                <input type="email" v-model="email" name="email" placeholder="email" />
                <input type="text" v-model="phone_number" name="phone_number" placeholder="phone number" />
                <input type="password" v-model="password" name="password" placeholder="password" />
                <input type="password" v-model="password_confirm" name="password_confirm" placeholder="password_confirm"/>
            </div>
            <div class="btn-staff">
                <button type="submit" class="btn-update">Create</button>
                <button class="btn-cancel">Cancel</button>
            </div>
        </form>
    </div>
</template>
<script>
import SideBar from "@/admin/SideBar";
export default {
    name : 'CreateStaff',
    components : {
        SideBar
    },
    data() {
        return {
            name: "",
            email: "",
            phone_number: "",
            password: "",
            password_confirm: "",
        }
    },
    methods : {
        async submit() {
            const user = {
                name : this.name,
                email : this.email,
                phone_number : this.phone_number,
                password : this.password,
                password_confirm : this.password_confirm,
            }
            await this.$store.dispatch("users/createNewUser", user)
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