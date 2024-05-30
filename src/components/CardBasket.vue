<template>
   <div class="not_product" v-if="product.length<1">
     <img src="../assets/img/imgAS.png" alt="not_Product">
     Корзина пуста
   </div>
    <button v-if="product.length>0" @click="Clear" class="clear-btn">Очистить</button>
    <div class="_wrapper">
    <div v-for="el in product" :key="el.id" class="card">
        <img class="card-image" :src="el.imageUrl" alt="image">
        <div class="content">
            <h1>{{ el.title }}</h1>
            <p >{{el.body}}</p>
            <p class="card-title-text"><b>Стоймость:</b>{{el.price}}</p>
            <p class="card-title-text"><b>Кол-во:</b>{{el.CountProduct}}</p>
        </div>
        <div class="function_card">
            <button class="btn_function remove-btn" :id="el.index" @click="romoveObj($event.target.id)">-</button>
            <button class="btn_function add-btn" :id="el.index" @click="addObj($event.target.id)">+</button>
        </div>
    </div>
</div>

</template>


<script >

import {Products,removeProduct,addCount,clear} from "@/main.js";
export default{
     data(){
        return{
            product:[],
        }
     },
     methods:{
        romoveObj(id){
          removeProduct(id);
        },
        Clear(){
            clear();
        },
        addObj(id){
            addCount(id);
        },
       async loadProductBascet(){
        this.product = Products;
       }
     },
     mounted(){
       this.loadProductBascet();
     }

}
</script>

<style scoped>

._wrapper{
    display: flex;
    flex-direction: row;
}

.content{
    display:flex;
    flex-direction: column;
}

.card-image {
    width: 150px;
    height: 150px;
    margin-bottom: 40px;
}

.card{
    box-shadow: 0px 0px 0px 1px #ECECEC;
    background: #FEFEFE;
    padding: 20px;
    width: 20em;
    height: 50vh;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-right: 3.6em;
    margin-bottom: 2em;
}


.card-title-text{
    margin-top: 10px;
    font-size: 20px;
}




.function_card{
    display: flex;
}

.btn_function{
width: 100px;
height: 20px;
margin-left: 30px;
margin-top: 10px;
border-radius: 5px;
  margin-right: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Open Sans;
font-size: 15px;
font-weight: 700;
line-height: 24.29px;
text-align: right;
}

.remove-btn {
background: #807B7B;
color:white;
}

.add-btn{
    background: #2044A3;
    color: #FFF8F8;
}

.clear-btn{
    width: 100px;
    height: 30px;
    background: #2044A3;
    color: white;
    margin-bottom: 2em;
}

.not_product{
  font-weight: bold;
  margin-left: 10em;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}


</style>