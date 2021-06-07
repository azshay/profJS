window.onload = async function () {
     let goodsList = new GoodsList();
     let cartList = new CartList();
     await goodsList.fetch();
     goodsList.render();
     cartList.setAddToCart();
     cartList.clear();
};
