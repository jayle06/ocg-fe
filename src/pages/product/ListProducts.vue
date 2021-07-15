<template>
    <div class="list-products" >
        <!-- <div v-for="product in products" :key="product.id"> -->
            <div class="box" v-for="product in products"
                    :key="product.id">
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
    <!-- </div> -->
</template>
<script>
import { mapGetters, mapState, mapActions } from "vuex";
export default {
    name : 'ListProducts',

    computed: {
        ...mapState("products", [
        "isLoading",
        "products",
        "totalItems",
        "pageIndex",
        "limit",
        ]),
        ...mapGetters("products", [
        "sortDropdownValue",
        "itemStartIndex",
        "itemEndIndex",
        ]),
    },

    methods:{
        sortProducts(option) {
        const options = option.value.split("-");
        const sort = options[0],
        order = options[1];
        this.$store.dispatch("products/getProducts", { sort, order });
    },
    changePage(pageIndex) {
        this.$store.dispatch("products/getProducts", { pageIndex });
    },
    ...mapActions("products", ["getProducts"]),
    },

    mounted(){
        console.log(this.totalItems)  
    },
    created() {
        this.$store.dispatch("products/getProducts", {});
    },
}
</script>

<style scoped>
.list-products {
    display: flex;
    flex-wrap: wrap;
}
</style>