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
                    <span class="text title">{{product.name}}</span>
                    <span class="text">Category</span>
                    <span class="text">{{product.price}}</span>
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
    },
    created(){
        this.$store.dispatch("home/getNewArrivals", {});
    }


}
</script>