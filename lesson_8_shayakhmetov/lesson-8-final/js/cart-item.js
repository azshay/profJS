// export default Vue.component("cart-item", {
//      props: ["fGood"],

//      methods: {
//           async removeFromCart() {
//                const response = await fetch(`${API_URL}/deleteFromCart`, {
//                     method: "POST",
//                     mode: "cors",
//                     headers: {
//                          "Content-Type": "application/json;charset=utf-8",
//                     },
//                     body: JSON.stringify(this.fGood),
//                });
//                await app.getCart();
//                app.calculateCartPrice();
//           },
//      },

//      template: `<div class="cart__item">
//                    <h3 class="item__title">{{fGood.product_name}}</h3>
//                    <p class="item__price">{{fGood.price}} рублей</p>
//                    <button class="button-item button__delete" @click=removeFromCart>Удалить</button>
//                </div>`,
// });

const API_URL = "http://localhost:3000";

let cartItem = {
     name: "cart-item",

     props: ["fGood"],

     methods: {
          async removeFromCart() {
               const response = await fetch(`${API_URL}/deleteFromCart`, {
                    method: "POST",
                    mode: "cors",
                    headers: {
                         "Content-Type": "application/json;charset=utf-8",
                    },
                    body: JSON.stringify(this.fGood),
               });
               await this.$emit("getCart");
               this.$emit("calculateCartPrice");
          },
     },

     template: `<div class="cart__item">
                        <h3 class="item__title">{{fGood.product_name}}</h3>
                        <p class="item__price">{{fGood.price}} рублей</p>
                        <button class="button-item button__delete" @click=removeFromCart>Удалить</button>
                    </div>`,
};

export default cartItem;
