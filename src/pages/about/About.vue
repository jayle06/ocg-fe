<template>
    <div class="about">
        <div class="about-img">
            <img src="@/assets/adidas.jpg" />
        </div>
        <div class="about-content">
            <span class="text title head">
                ADIDAS FAST OUT OF THE GATE IN 2021; FULL-YEAR OUTLOOK UPGRADED
            </span>
            <span class="text title">
                Currency-neutral revenues increase 27% with footwear up 31%
            </span>
            <span class="text">  
                In the first quarter, currency-neutral revenues grew 27%. This growth was achieved against the backdrop of prolonged lockdowns in Europe and industry-wide supply-chain challenges, which reduced currency-neutral revenue growth by a high-single-digit rate during the quarter. From a channel perspective, the company’s top-line increase was led by exceptional improvements in direct-to-consumer (DTC) revenues, which were up 31% and accounted for more than one-third of total sales. This development is a direct result of strong sell-through trends, as the brand’s products resonate well with consumers globally. Within DTC, e-commerce again showed particular strength as sales were driven by an exceptional increase in full-price revenues. E-commerce sales rose 43% on top of 35% growth in the prior year quarter, thereby almost doubling over the two-year period. Globally, revenue growth was strongest in footwear with a 31% increase and driven by double-digit gains in the training, running, outdoor and lifestyle categories. In euro terms, the company’s revenues grew 20% in the first quarter to € 5.268 billion (2020: € 4.381 billion). 
            </span>
            <span class="text title">
                Growth in all market segments
            </span>
            <span class="text">
                The top-line expansion in the first quarter was driven by increases in all market segments. Across the company’s three strategic markets, currency-neutral sales expanded at a triple-digit rate in Greater China (+156%) and increased in the high-single-digits in both North America (+8%) and EMEA (+8%). Revenues were up 18% in Latin America and increased 4% in Asia-Pacific. Out of the market segments, EMEA was most negatively impacted by prolonged lockdowns which decreased the store opening rate in Europe to below 50% in March. The company’s global store opening rate stood at 89% at the end of the first quarter.  
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name : 'About'
}
</script>

<style scoped>
.about {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    padding-top: 110px;
}

.about-img img {
    width: 600px;
    height: 600px;
    margin-right: 30px;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
}

.head {
    font-size: 30px;
    margin-bottom: 30px;
}
.about-content {
    display: flex;
    flex-direction: column;
    width: 600px;
}
</style>