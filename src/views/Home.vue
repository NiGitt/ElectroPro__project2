<script>


import TheHeader from '../components/TheHeader.vue';

import TheFooter from '../components/TheFooter.vue';
import TheCard from '../components/Card.vue';



export default{
    components:{TheHeader,TheFooter,TheCard},
    data(){
        return{
           cardsHome:[
            {id:0,
             imgUrl:"../src/assets/img/image13.png",
             title:'Бирюса М109',
             body:'ХОЛОДИЛЬНИКИ БИРЮСА',
             isCan:'В наличии',
             price:13770,
             isStars:false,
             isPercent:false,
            percent:0,
            },
            {
             id:1,
             imgUrl:'../src/assets/img/image14.png',
             title:'Бирюса 155КХ',
             body:'МОРОЗИЛЬНЫЕ КАМЕРЫ БИРЮСА',
             isCan:'В наличии',
             price:17486,
             isStars:false,
             isPercent:false,
            percent:0,
            },
            {
             id:2,
             imgUrl:'../src/assets/img/image16.png',
             title:'Econ ECO-1657VC',
             body:'ПЫЛЕСОСЫ ECON',
             isCan:'В наличии',
             price:3275,
             isStars:false,
             isPercent:false,
            percent:0,
            },
            {
             id:3,
             imgUrl:'../src/assets/img/image17.png',
             title:'DARINA S EM 341 404 At',
             body:'ПЛИТЫ ЭЛЕКТРИЧЕСКИЕ DARINA',
             isCan:'В наличии',
             price:17928,
             isStars:false,
             isPercent:false,
            percent:0,
            },
           ],


           cardsTV:[
            {id:4,
             imgUrl:"../src/assets/img/image18.png",
             title:'DOFFLER 24KH29',
             body:'ТЕЛЕВИЗОРЫ 22”-31” DOFFLER',
             isCan:'В наличии',
             price:8484,
             isStars:false,
             isPercent:false,
            percent:0,
            },
            {
             id:5,
             imgUrl:'../src/assets/img/image19.png',
             title:'ECON EX-32HT016B',
             body:'ТЕЛЕВИЗОРЫ 32” ECON',
             isCan:'В наличии',
             price:7259,
             isStars:false,
             isPercent:false,
            percent:0,
            },
            {
             id:6,
             imgUrl:'../src/assets/img/image20.png',
             title:'ЯНДЕКС 43”УМНЫЙ \n' 
             +'ТЕЛЕВИЗОР С АЛИСОЙ',
             body:'ТЕЛЕВИЗОРЫ 33”-48” YANDEX',
             isCan:'В наличии',
             price:28947,
             isStars:false,
             isPercent:false,
            percent:0,
            },
            {
             id:7,
             imgUrl:'../src/assets/img/image21.png',
             title:'DOFFLER 50KUS65',
             body:'ТЕЛЕВИЗОРЫ 49”-59” DOFFLER',
             isCan:'В наличии',
             price:28947,
             isStars:false,
             isPercent:false,
            percent:0,
            },
           ],

cardsSmart:[
            {id:8,
             imgUrl:"../src/assets/img/image23.png",
             title:'Xiaomi Redmi 12 8/256Gb Black',
             body:'СМАРТФОНЫ XIAOMI',
             isCan:'В наличии',
             price:14535,
             isStars:false,
             isPercent:false,
            percent:0,
            },
            {
             id:9,
             imgUrl:'../src/assets/img/image24.png',
             title:'F+ S350 Light grey',
             body:'КНОПОЧНЫЕ ТЕЛЕФОНЫ F+',
             isCan:'В наличии',
             price:2056,
             isStars:false,
             isPercent:false,
            percent:0,
            },
            {
             id:10,
             imgUrl:'../src/assets/img/image25.png',
             title:'XIAOMI WATCH S1 ЧЕРНЫЙ',
             body:'УМНЫЕ ЧАСЫ XIAOMI',
             isCan:'В наличии',
             price:17665,
             isStars:false,
             isPercent:false,
            percent:0,
            },
            {
             id:11,
             imgUrl:'../src/assets/img/image26.png',
             title:'TeXeT TX-D7505A черный',
             body:'РАДИОТЕЛЕФОНЫ TEXET',
             isCan:'В наличии',
             price:3334,
             isStars:false,
             isPercent:false,
            percent:0,
            },
           ],


           cardsRecomend:[
            {id:12,
             imgUrl:"../src/assets/img/image30.png",
             title:'PHILIPS 50PUS8108/60',
             body:'ТЕЛЕВИЗОРЫ 49” -59” PHILIPS',
             isCan:'В наличии',
             price:38174,
             isStars:true,
             isPercent:false,
            percent:0,
            },
            {
             id:13,
             imgUrl:'../src/assets/img/image29.png',
             title:'LERAN CTF 143 W',
             body:'ХОЛОДИЛЬНИКИ LERAN',
             isCan:'Под заказ',
             price:17471,
             isStars:true,
             isPercent:false,
            percent:0,
            },
            {
             id:14,
             imgUrl:'../src/assets/img/image28.png',
             title:'LG M700 platinum',
             body:'СМАРТФОНЫ LG',
             isCan:'Под заказ',
             price:14767,
             isStars:true,
             isPercent:false,
            percent:0,
            },
            {
             id:15,
             imgUrl:'../src/assets/img/image17.png',
             title:'DARINA 18 EC 331 606 At',
             body:'Плита электрические DARINA',
             isCan:'Под заказ',
             price:23867,
             isStars:true,
             isPercent:false,
            percent:0,
            },
           ],

           cardsNews:[
            {id:16,
             imgUrl:"../src/assets/img/image34.png",
             title:'LERAN SFR 145 W',
             body:'МОРОЗИЛЬНЫЕ КАМЕРЫ LERAN',
             isCan:'В наличии',
             price:17990,
             isStars:false,
             isPercent:false,
            percent:0,
            },
            {
             id:17,
             imgUrl:'../src/assets/img/image33.png',
             title:'BQ WATCH 1.0',
             body:'УМНЫЕ ЧАСЫ BQ',
             isCan:'В наличии',
             price:2389,
             isStars:false,
             isPercent:false,
            percent:0,
            },
            {
             id:18,
             imgUrl:'../src/assets/img/image32.png',
             title:'Hyandai HYV C-3500',
             body:'ПЫЛЕСОСЫ HYANDAI',
             isCan:'Под заказ',
             price:4643,
             isStars:false,
             isPercent:false,
            percent:0,
            },
            {
             id:19,
             imgUrl:'../src/assets/img/image31.png',
             title:'F+ Ezzy trendy 1 Red' ,
             body:'КНОПОЧНЫЕ ТЕЛЕФОНЫ F+',
             isCan:'под заказ',
             price:2039,
             isStars:false,
             isPercent:false,
            percent:0,
            },
           ],

           cardsPercent:[
            {id:20,
             imgUrl:"../src/assets/img/image7.png",
             title:'Haier HW60-BP-12919BS',
             body:'СТИРАЛЬНЫЕ МАШИНЫ HALER',
             isCan:'В наличии',
             price:38174,
             isStars:false,
             isPercent:true,
            percent:6,
            },
            {
             id:21,
             imgUrl:'../src/assets/img/image8.png',
             title:'PHILIPS 55PUS7608/60',
             body:'ТЕЛЕВИЗОРЫ 49” -59” PHILIPS',
             isCan:'В наличии',
             price:36990,
             isStars:false,
             isPercent:true,
            percent:11,
            },
            {
             id:22,
             imgUrl:'../src/assets/img/image9.png',
             title:'HAIER C2 F 637 CWRG',
             body:'ХОЛОДИЛЬНИК HAIR',
             isCan:'В наличии',
             price:45990,
             isStars:false,
             isPercent:true,
            percent:22,
            },
            {
             id:23,
             imgUrl:'../src/assets/img/image10.png',
             title:'HAIER HW60-BP10919B',
             body:'СТИРАЛЬНЫЕ МАШИНЫ HAIR',
             isCan:'В налиии',
             price:30990,
             isStars:false,
             isPercent:true,
            percent:11,
            },
           ],
           
            widthMenuButton_Recomend:18,
           backgroundColor_Recomend:'#2044A3',
           ColorMenuButton_Recomend:'#FFFFFF',


           widthMenuButton_News:10,
           backgroundColor_News:'#DEDEE2',
           ColorMenuButton_News:'#3D3D3D',
           
           
           widthMenuButton_Percent:10,
           backgroundColor_Percent:'#DEDEE2',
           ColorMenuButton_Percent:'#3D3D3D',
            
           _index:1


        }
    },
    methods:{
        nextMenu(id){
            if(id =="recomend"){

                  this.widthMenuButton_Recomend=18;
                  this.backgroundColor_Recomend='#2044A3';
                  this.ColorMenuButton_Recomend = '#FFFFFF';
                  this._index=1;
            if(this.widthMenuButton_News===18)
            {
                  this.widthMenuButton_News=10;
                  this.backgroundColor_News='#DEDEE2';
                  this.ColorMenuButton_News = '#3D3D3D';
            }
            else{
                  this.widthMenuButton_Percent=10;
                  this.backgroundColor_Percent='#DEDEE2';
                  this.ColorMenuButton_Percent = '#3D3D3D';
            }
          
        }

            else if(id =="news"){

                  this.widthMenuButton_News=18;
                  this.backgroundColor_News='#2044A3';
                  this.ColorMenuButton_News = '#FFFFFF';
                  this._index=2;
            if(this.widthMenuButton_Recomend===18)
            {
                  this.widthMenuButton_Recomend=10;
                  this.backgroundColor_Recomend='#DEDEE2';
                  this.ColorMenuButton_Recomend = '#3D3D3D';
            }
            else{
                  this.widthMenuButton_Percent=10;
                  this.backgroundColor_Percent='#DEDEE2';
                  this.ColorMenuButton_Percent = '#3D3D3D';
            }


        }


            else if(id =="percent"){

                  this.widthMenuButton_Percent = 18;
                  this.backgroundColor_Percent = '#2044A3';
                  this.ColorMenuButton_Percent = '#FFFFFF';
                  this._index=3;
            if(this.widthMenuButton_News===18)
            {
                  this.widthMenuButton_News=10;
                  this.backgroundColor_News='#DEDEE2';
                  this.ColorMenuButton_News = '#3D3D3D';
            }
            else{
                  this.widthMenuButton_Recomend=10;
                  this.backgroundColor_Recomend='#DEDEE2';
                  this.ColorMenuButton_Recomend = '#3D3D3D';
            }
            }
            else{
                console.log("ERROR");
            }
        }
    }

}

