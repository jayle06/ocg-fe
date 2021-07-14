<template>
    <div class="cart-container">
        <div class="shopping-list">
            <div v-if="products.length > 0">
                <div class="cart-product" v-for="(product, id) in products" :key="product.id">
                    <div class="cart-content" >
                        <img :src="product.images[0].image_url" :alt="product.name" />
                        <div class="cart-product-content">
                            <span class="text title">{{product.name}}</span>
                            <span class="text">Price: ${{product.price}}</span>
                            <div class="cart-quantity">
                                <span class="text">Quantity:</span>
                                <input 
                                    type="number" 
                                    class="input-quantity" 
                                    step="1" 
                                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                    maxlength=2
                                    :value="product.quantity" 
                                    @input="updateQuantity(id, $event)" 
                                    @blur="checkQuantity(id, $event)"
                                />
                            </div>
                        </div>
                    </div>
                    <button class="btn-delete" @click="removeItem(id)">x</button>
                </div>
            </div>
            <div v-else class="empty-cart">
                <span class="text title">There are no products in your cart.</span>
                <router-link to="/" class=""><button class="btn">Continue Shopping</button></router-link>
            </div>
        </div>
        <Payment :products ="products"/>
    </div>
</template>
<script>
import Payment from "@/pages/cart/Payment"
export default {
    name:'Cart',
    components : {
        Payment
    },
    data() {
        return {
            products: [
                {
                    id : 1,
                    name : "ADIDAS YEZZY BOOST 700",
                    price: 1000,
                    images : [
                        {
                            id: 1,
                            image_url: "http://localhost:10000/images/1.jpg",
                        }
                    ],
                    quantity: 1,
                },
                {
                    id : 1,
                    name : "ADIDAS YEZZY BOOST 700",
                    price: 1000,
                    images : [
                        {
                            id: 1,
                            image_url: "http://localhost:10000/images/1.jpg",
                        }
                    ],
                    quantity: 1,
                },
            ],
            
        }
    },
    methods : {
        removeItem(index) {
            this.products.splice(index, 1);
        },
        updateQuantity(id, event) {
            let product = this.products[id];
            let value = event.target.value;
            let valueInt = parseInt(value);
            if (value === "") {
                product.quantity = value;
            } else if (valueInt > 0 && valueInt < 100) {
                product.quantity = valueInt;
            }

        },
        checkQuantity(id, event) {
            if (event.target.value === "") {
                let product = this.products[id];
                product.quantity = 1;
            }
        },
    }
}
</script>