<template>
<div class="admin">
    <SideBar />
    <div class="staff-container">
        <div class="staff-header">
            <span class="text title">PRODUCTS MANAGEMENT</span>
            <router-link to="/new-products" class="router"><button class="btn-add-new">ADD NEW</button></router-link>
        </div>
        <div class="staff-list">
            <div class="staff-box">
                
                <div class="staff-info head">
                    <span class="text title">No.</span>
                    <span class="text title">Images</span>
                    <span class="text title">Name</span>
                    <span class="text title">Price</span>
                    <span class="text title">Sale</span>
                </div>
                <router-link to="/update-products" class="router">
                    <div class="staff-info" v-for="product, id in products" :key="product.id">
                        <span class="text">{{id + 1}}.</span>
                        <span class="text">
                            <img :src="product.images[0].image_url"/>
                        </span>
                        <span class="text">{{product.name}}</span>
                        <span class="text">${{product.price}}</span>
                        <span class="text">${{product.price_sale}}</span>
                    </div>
                </router-link>
            </div>
        </div>
        <Pagination
            :length="totalItems"
            :pageSize="limit"
            :pageIndex="pageIndex"
            @change="changePage"
        />
    </div>
</div>
    
</template>
<script>
import { mapGetters, mapState, mapActions } from "vuex";
import Pagination from "@/components/Pagination.vue";
import SideBar from "@/admin/SideBar"
export default {
    name: 'AdminProduct',
    components: {
        SideBar,
        Pagination
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

    mounted(){
        console.log(this.totalItems)  
    },
    created() {
        this.$store.dispatch("products/getProducts", {});
    },
}
</script>

<style scoped>

.staff-info {
    display: grid;
    grid-template-columns: 10% 20% 40% 15% 15%;
    align-items: center;
    border-top: 1px solid #000;
    padding: 10px;
    cursor: pointer;
}

.staff-info img{
    height: 50px;
    width: 50px;
}
.head {
    border-top: none;
}

.head:hover {
    background-color: #fff;
}
</style>