<template>
    <form @submit.prevent="login" class="login"> 
        <div class="login-contaier">
            <div class="login-form">
                <span class="text title">SIGN IN</span>
                <input type="email" v-model="email" placeholder="email" />
                <input type="password" v-model="password" placeholder="password" />
                <button type="submit" class="btn-add-to-cart">SIGN IN</button>
            </div>
            <div class="login-img">
                <img src="@/assets/logo.png"/>
            </div>
        </div>
    </form>
</template>
<script>
import { mapState} from "vuex";
import axios from "axios"
export default {
    name: 'Login',
    data() {
        return {
            email: "",
            password: "",
        };
    },
    computed: mapState("users", ["isLoginSuccess", "loginMessage"]),
    created() {
        if (this.isLoginSuccess) {
            this.$router.replace("/dashboard");
        }
    },
    methods: {
        async login() {
            await axios.post('http://localhost:10000/login', {
                email: this.email,
                password: this.password,
            }, {withCredentials: true});

            if (this.isLoginSuccess) {
                this.$router.push("/dashboard");
            }
        },
    },
}
</script>
<style scoped>
.login{
    display: flex;
    justify-content: center;
    padding-top: 110px;
}
</style>