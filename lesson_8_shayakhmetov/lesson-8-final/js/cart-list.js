// export default Vue.component("cart-list", {
//      props: ["goods"],

//      template: `<div class="cart">
//                   <cart-item v-for="item in goods" :fGood="item"></cart-item>
//                   <button class="cart-button button__bottom">
//                        Перейти к оплате
//                   </button>
//                   <div class="total__price">
//                        <h4>Цена:</h4>
//                        <p class="price__total">0 руб.</p>
//                   </div>
//                   <button
//                        class="cart-button button__clear button__bottom"
//                   >
//                        Очистить корзину
//                   </button>
//                </div>`,
// });

import cartItem from "./cart-item.js";

let cartList = {
     name: "cart-list",
     props: ["goods", "func", "calcprice"],

     components: { cartItem },

     template: `<div class="cart">
                  <cart-item v-for="item in goods" :fGood="item" @getCart='func' @calculateCartPrice='calcprice'></cart-item>
                  <button class="cart-button button__bottom">
                       Перейти к оплате
                  </button>
                  <div class="total__price">
                       <h4>Цена:</h4>
                       <p class="price__total">0 руб.</p>
                  </div>
                  <button
                       class="cart-button button__clear button__bottom"
                  >
                       Очистить корзину
                  </button>
               </div>`,
};

export default cartList;
