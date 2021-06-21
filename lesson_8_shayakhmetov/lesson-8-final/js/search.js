// export default Vue.component("search", {
//      props: ["searchLine", "whyonlylowercase"],

//      template: `
//        <div>
//           <input
//              type="text"
//              class="goods-search"
//              v-bind:value="searchLine"
//              v-on:input="$emit('input', $event.target.value)"
//           />
//           <search-button :whyonlylowercase="whyonlylowercase"></search-button>
//        </div>
//   `,
// });

import searchButton from "./search-button.js";

let search = {
     name: "search",

     props: ["searchLine", "whyonlylowercase"],

     components: { searchButton },

     template: `
       <div>
          <input
             type="text"
             class="goods-search"
             v-bind:value="searchLine"
             v-on:input="$emit('input', $event.target.value)"
          />
          <search-button :whyonlylowercase="whyonlylowercase"></search-button>
       </div>
  `,
};

export default search;
