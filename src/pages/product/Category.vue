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
        <span class="text">Men</span>
        <span class="text">Women</span>
        <span class="text">Kid</span>
        <span class="text">Shoes</span>
        <span class="text">Clothing</span>

        <div class="search">
            <input type="text" placeholder="search..." />
            <button type="submit">
                <img src="@/assets/icons/search-icon.png" />
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Category'
}
</script>