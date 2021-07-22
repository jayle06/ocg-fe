<template>
<div class="admin">
    <SideBar />
    <div class="staff-container">
        <div class="staff-header">
            <span class="text title">PRODUCTS MANAGEMENT</span>
            <router-link to="/new-products" class="router"><button class="btn-add-new">ADD NEW</button></router-link>
            <router-link to="/csv-products" class="router"><button class="btn-add-new">IMPORT PRODUCTS BY CSV</button></router-link>
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
                <router-link to="#" class="router">
                    <div class="staff-info" v-for="product, id in products" :key="product.id">
                        <span class="text">{{id + 1}}.</span>
                        <span class="text">
                            <img :src="product.images[0].image_url"/>
                        </span>
                        <span class="text">{{product.name}}</span>
                        <span class="text">{{formater(product.price)}}đ</span>
                        <span class="text">{{formater(product.price_sale)}}đ</span>
                    </div>
                </router-link>
            </div>
        </div>
        <Pagination
            class="pagin"
            :length="totalItems"
            :pageSize="12"
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
        formater(numb) {
            numb = new Intl.NumberFormat().format(numb);
            return numb;
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

.pagin{
    display: flex;
    justify-content: center;
    /* align-items: center; */
    /* width: 100%; */
}

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