<template>
    <div>
        <div class="new-arrivals">
            <div class="title">
                <span class="text title">NEW ARRIVALS</span>
            </div>
        </div>
        <div class="new-arrivals">
            <div class="box" v-for="product in newArrivals" :key="product.id">
                <img 
                :src="product.images[0].image_url"
                :alt="product.name" 
            />
                <div class="box-content">
                    <router-link :to="'/products/' + product.id" class="router">
                        <span class="text title">{{product.name}}</span>
                    </router-link>
                    <div class="price">
                        <span :class="{active: product.is_sale}" class="text">{{formater(product.price)}}đ</span>
                        <span :class="{hide: !product.is_sale}" class="text">{{formater(product.price_sale)}}đ</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'NewArrivals',
    computed:{
        ...mapState("home",[
            "newArrivals"
        ])
    },
    methods:{
        ...mapActions("home", ["getNewArrivals"]),
        formater(numb) {
            numb = new Intl.NumberFormat().format(numb);
            return numb;
        },
    },
    created(){
        this.$store.dispatch("home/getNewArrivals", {});
    }


}
</script>