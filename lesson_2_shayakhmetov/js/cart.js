class GoodsItem {
     constructor(title, price, src_image) {
          this.title = title;
          this.price = price;
          this.src_image = src_image;
          this.size = "S";
     }

     render() {
          return `<div class="cart__products__card">
       <img
            class="cart__card__img__ch"
            src="${this.src_image}"
            alt="products__card"
       />
       <div class="cart__card__descr">
            <a href="product.html">
                 <h3 class="cart__card__name">
                      ${this.title}
                 </h3>
            </a>
            <p class="cart__card__price">
                 Price:
                 <span class="cart__card__span"
                      >${this.price}$</span
                 >
            </p>
            <p class="cart__card__color">Color: Red</p>
            <p class="cart__card__size">Size: ${this.size}</p>
            <p class="cart__card__quantity">
                 Quantity:
                 <span class="cart__card__quantity__span"
                      ><input
                           value="1"
                           class="
                                cart__card__quantity__span__input
                           "
                           type="number"
                 /></span>
            </p>
       </div>
       <div class="cart__delete">
            <svg
                 width="18"
                 height="18"
                 viewBox="0 0 18 18"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
            >
                 <path
                      class="cart__delete__icon"
                      d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                      fill="#575757"
                 />
            </svg>
       </div>
   </div>`;
     }
}

class GoodsList {
     constructor() {
          this.goods = [];
     }

     fetchGoods() {
          this.goods = [
               {
                    title: "MANGO PEOPLE T-SHIRT",
                    price: 150,
                    src_image: "img/products__card__1.jpg",
               },
               {
                    title: "MANGO PEOPLE SOCKS",
                    price: 50,
                    src_image: "img/products__card__2.jpg",
               },
               {
                    title: "MANGO PEOPLE JACKET",
                    price: 350,
                    src_image: "img/products__card__3.jpg",
               },
               {
                    title: "MANGO PEOPLE SHOES",
                    price: 250,
                    src_image: "img/products__card__4.jpg",
               },
          ];
     }

     render() {
          let listHtml = "";
          this.goods.forEach((good) => {
               const goodItem = new GoodsItem(
                    good.title,
                    good.price,
                    good.src_image
               );
               listHtml += goodItem.render();
          });
          document.querySelector(".cart__products-cards").innerHTML = listHtml;
     }

     subTotal() {
          let summarizeSubTotal = 0;
          this.goods.forEach((good) => {
               summarizeSubTotal += good.price;
          });
          document.querySelector(".cart__price__subtotal__span").innerHTML =
               summarizeSubTotal + "$";
          document.querySelector(".cart__price__grandtotal__span").innerHTML =
               summarizeSubTotal + "$";
     }
}

class shopCart {
     clearCart() {} // Очистка коризны
     clientAdress() {} // Адрес доставки
     checkout() {} // Приступить к оплате
     usePromo() {} // Использовать промокод
}

class cartItem {
     constructor(title, price, src_image) {
          this.title = title;
          this.price = price;
          this.src_image = src_image;
          this.size = "S";
     }

     deleteElement() {} // Удалить элемент из корзины
     changeSize() {} // Изменить размер
     changeColor() {}
     changeQuantity() {}
}

const init = () => {
     const list = new GoodsList();
     list.fetchGoods();
     list.render();
     list.subTotal();
};

window.onload = init;
