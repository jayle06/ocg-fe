<template>
<div>
    <div class="product-detail">
        <div class="product-img">
            <div class="main-img">
                <img :src="setMainImage()" :alt="product.name" />
            </div>
            <div class="sub-img">
                <div v-for="img, id in images" :key="img.id">
                    <img :src="img.image_url" @click="getImageId(id)" />
                </div>
            </div>
            
        </div>

        <div class="product-content">
            <span class="text title">{{product.name}}</span>
            <span class="text">Price: ${{product.price}}</span>
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
import { mapState } from "vuex";
export default {
    name : 'ProductDetail',
    data() {
        return {
            images : [],
            quantity : 1,
            mainImage : "",
            imgId: 0,
        };
    },
    computed: mapState("products", ["products", "product"]),
    methods: {
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
        setMainImage() {
            return this.mainImage = this.images[this.imgId].image_url;
        },
        getImageId(id){
            return this.imgId = id;
        },
        addToCart() {
            this.$store.commit('cart/addToCart', this.product);
        }
    },
    created(){
        this.$store.dispatch("products/getProductById", this.$route.params.id);
        this.images = this.product.images || [
            {image_url:"https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"}
        ];
    },
}
</script>
