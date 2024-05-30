<script>


import CardBasket from '@/components/CardBasket.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';
export default{
components:{TheHeader,TheFooter,CardBasket}
}

</script>
<template>
    
    <TheHeader></TheHeader>
    <div class="wrapper">
        <div class="container">
            <CardBasket></CardBasket>
        </div>
    </div>
    <TheFooter></TheFooter>
</template>

<style scoped>
.wrapper{
    width: 100%;
    height: 100%;
    margin-top: 10em;
    margin-bottom: 10em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.container{
width: 80%;
height: 100%;
display: flex;
flex-direction: column;
flex-wrap: wrap;
}






</style>

