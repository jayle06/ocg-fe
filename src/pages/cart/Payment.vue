<template>
    <div class="payment-form">
        <span class="text title">INFORMATIONS</span>
        <div class="form">
            <input type="text" placeholder="full name" />
            <input type="email" placeholder="email" />
            <input type="text" placeholder="phone number" />
            <input type="text" placeholder="address" />
            <select value="Payment methods">
                <option value="COD">COD</option>
                <option value="Momo">Momo</option>
            </select>
        </div>
        <div class="payment">
            <div class="text-payment">
                <span class="text">Total products</span>
                <span class="text">{{itemCount}}</span>
            </div>
            <div class="text-payment">
                <span class="text">Subtotal</span>
                <span class="text">${{subTotal}}</span>
            </div>
            <div class="text-payment">
                <span class="text">Shipping fee</span>
                <span class="text">${{shipping}}</span>
            </div>
            <div class="text-payment">
                <span class="text title">Total</span>
                <span class="text">${{totalPrice}}</span>
            </div>
        </div>
        <router-link to="/bill" class="router">
            <button class="btn-checkout">CHECKOUT</button>
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'Payment',
    props : ["cart"],
    data() {
        return {
            full_name: "",
            email:"",
            phone_number:"",
            address:"",
            order_items: [],
            total: 0,
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
                fee = 10
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
}
</script>
