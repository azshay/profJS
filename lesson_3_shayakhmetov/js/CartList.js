class CartList {
     constructor() {
          this.cartList = {};
     }

     addToCart(product_id, product) {
          if (this.cartList[product_id]) {
               this.cartList[product_id].quantity++;
          } else {
               this.cartList[product_id] = product;
          }

          let totalPrice = document.querySelector(".price__total");
          totalPrice.innerHTML =
               parseInt(this.cartList[product_id].price) +
               parseInt(totalPrice.innerHTML) +
               " руб.";

          this.render();
     }

     removeFromCart(product_id) {
          if (this.cartList[product_id].quantity == 1) {
               let totalPrice = document.querySelector(".price__total");
               let totalPriceCount =
                    parseInt(totalPrice.innerHTML) -
                    parseInt(this.cartList[product_id].price);
               totalPrice.innerHTML = totalPriceCount + " руб.";
               delete this.cartList[product_id];
          } else {
               this.cartList[product_id].quantity--;
               let totalPrice = document.querySelector(".price__total");
               let totalPriceCount =
                    parseInt(totalPrice.innerHTML) -
                    parseInt(this.cartList[product_id].price);
               totalPrice.innerHTML = totalPriceCount + " руб.";
          }

          this.render();
     }

     render() {
          let cart = "";

          for (let product_id in this.cartList) {
               cart += this.cartList[product_id].render();
          }

          document.querySelector(".cart-items").innerHTML = cart;
          this.setRemoveFromCart();
     }

     setRemoveFromCart() {
          document.querySelectorAll(".button__delete").forEach((button) => {
               button.addEventListener("click", (event) => {
                    const product = event.target.closest("div");
                    const productId = product.dataset.id;
                    this.removeFromCart(productId);
               });
          });
     }

     setAddToCart() {
          document.querySelectorAll(".button-buy").forEach((button) => {
               button.addEventListener("click", (event) => {
                    const product = event.target.closest("div");
                    const productId = product.dataset.id;
                    const productName = product.dataset.name;
                    const productPrice = product.dataset.price;

                    const cartItem = new CartItem(
                         productId,
                         productName,
                         productPrice
                    );

                    this.addToCart(productId, cartItem);
               });
          });
     }

     clear() {
          document
               .querySelector(".button__clear")
               .addEventListener("click", () => {
                    this.cartList = {};
                    let totalPrice = document.querySelector(".price__total");
                    totalPrice.innerHTML = "0 руб.";
                    this.render();
               });
     }
}
