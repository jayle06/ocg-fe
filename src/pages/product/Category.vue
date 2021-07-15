<template>
    <div class="category-container">
        <div class="sort">
            <select>
                <option>By price low to hight</option>
                <option>By price hight to low</option>
            </select>
        </div>
        <span class="text title">Categories</span>
        <span class="text">All</span>
        <span class="text" v-for="category in categories" :key="category"
            @click="setCategory($event, category)">
            {{category.name}}</span>

        <div class="search">
            <input type="text" placeholder="search..." />
            <button type="submit">
                <img src="@/assets/icons/search-icon.png" />
            </button>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'Category',

    computed:{
        ...mapState("products",[
            "categories",
        ])
    },
    methods:{
        setCategory(event, category){
            event.preventDefault();
            this.$store.dispatch("products/getProducts", {
                pageIndex: 1,
                category
            });
        }
    },
    created(){
        this.$store.dispatch("products/getCategories", {});
    }
}
</script>