<template>
    <div class="admin lookup">
        <div class="looking-order">
            <div class="create-header">
                <span class="text title">LOOKING FOR YOUR ORDERS</span>
            </div>
            <div class="product-info">
                <div class="form">
                    <span class="text">Please enter your email and your phone!</span>
                    <input type="email" placeholder="email" v-model="searchEmail"/>
                    <input type="text" placeholder="phone number" v-model="searchPhone"/>
                </div>
            </div>
            <div class="btn-staff">
                <router-link to="/orders" class="router"><button class="btn" @click="setInfo">Submit</button></router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'Lookup',
    data() {
        return {
            searchEmail: "",
            searchPhone: ""
        };
    },
    methods:{
        setInfo(){
            this.$store.dispatch("order/setInfo", {
                email: this.searchEmail,
                phone: this.searchPhone,
            })
        }
    }
}
</script>

<style scoped>
.lookup{
    justify-content: center;
}
.looking-order {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
    padding: 30px;
    width: 800px;
    height: 500px;
}
</style>