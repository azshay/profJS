"use strict";

const URL =
     "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json";
class GoodsList {
     constructor() {
          this.list = [];
     }

     async fetch() {
          const response = await fetch(URL);
          if (response.ok) {
               const responceJSON = await response.json();
               this.list = responceJSON;
          } else {
               alert("Возникла ошибка. Сообщать о проблеме не требуется!");
          }
     }

     render() {
          let goodsList = "";

          this.list.forEach((good) => {
               goodsList += new GoodsItem(
                    good.id_product,
                    good.product_name,
                    good.price
               ).render();
          });

          document.querySelector(".goods-list").innerHTML = goodsList;
     }

     totalPriceCalculation() {
          let totalPrice = 0;
          this.list.forEach((listItem) => {
               totalPrice += listItem.totalPrice;
          });
     }
}
