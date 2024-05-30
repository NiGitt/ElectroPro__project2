<script>

import TheHeader from '../components/TheHeader.vue';

import TheFooter from '../components/TheFooter.vue';



export default{
    components:{TheHeader,TheFooter},
}


</script>
<template>
    <TheHeader></TheHeader>
    <div class="wrapper">
    <div class="container">
        <div class="text-info">
        <h1>О компании</h1>
        <div class="about-title">
            <p>Наш каталог товаров постоянно увеличивается и в настоящий момент содержит более 20 тысяч позиций. Такой возможности выбора по ассортименту бытовой<br>
техники, домашней аудио-видео аппаратуры, телефонов и других средств связи, фото и видеокамер с сопутствующими товарами, компьютеров, периферийных<br>
устройств и комплектующих изделий и множества прочих товаров, нет ни в одном представительстве самых крупных<br>
сетей.</p>
            <p>Основным нашим преимуществом является то, что любой товар из представленного на сайте можно приобрести уже сейчас. Весь товар находится на наших складах,<br>
мы не занимаемся посредничеством, продаем только то, что имеется у нас в наличии.<br></p>
<p>Смотрите, изучайте, следите за нашими новостями, за изменениями на сайте, за новыми предложениями. Всегда будем рады видеть Вас среди наших покупателей.<br>
Ждем ваших замечаний и предложений.<br></p>
        </div>
    </div>

    <form class='global-message'>
            <div class="global-message_item">Подписаться на новостную рассылку</div>
            <button class="btn_menu global-message_btn">Подписаться</button>
          </form>

    </div>
</div>

<TheFooter></TheFooter>
</template>
<style scoped>
.wrapper{
   width: 100%;
  
}

.container{
    display: flex;
    flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 5em 10em 10em 10em;
   margin-bottom: 15px;
}

.text-info h1 {
    font-family: Open Sans;
font-size: 35px;
font-weight: 600;
line-height: 52px;
letter-spacing: -1px;
text-align: left;
margin-bottom: 0.5em;
}

.about-title{
    margin-left: 10px;
    font-family: Open Sans;
font-size: 16px;
font-weight: 400;
line-height: 21.43px;
text-align: left;

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

.btn_menu{
    width: 10em;
    height: 49px;
    background-color: #DEDEE2;
    margin-left: 1em;
    color: #3D3D3D;
    transition: background-color,width 0.5s ease-in;
}

.global-message_btn {
    height: 53px;
    background-color: #2044A3;
    color: #FFFFFF;
    margin-left: 0;
}

</style>