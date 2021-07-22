<template>
    <div class="admin">
        <SideBar />
        <div class="staff-update">
            <div class="head">
                <span class="text title">STAFF INFOMATION</span>
                <div class="form">
                    <input type="text" v-model="name" :placeholder="profiles.name"  name="name"/>
                    <input type="text" v-model="phone_number" :placeholder="profiles.phone_number" name="phone_number"/>
                    <input type="email" v-model="email" :placeholder="profiles.email" name="email"/>
                </div>
                <div class="btn-staff">
                    <button @click="updateProfile()" type="submit" class="btn-update">Update</button>
                    <button @click="cancel()" class="btn-cancel">Cancel</button>
                </div>
            </div>
            <div>
                <span class="text title">CHANGE PASSWORD</span>
                <div class="form">
                    <input type="password" v-model="password" placeholder="new password" />
                    <input type="password" v-model="password_confirm" placeholder="confirm new password" />
                </div>
                <div class="btn-staff bottom">
                    <button @click="updatePassword()" type="submit" class="btn-update">Update</button>
                    <button @click="cancel()" class="btn-cancel">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
import SideBar from "@/admin/SideBar"
export default {
    name : 'Profile',
    data() {
        return {
            name : "",
            email: "",
            phone_number: "",
            password : "",
            password_confirm : "",
        };
    },
    components : {
        SideBar
    },
    computed: {
        ...mapState("users", ["profiles"]),
    },
    created(){
        this.$store.dispatch("users/getProfiles", {});
    },
    methods : {
        async updateProfile() {
            const user = {
                name : this.name,
                email : this.email,
                phone_number : this.phone_number,
            }
            await this.$store.dispatch("users/updateProfiles", user);
            await this.$router.push("/dashboard");
        },
        async updatePassword() {
            const payload = {
                password: this.password,
                password_confirm: this.password_confirm,
            }
            await this.$store.dispatch("users/updatePassword", payload);
            await this.$router.push("/dashboard");
        },
        async cancel() {
            await this.$router.push("/dashboard");
        }
    }
}
</script>
<style scoped>

.head{
    margin-bottom: 30px;
}

::placeholder{
    color: #2c3e50;
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