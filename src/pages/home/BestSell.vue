<template>
    <div class="best-sell">
        <div class="title">
            <span class="text title">BEST SELL</span>
        </div>
    </div>
    <div class="best-sell" >
        <div class="box" v-for="product in bestSells" :key="product.id">
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
</template>
<script>

import { mapState, mapActions } from 'vuex'
export default {
    name : 'BestSell',
    computed:{
        ...mapState("home",[
            "bestSells"
        ])
    },
    methods:{
        ...mapActions("home", ["getBestSells"]),
        formater(numb) {
            numb = new Intl.NumberFormat().format(numb);
            return numb;
        },
    },
    created(){
        this.$store.dispatch("home/getBestSells", {});
    }
}
</script>