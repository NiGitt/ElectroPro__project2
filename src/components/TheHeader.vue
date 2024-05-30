<script>
import {Count} from '@/main.js'
export default{
    data(){
        return{
            isActive:false,
            count:0,
            width: 0,
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.width = window.innerWidth;
        }
    },

}
</script>

<template>





    <header>        
     <div class="header-items__logo">
            <RouterLink  :to="{name:'home'}" class="logo"><img src="../assets/img/logo.png" alt="Logo"></RouterLink>
            <div class='header-item_logo'>
                <div class='header-item_logo-1'>
                        <img src="../assets/img/MarkerMap.png" id="marker" alt="marker map">
                        <p><span>Томск</span> пр. Комсомольский 53</p>
                </div>
                <div class='header-item_logo-2'>
                    <div>
                        <img src="../assets/img/call.png" alt="call" id="call" >
                        <p>(3822) 67-95-85</p>
                    </div>
                    <div>
                        <img alt="email" src="../assets/img/email.png" id="email">
                        <p>elpro@shop.ru</p>
                    </div>
                </div>
                <div class="header-search">
                    <input class="header-input_search" type="text" placeholder="Поиск">
                     <button class="header-btn_search">
                        <img class="search" src="../assets/img/search.png" alt="search">
                     </button>
                </div>
            </div>
    </div>

<div class="wrapper">
    <div class="header-items__info">
        
        <form @submit.prevent="false" v-if="isActive" class="menu-form">
           <h1 class="menu-form-header">Обратная связь</h1>
            <ul class="menu-form-items">
               <li>
                <div>
                    <p class="menu-form-text star-menu-header">Имя<span >*</span></p>
                    <input type="text" class="menu-form-input">
                </div>
                <div>
                    <p class="menu-form-text star-menu-header" >Город<span >*</span></p>
                    <input type="text" class="menu-form-input" placeholder="Томск">
                </div>
               </li>

               <li>
                <p class="menu-form-text star-menu-header">E-mail и/или контактный телефон </p>
                <input type="text" class="menu-form-input">
               </li>

               <li>
                <p class="menu-form-text star-menu-header">Тема</p>
                <input type="text" class="menu-form-input">
               </li>

               <li>
                <p class="menu-form-text star-menu-header">Сообщение<span >*</span></p>
                <textarea class="menu-form-textarea"></textarea>
               </li>

               <li>
                <button @click="isActive=false" class="btn-form btn-form-close">Закрыть</button>
                <button @click="isActive=false" class="btn-form btn-form-submit">Отправить</button>
               </li>

            </ul>
        </form>


            
               
               <div class="header-items-info-right">
                <RouterLink  :to="{name:'bascet'}" id="bascet">
                        
                    </RouterLink>
        <button  class="btn-header_info" @click="isActive = true">Обратная связь</button> 
  
               
        </div>
            
            
    </div>
</div>
    </header>

    
</template>


<style scoped>
header{
    width: 100%;
    height: 206px;
    border-bottom: 1px solid rgba(5, 204, 232, 1);
    background-color: rgba(5, 204, 232, 1);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.wrapper{
    position: relative;
    flex-wrap: wrap;
}


.header-items__logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-right: 5em;
    color:#2044A3;
   flex-wrap: wrap;
}

.header-basket_adaptive{
    display: flex;
    flex-direction: column;
}

.logo{
    margin-right: 20px;
}

.header-item_logo-1 {
    margin-bottom: 10px;
}

.header-item_logo-2{
    margin-bottom: 12px;
}

.header-item_logo-1, .header-item_logo-2 ,
.header-item_logo-2 div {
    display: flex;
    flex-direction: row;
} 
.header-item_logo-2 div:first-child{
    margin-right: 15px;
}

.header-item_logo-1 > p> span {
   margin-right: 10px;
   margin-left: 2px;
}



#marker{
    width: 11.43px;
    height: 17.4px;
    margin-right: 10px;
}


#call{
    width: 15.30px;
    height: 20px;
    margin-right: 10px;
}

.header-item_logo-1{
    display: flex;
    flex-direction: row;
} 

#email{
    width: 20px;
    height: 20px;
    margin-right: 10px;
}

.header-search{
display: flex;
flex-direction: row;
align-items: center;
}

.header-input_search {
width: 25em;
height: 36px;
border: none;
padding-left: 10px;
}
.header-btn_search{
    width: 36px;
   height: 36px;
   border: none;
   background: rgba(32, 68, 163, 1);
}

.header-items__info{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.btn-header_info{
    background-color: red;
   background: rgba(32, 68, 163, 1);
   width: 150px;
   height: 30px;
   margin-right: 3em;
   color: white;
}
.header-bascet_info p:first-child {
margin-bottom: 10px;
}

.header-bascet_info p:last-child{
    font-size: 18px;
    color:#2044A3;
}

#bascet{
    width: 51px;
    height: 49px;
    background: none;
    background-image: url('../assets/img/icon-cart.jpg');
    margin-right: 20px;
}

.bascet-counter{
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: 25px;
    right: 90px;
    background: rgba(32, 68, 163, 1);
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;
}

.menu-form{
    position: absolute;
    padding: 30px;
    z-index: 99;
    background-color: #ffffff;
    right: 280px;
    top: 25px;
}



.menu-form-items{
    list-style-type: none;
}

.menu-form-items li:not(.menu-form-items li:last-child, 
.menu-form-items li:nth-child(4)){
    margin-bottom:30px;
}


.menu-form-items li:first-child{
    display: flex;;
}

.menu-form-items li:first-child div:first-child{
    margin-right: 40px;
}

.menu-form-items li:first-child div:last-child > input {
    padding-left: 5px;
}
.menu-form-items li:last-child{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 1em;
}

.menu-form-header{
    color: #6A6464;
    font-weight: 700;
    font-size: 17px;
    margin-bottom: 25px;
}

.menu-form-text{
    font-family: Open Sans;
font-size: 15px;
font-weight: 700;
line-height: 24.29px;
text-align: right;
}

.star-menu-header{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
}

.star-menu-header >span {
    color:#2044A3;
    font-family: Open Sans;
font-size: 17px;
font-weight: 700;
line-height: 24.29px;
text-align: right;

}

.menu-form-textarea{
    width: 25em;
    height: 196px;
    margin: 0;
}

.btn-form {
  width: 8em;
  height: 34px;
  border-radius: 10px;
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

.btn-form-close{
background: #807B7B;
color:white;
}
.btn-form-submit{
    background: #2044A3;
    color: #FFF8F8;

}

.menu-form-input{
    border: 1px solid #0000004D;
    background: #FFFFFF;
    height: 21.16px;
    width: 100%;
    border-radius:5px;
}

.header-items-info-right{
display: flex;
flex-wrap: wrap;
justify-content: center;
}

#bascet{
    margin-bottom:50px;
}

</style>