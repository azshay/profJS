// export default Vue.component("goods-list", {
//      props: ["goods"],

//      template: `<div class="goods-list">
//                    <div class="goods-empty" style="display: none">
//                         Нет данных
//                    </div>
//                    <goods-item v-for="item in goods" :fGood="item"></goods-item>
//                 </div>`,
// });

import goodsItem from "./goods-item.js";

let goodsList = {
     name: "goods-list",

     props: ["goods", "func", "calcprice"],

     components: { goodsItem },

     template: `<div class="goods-list">
                   <div class="goods-empty" style="display: none">
                        Нет данных
                   </div>
                   <goods-item v-for="item in goods" :fGood="item" @getCart='func' @calculateCartPrice='calcprice'></goods-item>
                </div>`,
};

export default goodsList;
