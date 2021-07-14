<template>
    <div class="products">
        <Category />
        <ListProducts />
    </div>
</template>
<script>
import Category from "@/pages/product/Category";
import ListProducts from "@/pages/product/ListProducts";

export default {
    name : 'Products',
    components : {
        Category,
        ListProducts
    }
}
</script>

<style scoped>
.products {
    display: flex;
    padding-top: 110px;
}
</style>