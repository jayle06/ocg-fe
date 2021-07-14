<template>
    <div class="login"> 
        <div class="login-contaier">
            <div class="login-form">
                <span class="text title">SIGN IN</span>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <button class="btn-add-to-cart">SIGN IN</button>
            </div>
            <div class="login-img">
                <img src="@/assets/logo.png"/>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Login'
}
</script>
<style scoped>
.login{
    display: flex;
    justify-content: center;
    padding-top: 110px;
}
</style>