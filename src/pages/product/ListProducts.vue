<template>
    <div class="list-products">
        <div class="box">
            <img 
                src="http://localhost:10000/images/Dep_adilette_Shower_DJen_GZ1013_02_standard_hover.jpg" 
                alt="shoes" 
            />
            <div class="box-content">
                <span class="text title">Adidas yezzy 700 black</span>
                <span class="text">Category</span>
                <span class="text">$999</span>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name : 'ListProducts',

}
</script>

<style scoped>
.list-products {
    display: flex;
    flex-wrap: wrap;
}
</style>