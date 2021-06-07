class CartItem extends GoodsItem {
     constructor(id_product, product_name, price) {
          super(id_product, product_name, price);
          this.quantity = 1;
     }

     render() {
          return `<div class="cart__item" data-id=${this.id_product} id="${
               this.id_product
          }">
                <h3 class="item__title">${this.product_name}</h3>
                <p class="item__price">${
                     this.price * this.quantity
                }</p> рублей</p>
                <input
                    value="${this.quantity}"
                    class="item__quantity"
                    type="number"
                     min="0"
                 />
                <button class="button-item button__delete">Удалить</button>
                </div>`;
     }
}
