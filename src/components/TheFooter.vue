<template>
    <footer>
     <div class="wrapper">
      <div class="footer-up">
        <div class="footer-up__logo">
            
            <RouterLink :to="{name:'home'}" ><img class="logo" src="../assets/img/logo.png" alt="Logo"></RouterLink>
            <p>пр. Комсомольский 53 (3822) 50-67-85</p>
        </div>
    <div class="footer-up__logo-link">
        <RouterLink id="link" :to="{name:'about'}">О компании</RouterLink>
        <RouterLink id="link" :to="{name:'data'}">Конфедициальность</RouterLink>
    </div>
      </div>
      <div class="footer-down">
      <p >
        2008 - 2024 © ElectroPro
      </p>
    </div>
     </div>
        
    </footer>
</template>

<style scoped>
footer{
  background-color: cadetblue; 
  margin-top: auto; 

}
.wrapper{
    width: 100%;
}

.footer-up {
    height: 107px;
    background: #05CCE8;
    border-top: 1px solid #E0E0E0;
    display: flex;
    flex-direction: row;
    
}

.footer-up__logo{
    margin-bottom: 2em;
margin-right: 5em;
}

.logo{
   height: 71px;
   width: 250px;
}

.footer-down {
    display: flex;
    height: 46px;
    background: #2044A3;
    color: white;
}
.footer-down, .footer-up{
    align-items: center;
    padding-left: 15em;
}
.footer-up__logo-link #link:first-child{
margin-right: 4em;
}

</style>