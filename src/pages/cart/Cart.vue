<template>
    <div class="cart-container">
        <div class="shopping-list">
            <div v-if="cart.length > 0">
                <div class="cart-product" v-for="(item, id) in cart" :key="id">
                    <div class="cart-content" >
                        <img :src="item.images[0].image_url" :alt="item.name" />
                        <div class="cart-product-content">
                            <span class="text title">{{item.name}}</span>
                            <div class="price">
                                <span class="text">Price:</span>
                                <span :class="{active: item.is_sale}" class="text">{{formater(item.price)}}đ</span>
                                <span :class="{hide: !item.is_sale}" class="text">{{formater(item.price_sale)}}đ</span>
                            </div>
                            <div class="cart-quantity">
                                <span class="text">Quantity:</span>
                                <input 
                                    type="number" 
                                    class="input-quantity" 
                                    step="1" 
                                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                    maxlength=2
                                    :value="item.quantity" 
                                    @input="updateQuantity(id, $event)" 
                                    @blur="checkQuantity(id, $event)"
                                />
                            </div>
                        </div>
                    </div>
                    <button class="btn-delete" @click="removeProduct(item.id)">x</button>
                </div>
            </div>
            <div v-else class="empty-cart">
                <span class="text title">There are no products in your cart.</span>
                <router-link to="/" class=""><button class="btn">Continue Shopping</button></router-link>
            </div>
        </div>
        <Payment :cart ="cart"/>
    </div>
</template>
<script>
import { mapMutations, mapState} from "vuex";
import Payment from "@/pages/cart/Payment"
export default {
    name:'Cart',
    components : {
        Payment
    },
    computed: {
        ...mapState("cart", ["cart"]),
    },
    methods : {
        formater(numb) {
            numb = new Intl.NumberFormat().format(numb);
            return numb;
        },
        updateQuantity(id, event) {
            let cart = this.cart[id];
            let value = event.target.value;
            let valueInt = parseInt(value);

            if (value === "") {
                cart.quantity = value;
            } else if (valueInt > 0 && valueInt < 100) {
                cart.quantity = valueInt;
            }
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },
        checkQuantity(id, event) {
            if (event.target.value === "") {
                let cart = this.cart[id];
                cart.quantity = 1;
            }
        },
        ...mapMutations("cart", ["removeProduct"]),
    },
}
</script>