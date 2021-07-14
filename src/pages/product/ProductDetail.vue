<template>
    <div class="product-detail">
        <div class="product-img">
            <div class="main-img">
                <img :src="setMainImage()" :alt="product.name" />
            </div>
            <div class="sub-img">
                <div v-for="img, id in product.images" :key="img.id">
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
            <button class="btn-add-to-cart">ADD TO CART</button>

            <span class="text">🚚 FREE DELIVERY</span>
            <span class="text">🧾 Wrong size or color? Please visit our Returns & Refunds page for details</span>
            <div class="description">
                <span class="text title">Description</span>
                <span class="text">{{product.description}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'ProductDetail',
    data() {
        return {
            product : {
                id : 1,
                name : "ADIDAS YEZZY BOOST 700 BLACK",
                price: 999,
                images : [
                    {
                        id: 1,
                        image_url: "http://localhost:10000/images/Dep_adilette_Shower_DJen_GZ1013_02_standard_hover.jpg"
                    },
                    {
                        id: 2,
                        image_url: "http://localhost:10000/images/4.jpg"
                    }
                ],
                description : "Stepping out of the bathroom is just the beginning of the morning — but don't let the comfort dissipate as soon as you step out of the house. These adidas sandals let you enjoy the comforts of home all day long. The quick-drying strap makes it convenient for you to bring your slippers from the bathroom to the street. The classic student color scheme brings a sporty yet versatile look to your outfit."
            },
            quantity : 1,
            mainImage : "",
            imgId: 0,
        };
    },
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
            return this.mainImage = this.product.images[this.imgId].image_url;
        },
        getImageId(id){
            return this.imgId = id;
        }
    },
}
</script>
