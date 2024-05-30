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
        <h1>Конфиденциальность</h1>


        <div class="about-title">
            <h1><span>Предоставление информации Клиентом</span></h1>
           
            <p>При регистрации на Сайте Клиент предоставляет следующую информацию: Фамилия, Имя, адрес электронной почты, пароль для доступа к Сайту.<br></p>
           
            <p>При оформлении заказа Клиент может предоставлять следующую информацию: Фамилия, Имя, Отчество, адрес для доставки заказов, номер контактного телефона.<br></p>
            
            <p>Предоставляя свои персональные данные при авторизации/регистрации на сайте, Клиент соглашается на их обработку в течение неопределенного срока компанией<br>
ИП Чухнов Виталий Владимирович (далее также "Продавец") в целях исполнения Продавцом своих обязательств перед клиентом, продажи им товаров и
предоставления услуг, предоставления им справочной информации в целях продвижения товаров, работ и услуг, а также соглашается на получение электронных
рассылок. При обработке персональных данных Клиента компания ИП Чухнов Виталий Владимирович руководствуется Федеральным законом "О персональных
данных",* Федеральным законом «О рекламе»* и локальными нормативными документами.<br></p>
           
<p>Использование информации предоставленной Клиентом и получаемой Продавцом.<br></p>
            
<div class="span-title">
    <p>для регистрации/авторизации Клиента на Сайте;<br>
для обработки заказов Клиента и выполнения своих обязательств перед Клиентом;<br>
для осуществления деятельности по продвижению товаров и услуг;<br>
анализа покупательских особенностей Клиента и предоставления персональных рекомендаций;<br>
для информирования клиента об акциях, скидках и специальных предложениях посредством электронных рассылок. Отписка от рассылок возможна в любой<br>
момент в разделе "Личный кабинет" путем отключения переключателя "Посписка на новости".<br></p>
</div>
        </div>

        <div class="about-title">
            <h1><span>Предоставление и передача информации, полученной Продавцом:</span></h1>
            <p>Продавец обязуется не передавать полученную от Клиента информацию третьим лицам. Не считается нарушением предоставление Продавцом информации
агентам и третьим лицам, действующим на основании договора с Продавцом, для исполнения обязательств перед Клиентом и только в рамках договоров.</p>
            <p>Не считается нарушением обязательств передача информации в соответствии с обоснованными и применимыми требованиями законодательства Российской
Федерации.</p>
<p>Продавец получает информацию об ip-адресе посетителя Сайта www.shop-n1.ru и сведения о том, по ссылке с какого интернет-сайта посетитель пришел. Данная
информация не используется для установления личности посетителя.</p>
<p>Продавец не несет ответственности за сведения, предоставленные Клиентом на Сайте в общедоступной форме.</p>
<p>Продавец при обработке персональных данных принимает необходимые и достаточные организационные и технические меры для защиты персональных данных от
неправомерного доступа к ним, а также от иных неправомерных действий в отношении персональных данных.</p>
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
   padding: 8em 10em 10em 25em;
}

.text-info h1 {
    font-family: Open Sans;
font-size: 35px;
font-weight: 600;
line-height: 52px;
letter-spacing: -1px;
text-align: left;
}

.about-title{
    margin-left: 10px;
    font-family: Open Sans;
font-size: 16px;
font-weight: 400;
line-height: 21.43px;
text-align: left;
margin-bottom: 0.8em;

}

 

.about-title h1 span {
    font-family: Open Sans;
font-size: 28px;
font-weight: 600;
line-height: 37px;
letter-spacing: -1px;
text-align: left;
color: #2044A3;

} 

.span-title{
    margin-left: 25px;
}

.global-message {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5em;
}

.global-message_item {
    width: 45em;
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