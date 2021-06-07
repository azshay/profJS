class GoodsItem {
     constructor(id_product, product_name, price) {
          this.id_product = id_product;
          this.product_name = product_name;
          this.price = price;
     }

     render() {
          return `<div id="${this.id_product}" class="goods-item" data-id=${this.id_product} data-name="${this.product_name}" data-price="${this.price}">
          <h3>${this.product_name}</h3>
          <p>${this.price} ₽</p>
          <button class="button-item button-buy">Купить</button></div>`;
     }
}
