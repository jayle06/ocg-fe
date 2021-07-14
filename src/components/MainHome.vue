<template>
    <div>
        <Banner />
        <Categories />
        <BestSell />
        <NewArrivals />
    </div>
</template>
<script>
import Banner from "@/pages/home/Banner"
import Categories from "@/pages/home/Categories"
import BestSell from "@/pages/home/BestSell"
import NewArrivals from "@/pages/home/NewArrivals"
export default {
    name : 'MainHome',
    components : {
        Banner,
        Categories,
        BestSell,
        NewArrivals
    }
}
</script>