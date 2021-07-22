<template>
<div>
    <div class="product-detail">
        <div class="product-img">
            <div class="main-img">
                <img :src="mainImage" :alt="mainImage" />
            </div>
            <div class="sub-img">
                <div v-for="img in product.images" :key="img">
                    <img :src="img.image_url" @click="getImageId(img)" />
                </div>
            </div>
            
        </div>

        <div class="product-content">
            <span class="text title">{{product.name}}</span>
            <div class="price">
                <span class="text">Price:</span>
                <span :class="{active: product.is_sale}" class="text">{{formater(product.price)}}đ</span>
                <span :class="{hide: !product.is_sale}" class="text">{{formater(product.price_sale)}}đ</span>
            </div>
            <div class="quantity">
                <div class="text">Quantity:</div>
                <div class="quantity-input">
                    <button @click="minusQuantity"> - </button>
                    <input 
                        type="number" 
                        class="input-quantity" 
                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                        v-model="quantity"
                        maxlength="2"/>
                    <button @click="plusQuantity"> + </button>
                </div>
            </div>
            <button class="btn-add-to-cart" @click="addToCart">ADD TO CART</button>

            <span class="text">🚚 FREE DELIVERY</span>
            <span class="text">🧾 Wrong size or color? Please visit our Returns, Refunds page for details</span>
            <div class="description">
                <span class="text title">Description</span>
                <span class="text">{{product.description}}</span>
            </div>
        </div>
    </div>
</div>
    
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
    name : 'ProductDetail',
    data() {
        return {
            quantity : 1,
            imgId: 0,
        };
    },
    computed: {
        ...mapState("products", ["product", "mainImage"]),
    },
    methods: {
        ...mapMutations("products", ["setMainImage"]),
        plusQuantity() {
            if(this.quantity >= 99) {
                this.quantity = 99;
            } else {
                this.quantity++;
            }
            return this.quantity
        },
        minusQuantity() {
            if(this.quantity <= 1) {
                this.quantity = 1;
            } else {
                this.quantity--;
            }
            return this.quantity
        },
        getImageId(img){
            this.setMainImage(img.image_url)
        },
        addToCart() {
            this.$store.commit('cart/addToCart', this.product);
        },
        formater(numb) {
            numb = new Intl.NumberFormat().format(numb);
            return numb;
        },
    },
    created(){
        this.$store.dispatch("products/getProductById", this.$route.params.id);
    },
}
</script>

<style scoped>
.active {
    color: red;
    text-decoration: line-through;
    margin-right: 5px;
}
.hide {
    display: none;
}
</style>