</script>
<template>

<TheHeader></TheHeader>

<main>
    <div class="wrapper">
        <div class="catalog_label">Каталог</div>
          <div class="main-items_catalog">

            <div class="label-catalog-items">Бытовая техника</div>

             <div class="main-catalog-item">
                <TheCard v-for="el in cardsHome" :key="el.id"
                :_id="el.id" :title="el.title" :product="el" :body="el.body"
                :imgUrl="el.imgUrl" :isCan="el.isCan" 
                :price="el.price" :isStars="el.isStars" 
                :isPercent="el.isPercent" :percent="el.percent" >
            </TheCard>

                     


            </div>


             <div class="label-catalog-items">Телевизоры</div>

             <div class="main-catalog-item">
                
                <TheCard v-for="el in cardsTV" :key="el.id"
                :_id="el.id" :title="el.title" :product="el" :body="el.body"
                :imgUrl="el.imgUrl" :isCan="el.isCan" 
                :price="el.price" :isStars="el.isStars" 
                :isPercent="el.isPercent" :percemt="el.percent" >
            </TheCard>
                     


             </div>

             <div class="label-catalog-items">Смартфоны, телефоны, часы</div>

             <div class="main-catalog-item">
                
                <TheCard v-for="el in cardsSmart" :key="el.id"
                :_id="el.id" :title="el.title" :product="el" :body="el.body"
                :imgUrl="el.imgUrl" :isCan="el.isCan" 
                :price="el.price" :isStars="el.isStars" 
                :isPercent="el.isPercent" :percent="el.percent" >
            </TheCard>

                     


             </div>
             <div class="main-Catalog-item"></div>


          </div>



          <div class="main-catalog_items">
            <div class="btn_menu_items">
                <button id="recomend" @click="nextMenu($event.target.id)" 
                :style="{'background-color': backgroundColor_Recomend,
                'width':widthMenuButton_Recomend+'em', 
                'color':ColorMenuButton_Recomend}" 
                class="btn_menu">Рекомендуемые
               </button>
                
                <button id="news" @click="nextMenu($event.target.id)" 
                :style="{'background-color': backgroundColor_News,
                'width':widthMenuButton_News+'em',
                'color':ColorMenuButton_News}"
                 class="btn_menu">Новинки
                </button>
                
                <button id="percent" @click="nextMenu($event.target.id)" 
                :style="{'background-color': backgroundColor_Percent,
                'width':widthMenuButton_Percent+'em',
                'color':ColorMenuButton_Percent}"
                 class="btn_menu">Скидки
                </button>

            </div>


            <div v-show="_index===1" class="main-catalog-item">
                <div v-for="el in cardsRecomend" :key="el.id">
                    <TheCard 
                :_id="el.id" :title="el.title" :product="el" :body="el.body"
                :imgUrl="el.imgUrl" :isCan="el.isCan" 
                :price="el.price" :isStars="el.isStars" 
                :isPercent="el.isPercent" :percemt="el.percent" >
            </TheCard>

                </div>
              </div>

            
            <div v-show="_index===2" class="main-catalog-item">
                <div v-for="el in cardsNews" :key="el.id">
                    <TheCard 
                :_id="el.id" :title="el.title" :product="el" :body="el.body"
                :imgUrl="el.imgUrl" :isCan="el.isCan" 
                :price="el.price" :isStars="el.isStars" 
                :isPercent="el.isPercent" :percemt="el.percent" >
            </TheCard>

                </div>
              </div>

              


              <div v-show="_index===3" class="main-catalog-item">
                <div v-for="(el,index) in cardsPercent" :key="index">
                    <TheCard 
                :_id="el.index" :title="el.title" :product="el" :body="el.body"
                :imgUrl="el.imgUrl" :isCan="el.isCan" 
                :price="el.price" :isStars="el.isStars" 
                :isPercent="el.isPercent" :percent="el.percent" >
            </TheCard>

                </div>

              </div>

          </div>
          



          <form class='global-message'>
            <div class="global-message_item">Подписаться на новостную рассылку</div>
            <button class="btn_menu global-message_btn">Подписаться</button>
          </form>


    </div>
