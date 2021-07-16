<template>
<div class="list">
    <div class="list-products">
            <div class="box" v-for="product in products" :key="product.id">
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
    <Pagination
        :length="totalItems"
        :pageSize="limit"
        :pageIndex="pageIndex"
        @change="changePage"
    />
</div>
</template>
<script>
import { mapGetters, mapState, mapActions } from "vuex";
import Pagination from "@/components/Pagination.vue";
export default {
    name : 'ListProducts',
    components : {
        Pagination,
    },
    computed: {
        ...mapState("products", [
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
    created() {
        this.$store.dispatch("products/getProducts", {});
    },
}
</script>

<style scoped>
.list{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.list-products {
    display: flex;
    flex-wrap: wrap;
    width: 1200px;
}
</style>