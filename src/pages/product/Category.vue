<template>
    <div class="category-container">
        <div class="sort">
            <select @change="sortProducts($event)">
                <option value="asc">By price low to hight</option>
                <option value="desc">By price hight to low</option>
            </select>
        </div>
        <span class="text title">Categories</span>
        <span class="text" @click="setCategory($event, {})">All</span>
        <span class="text" v-for="category in categories" :key="category"
            @click="setCategory($event, category)">
            {{category.name}}</span>

        <div class="search">
            <input type="text" placeholder="search..." v-model="searchKeyword"
        @keypress.enter="searchProducts" />
            <button type="submit" @click="searchProducts">
                <img src="@/assets/icons/search-icon.png" />
            </button>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'Category',

    data() {
        return {
            searchKeyword: "",
        };
    },
    computed:{
        ...mapState("products",[
            "categories",
            "order"
        ])
    },
    methods:{
        setCategory(event, category){
            event.preventDefault();
            this.$store.dispatch("products/getProducts", {
                pageIndex: 1,
                category
            });
        },
        searchProducts() {
            this.$store.dispatch("products/getProducts", {
                pageIndex: 1,
                search: this.searchKeyword,
            });
        },
        sortProducts(event){
            console.log(event.target.value)
            this.$store.dispatch("products/getProducts", {
                pageIndex: 1,
                order: event.target.value,
            });
        }
    },
    created(){
        this.searchKeyword = this.search;
        this.$store.dispatch("products/getCategories", {});
    }
}
</script>