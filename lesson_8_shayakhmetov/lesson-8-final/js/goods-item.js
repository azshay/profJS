// export default Vue.component("goods-item", {
//      props: ["fGood"],

//      methods: {
//           async addToCart() {
//                const response = await fetch(`${API_URL}/addToCart`, {
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

//      template: `<div class="goods-item">
//                        <h3>{{fGood.product_name}}</h3>
//                        <p>{{fGood.price}} ₽</p>
//                        <button class="button-item button-buy" @click=addToCart>
//                           Купить
//                        </button>
//                  </div>`,
// });

const API_URL = "http://localhost:3000";

let goodsItem = {
     name: "goods-item",

     props: ["fGood"],

     methods: {
          async addToCart() {
               const response = await fetch(`${API_URL}/addToCart`, {
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

     template: `<div class="goods-item">
                       <h3>{{fGood.product_name}}</h3>
                       <p>{{fGood.price}} ₽</p>
                       <button class="button-item button-buy" @click=addToCart>
                          Купить
                       </button>
                 </div>`,
};

export default goodsItem;
