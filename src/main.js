import './assets/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomeView from './views/Home.vue'
import DataAnalize from './views/DataAnalize.vue'
import Bascet from './views/TheBascet.vue'
import { ref} from "vue";
export const Products = ref([]);


export let Count = -1; 
let ind = -1;

export function clear(){
  let nullProduct = [];
  Products.value=nullProduct;
}

export function addCount(id){
  let _id = Number(id);
  if(Count >=0){
  Products.value.forEach(element => {
           if(element.index === _id){
            
               let newProductStart =Products.value.filter(item => element.id >item.id);
               let newProductEnd = Products.value.filter(item => element.id < item.id );
                
              let newProduct=[];
             newProductStart.forEach(_element=>{
                   newProduct.push(_element);
             });
             newProduct.push({title:element.title,body:element.body,
              price:element.price,imageUrl:element.imageUrl,CountProduct:++element.CountProduct,
               index:_id,id:element.id});
             
               
             newProductEnd.forEach(_element=>{
              newProduct.push(_element);
        });
               
               Products.value=newProduct;
              
           }


     });
    }
}

export function removeProduct(id){
  let _id = Number(id);
  if(Count >=0){
  Products.value.forEach(element => {
           if(element.index === _id){
            
               let newProductStart =Products.value.filter(item => element.id >item.id);
               let newProductEnd = Products.value.filter(item => element.id < item.id );
                
              let newProduct=[];
             newProductStart.forEach(_element=>{
                   newProduct.push(_element);
             });
             if(element.CountProduct > 1){newProduct.push({title:element.title,body:element.body,
              price:element.price,imageUrl:element.imageUrl,CountProduct:--element.CountProduct,
               index:_id,id:element.id});} 
             
               
             newProductEnd.forEach(_element=>{
              newProduct.push(_element);
        });
               
               Products.value=newProduct;
              
           }


     });
    }
}
 
export function addProduct(title, body,price,imageUrl,index) {
  let isDublicate = false;
  let CountProduct = 1;
  if(Count >=0){
  Products.value.forEach(element => {
           if(element.index === index){
               isDublicate = true;
              
               let newProductStart =Products.value.filter(item => element.id >item.id);
               let newProductEnd = Products.value.filter(item => element.id < item.id );
             
                
              let newProduct=[];

             newProductStart.forEach(_element=>{
                   newProduct.push(_element);
             });

             newProduct.push({title:title,body:body,price:price,imageUrl:imageUrl,
             CountProduct:++element.CountProduct, index:index,id:element.id});

             newProductEnd.forEach(_element=>{
              newProduct.push(_element);
        });
               
               Products.value=newProduct;
              
           }


     });
    }
    


     if(!isDublicate){
      ind++;
  Products.value.push({title, body, price,imageUrl,CountProduct,index,id:ind}); 
     }
     Count++;
}




// export function DroppPizza(id){
 
//   try {
//      let index = Number(id);
//      let pizza = {};
//   Pizzes.value.forEach(element => {
//        if(element.id == index)
//        { 
//          pizza = element;
//          console.log("");
//        }
//  });
//  return pizza;
//   } catch(error) {
//     console.log("ERROR " + error);
//   }
// }

// export function removePizza(Pizzas) {
//     Pizzas.value = Pizzas.value.filter(_Pizzas => _Pizzas.id !== Pizzas.value.id);
// }
// export function togglePizza(Pizzas) {
//     Pizzas.value.done = !Pizzas.value.done;
// }
// export function clearPizza() {
//     Pizzas.value = [];
// }

import About from './views/About.vue'
import { FALSE } from 'sass'
const router = createRouter({
  routes: [{
    path: '/',
    name:'home',
    component: HomeView
  },
  {
    path: '/DataAnalize',
    name:'data',
    component: DataAnalize
  },
  {
    path: '/About',
    name:'about',
    component: About
  },
  {
    
    path: '/Bascet',
    name:'bascet',
    component: Bascet
  }


],
  history: createWebHistory()
})




const app = createApp(App)
app.use(router)
app.mount('#app')
