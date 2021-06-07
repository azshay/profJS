const API_URL =
     "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

class BucketItem {}

class BucketList {}

class GoodsItem {
     constructor(title, price, id) {
          this.title = title;
          this.price = price;
          this.id = id;
     }
     render() {
          return `<div class="goods-item" itemId=${this.id}><h3>${this.title}</h3><p>${this.price} ₽</p><button class="button-item button-buy">Купить</button></div>`;
     }
}

class GoodsList {
     constructor() {
          this.goods = [];
          this.filteredGoods = [];
     }

     async fetchGoods() {
          const responce = await fetch(`${API_URL}/catalogData.json`);
          if (responce.ok) {
               const catalogItems = await responce.json();
               this.goods = catalogItems;
               this.filteredGoods = catalogItems;
          } else {
               alert("Ошибка при соединении с сервером");
          }
     }

     filterGoods(value) {
          const regExp = new RegExp(value, "i");
          this.filteredGoods = this.goods.filter((good) =>
               regExp.test(good.product_name)
          );
          this.render();
     }

     render() {
          let listHtml = "";
          this.filteredGoods.forEach((good) => {
               const goodItem = new GoodsItem(
                    good.product_name,
                    good.price,
                    good.id_product
               );
               listHtml += goodItem.render();
          });
          document.querySelector(".goods-list").innerHTML = listHtml;
     }
}

class cartItem {
     constructor(title, price, id) {
          this.title = title;
          this.price = price;
          this.id = id;
          this.quantity = 1;
     }

     render() {
          return `<div class="cart__item" id="${this.id}">
          <h3 class="item__title">${this.title}</h3>
          <p class="item__price">${this.price} рублей</p>
          <input
               value="${this.quantity}"
               class="item__quantity"
               type="number"
               min="0"
          />
          </div>`;
     }
}

class cartListClass {
     constructor() {
          this.cartList = [];
     }

     addToCart(id, product) {
          if (this.cartList[id]) {
               this.cartList[id].count++;
          } else {
               this.cartList[id] = product;
          }
     }

     remove(id) {
          if (this.cartList[id].count == 1) {
               delete this.cartList[id];
          } else {
               this.cartList[id].count--;
          }
     }

     render() {
          let cart = "";

          for (let id in this.cartList) {
               cart += this.cartList[id].render();
          }

          document.querySelector(".cart-list").innerHTML = cart;
          this.setRemoveFromCartHandlers();
     }

     setRemoveFromCartHandlers() {
          document
               .querySelectorAll(".cart-item__remove-from-cart")
               .forEach((button) => {
                    button.addEventListener("click", (event) => {
                         let product = event.target.closest("div");
                         let productId = product.id;
                         this.remove(productId);
                    });
               });
     }

     setAddToCartHandlers() {
          document.querySelectorAll(".cart__item").forEach((button) => {
               button.addEventListener("click", (event) => {
                    let product = event.target.closest("div");
                    let productId = product.id;
                    let productName = product.dataset.name;
                    let productPrice = product.dataset.price;
                    let productImg = product.dataset.img;

                    let cartItem = new CartItem(
                         productId,
                         productTitle,
                         productPrice
                    );

                    this.add(productId, cartItem);
               });
          });
     }
}

const init = async () => {
     const cart = new cartListClass();
     const list = new GoodsList();
     await list.fetchGoods();

     list.render();

     cart;

     const searchButton = document.querySelector(".search-button");
     const searchInput = document.querySelector(".goods-search");

     searchButton.addEventListener("click", () => {
          list.filterGoods(searchInput.value);
     });

     const buttonBuy = document.querySelector(".button-buy");
     buttonBuy.addEventListener("click", () => {
          cart.addToCart();
     });

     const cartItem = document.querySelector(".cart-button");
     const cartBlock = document.querySelector(".cart");
     cartItem.addEventListener("click", (event) => {
          if (cartBlock.style.display == "none") {
               cartBlock.style.display = "block";
          } else {
               cartBlock.style.display = "none";
          }
     });
};

window.onload = init;

// const init = () => {
//   setTimeout(() => {
//     console.log('Hi')
//   }, 5000)
// setInterval(() => {
//   console.log("Назойливый popup");
// }, 2000);
// };

// window.onload = init;
