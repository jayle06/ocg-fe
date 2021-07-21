<template>
    <div >
        <div v-if="errorCode === '0'">
            <PaymentSuccess />
        </div>
        <div v-else>
            <PaymentFalse />
        </div>
    </div>
</template>
<script>
import axios from "axios";
import PaymentSuccess from "@/pages/notify/PaymentSuccess";
import PaymentFalse from "@/pages/notify/PaymentFalse";
export default {
    name: 'Redirect',
    components : {
        PaymentSuccess,
        PaymentFalse,
    },
    data() {
        return{
            errorCode : "",
        }
    },
    created() {
        this.errorCode = this.$route.query.errorCode;
        if(this.errorCode === '0') {
            let order = JSON.parse(localStorage.getItem('order'));
            axios.post('http://localhost:10000/api/v1/orders', order, {withCredentials: true}).then(response => {
                console.log(response.data);
            })
        }
    }
}
</script>
