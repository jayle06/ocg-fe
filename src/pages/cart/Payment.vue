<template>
    <div class="payment-form">
        <span class="text title">INFORMATIONS</span>
        <div class="form">
            <input type="text" v-model="full_name" placeholder="full name" />
            <input type="email" v-model="email" placeholder="email" />
            <input type="text" v-model="phone_number" placeholder="phone number" />
            <input type="text" v-model="address" placeholder="address" />
            <select v-model="payment" name="role">
                <option disabled value="">Payment methods</option>
                <option value="COD">COD</option>
                <option value="MOMO">MOMO</option>
            </select>
        </div>
        <div class="payment">
            <div class="text-payment">
                <span class="text">Total products</span>
                <span class="text">{{itemCount}}</span>
            </div>
            <div class="text-payment">
                <span class="text">Subtotal</span>
                <span class="text">{{formater(subTotal)}}đ</span>
            </div>
            <div class="text-payment">
                <span class="text">Shipping fee</span>
                <span class="text">{{formater(shipping)}}đ</span>
            </div>
            <div class="text-payment">
                <span class="text title">Total</span>
                <span class="text">{{formater(totalPrice)}}đ</span>
            </div>
        </div>
        <button @click="payToMoMo()" class="btn-checkout">CHECKOUT</button>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name: 'Payment',
    props : ["cart"],
    data() {
        return {
            full_name: "",
            email:"",
            phone_number:"",
            address:"",
            items: this.cart,
            payment: "",
        }
    },
    computed : {
        itemCount() {
            let count = 0;
            this.cart.filter(cart =>{
                count += cart.quantity;
                return count;
            })
            return count;
        },
        shipping() {
            let fee = 0;
            if (this.itemCount === 0) {
                fee = 0;
            } else {
                fee = 30000
            }
            return fee
        },
        subTotal() {
            let sum = 0;
            this.cart.filter((cart) => {
                if (cart.is_sale) {
                    sum += cart.price_sale * cart.quantity;
                } else {
                    sum += cart.price * cart.quantity;
                }
                return sum;
            });
            return sum;
        },
        totalPrice() {
            return this.subTotal + this.shipping;
        }
    },
    methods: {
        formater(numb) {
            numb = new Intl.NumberFormat().format(numb);
            return numb;
        },
        async payToMoMo() {
            let temp = [];
            for (let i = 0; i < this.items.length; i++) {
                let product = {
                    product_id : 0,
                    quantity : 0,
                };
                product.product_id = this.items[i].id;
                product.quantity = this.items[i].quantity;
                temp.push(product);
            }
            const order = {
                full_name : this.full_name,
                email: this.email,
                phone_number : this.phone_number,
                address : this.address,
                order_items : temp,
                total : this.totalPrice,
                payment : this.payment,
            };
            const data = {
                total : this.totalPrice.toString(),
                payment : this.payment,
            };
            if(data.payment === "MOMO"){
                await axios.post('http://localhost:10000/api/v1/payment', data, {withCredentials: true})
                .then((reponse) => {
                    window.open(reponse.data);
                });
                localStorage.setItem('order', JSON.stringify(order));
            }
            if(data.payment === "COD"){ 
                localStorage.setItem('order', JSON.stringify(order));
                await axios.post('http://localhost:10000/api/v1/orders', order, {withCredentials: true});
                await this.$router.push('payment-success');
            } else {
                alert("You need to choose payment method");
            }
        }
    }
}
</script>
