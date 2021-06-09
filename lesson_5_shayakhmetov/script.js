const API_URL =
     "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

console.log(window);

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
               const responce = await fetch(`${API_URL}/catalogData.json`);
               if (responce.ok) {
                    const catalogItems = await responce.json();
                    this.goods = catalogItems;
                    this.filteredGoods = catalogItems;
               } else {
                    alert("Ошибка при соединении с сервером");
               }
          },

          getSearchedList(value) {
               document.querySelector(".goods-empty").style.display = "none";
               const regExpProductsFilter = new RegExp(value, "i");
               this.filteredGoods = this.goods.filter((item) =>
                    regExpProductsFilter.test(item.product_name)
               );
               if (this.filteredGoods.length == 0) {
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
     },

     async mounted() {
          await this.getProducts();
     },
});