</main>
<TheFooter></TheFooter>

</template>
<style scoped>
main{
    display: flex;
    justify-content: center;
    margin-top: 2em;
    margin-bottom: 10em;
}
 
.wrapper{
  display: flex;
  flex-direction: column;
  width: 80%;
} 


.catalog_label{
    width: 8em;
    height: 43px;
    background-color: #2044A3;
    color: white;
    font-family: OpenSans;
font-size: 15.38px;
font-weight: 700;
line-height: 22.86px;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 5em;
}

.main-items_catalog {
    display: flex;
    flex-direction: column;
}

.label-catalog-items{
    width: 18em;
    height: 41px;
    background: #05CCE8;
    border:0px 1px 0px 1px solid #E0E0E0;
    color:#636363;
    display: flex;
    align-items: center;
    padding-left: 2em;
    margin-left: 1em;
    font-size: 18px;
}

.main-catalog-item{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-bottom: 5em;
}

.card{
    box-shadow: 0px 0px 0px 1px #ECECEC;
    background: #FEFEFE;
    padding: 20px;
    width: 20em;
    height: 468px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-right: 3.6em;
}


.card-items> img{
    width: 100%;
    height: 250px;
    margin-bottom: 10em;

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

.percent{
    width: 5em;
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


.global-message {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5em;
}

.global-message_item {
    width: 50em;
    height: 55px;
    border: 1px solid #E0E0E0;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    padding-left: 30px;
    color: #757575;
}

.global-message_btn {
    height: 53px;
    background-color: #2044A3;
    color: #FFFFFF;
    margin-left: 0;
}

</style>