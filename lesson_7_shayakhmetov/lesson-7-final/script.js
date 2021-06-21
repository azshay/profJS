const API_URL = "http://localhost:3000";

Vue.component("search", {
     props: ["searchLine", "whyonlylowercase"],

     template: `
          <div>
             <input
                type="text"
                class="goods-search"
                v-bind:value="searchLine"
                v-on:input="$emit('input', $event.target.value)"
             />
             <search-button :whyonlylowercase="whyonlylowercase"></search-button>
          </div>
     `,
});

Vue.component("search-button", {
     props: ["searchLine", "whyonlylowercase"],

     template: `
        <button
                class="search-button"
                type="button"
                @click="whyonlylowercase()"
        >
            Искать
        </button>
    `,
});

Vue.component("goods-list", {
     props: ["goods"],

     template: `<div class="goods-list">
                    <div class="goods-empty" style="display: none">
                         Нет данных
                    </div>
                    <goods-item v-for="item in goods" :fGood="item"></goods-item>
                 </div>`,
});

Vue.component("goods-item", {
     props: ["fGood"],

     methods: {
          async addToCart() {
               await fetch(`${API_URL}/addToCart`, {
                    method: "POST",
                    mode: "cors",
                    headers: {
                         "Content-Type": "application/json;charset=utf-8",
                    },
                    body: JSON.stringify(this.fGood),
               });
               await app.getCart();
               app.calculateCartPrice();
          },
     },

     template: `<div class="goods-item">
                       <h3>{{fGood.product_name}}</h3>
                       <p>{{fGood.price}} ₽</p>
                       <button class="button-item button-buy" @click=addToCart>
                          Купить
                       </button>
                 </div>`,
});

Vue.component("cart-list", {
     props: ["goods"],

     template: `<div class="cart">
                   <cart-item v-for="item in goods" :fGood="item"></cart-item>
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
});

Vue.component("cart-item", {
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
               await app.getCart();
               app.calculateCartPrice();
          },
     },

     template: `<div class="cart__item">
                    <h3 class="item__title">{{fGood.product_name}}</h3>
                    <p class="item__price">{{fGood.price}} рублей</p>
                    <button class="button-item button__delete" @click=removeFromCart>Удалить</button>
                </div>`,
});

const app = new Vue({
     el: "#app",
     data: {
          goods: [],
          filteredGoods: [],
          searchLine: "",
          isVisibleCart: false,
          cartList: [],
     },

     methods: {
          async getProducts() {
               const responce = await fetch(`${API_URL}/catalogData`);
               if (responce.ok) {
                    const catalogItems = await responce.json();
                    this.goods = catalogItems;
                    this.filteredGoods = catalogItems;
               } else {
                    alert("Ошибка при соединении с сервером");
               }
          },

          async getCart() {
               const responce = await fetch(`${API_URL}/cartData`);
               if (responce.ok) {
                    const cartItems = await responce.json();
                    this.cartList = cartItems;
                    this.calculateCartPrice();
               } else {
                    alert("Ошибка при соединении с сервером");
               }
          },

          getSearchedList() {
               document.querySelector(".goods-empty").style.display = "none";
               const regExpProductsFilter = new RegExp(this.searchLine, "i");
               this.filteredGoods = this.goods.filter((item) =>
                    regExpProductsFilter.test(item.product_name)
               );
               if (this.filteredGoods.length === 0) {
                    document.querySelector(".goods-empty").style.display =
                         "block";
               }
          },

          changeCartVisibility() {
               if (this.isVisibleCart) {
                    document.querySelector(".cart").style.display = "none";
                    this.isVisibleCart = false;
               } else {
                    document.querySelector(".cart").style.display = "block";
                    this.isVisibleCart = true;
               }
          },

          calculateCartPrice() {
               const totalPrice = document.querySelector(".price__total");
               let tempPrice = 0;
               this.cartList.forEach((item) => {
                    tempPrice += item.price;
               });
               totalPrice.innerHTML = tempPrice + " руб.";
          },
     },

     async mounted() {
          await this.getProducts();
          await this.getCart();
     },
});
