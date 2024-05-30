


<script >

import {addProduct} from "@/main.js";

 export default {
    
  data(){
      return{
        product:[],
     
}
  },
 

  methods: {
AddProductBasket(id){
    addProduct(this.product[id].title,this.product[id].body,this.product[id].price,
   this.product[id].imgUrl,this.product[id].id);
},

async loadProductBascet(){
    
    this.product[this._id]=({title:this.title, body:this.body, 
        price:this.price,imgUrl:this.imgUrl,id:this._id});
}

},
 mounted(){

     this.loadProductBascet()
 },


    props:{
        index:{
        type:Number,
        requared:true,    
    },
    imgUrl:{
        type:String,
        requared:true,    
    },
    title:{
        type:String,
        requared:true,
    },
    
    body:{
        type:String,
        requared:true,
    },
    isCan:{
        type:String,
        requared:true,
    },
    price:{
        type:Number,
        requared:true,
    },
    isStars:{
        type:Boolean,
        requared:true,
    },
    isPercent:{
        type:Boolean,
        requared:true,
    },
    
    percent:{
        type:Number,
        requared:true,
    },
    _id:{
        type:Number,
        requared:true,
    },
},



}

</script>
<template>
    
    <div  class="_card">
        
        <div v-if="isPercent" class="percent">Скидка {{this.percent}} %</div>
                   <img class="image_card" :src="imgUrl" alt="image">
                    <div class="card-items">
                        <div v-if="isStars"  class="star-image">
                            <img class="star" alt="star" src="../assets/img/star-on.png">
                            <img class="star" src="../assets/img/star-on.png">
                            <img class="star" src="../assets/img/star-on.png">
                            <img class="star" src="../assets/img/star-on.png">
                            <img class="star" src="../assets/img/star-on.png">
                        </div>
                        <h1>{{ this.title }}</h1>
                        <p>{{this.body}}</p>
                        <div class="footer-card-items">
                            <p>{{ this.isCan }}</p>
                            <p>{{ this.price }}₽</p>
                        </div>
                        <button :id="_id" @click="AddProductBasket($event.target.id)" class="btn-add_Basket">В корзину</button>
                    </div>
                </div>
                
</template>
<style scoped>



._card{
    box-shadow: 0px 0px 0px 1px #ECECEC;
    background: #FEFEFE;
    padding: 20px;
    width: 20em;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-right: 3.6em;
    margin-bottom: 2em;
}


.image_card{
  width: 100%;
}

.card-items {
    width: 100%;
 
}

.card-items h1, .card-items >p,.star-image{
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.card-items h1 {
    font-family: Open Sans;
font-size: 15.38px;
font-weight: 700;
line-height: 22.86px;
text-align: center;
color: #0E53A5;
}

.card-items>p {
    font-family: Open Sans;
font-size: 12px;
font-weight: 400;
line-height: 22.86px;
text-align: center;
color: #585656;
margin-bottom: 7em;
}

.footer-card-items {
    display: flex;
    justify-content: space-between;
}


.footer-card-items> p:first-child{
    color: #59B210;
    font-size: 18px;
}

.footer-card-items> p:last-child{
font-family: Open Sans;
font-size: 18px;
font-weight: 700;
line-height: 22.86px;
text-align: center;
}

.btn_menu_items{
    margin-left: 5em;
    margin-bottom: 1em;
}

.btn_menu{
    width: 10em;
    height: 49px;
    background-color: #DEDEE2;
    margin-left: 1em;
    color: #3D3D3D;
    transition: background-color,width 0.5s ease-in;
}

.btn-add_Basket{
    background: #0E53A5;
    color: white;
    border: none;
    width: 120px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 80px;
    margin-top: 10px;
}

.percent{
    width: 6em;
    height: 23px;
    color:white;
    background:#C71717;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 23px;
    margin-bottom: 10px;
}

.star-image{
    display: flex;
    flex-direction: row;
    margin-top: 9px;
}

.star{
    width: 20px;
    height: 20px;
}
</style>