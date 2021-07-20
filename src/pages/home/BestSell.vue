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
                <span class="text">Category</span>
                <span class="text">{{product.price}}</span>
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
    },
    created(){
        this.$store.dispatch("home/getBestSells", {});
    }
}
</script>