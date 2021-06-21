// import cartItem from "./cart-item.js";
// import goodsItem from "./goods-item.js";
import goodsList from "./goods-list.js";
import search from "./search.js";
// import searchButton from "./search-button.js";
import cartList from "./cart-list.js";

const API_URL = "http://localhost:3000";

const app = new Vue({
     el: "#app",
     data: {
          goods: [],
          filteredGoods: [],
          searchLine: "",
          isVisibleCart: false,
          cartList: [],
     },

     components: {
          // cartItem,
          // goodsItem,
          goodsList,
          cartList,
          search,
          // searchButton,
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
