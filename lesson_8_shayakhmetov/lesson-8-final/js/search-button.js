// export default Vue.component("search-button", {
//      props: ["searchLine", "whyonlylowercase"],

//      template: `
//       <button
//               class="search-button"
//               type="button"
//               @click="whyonlylowercase()"
//       >
//           Искать
//       </button>
//   `,
// });

let searchButton = {
     name: "search-button",

     props: ["searchLine", "whyonlylowercase"],

     template: `
      <button
              class="search-button"
              type="button"
              @click="whyonlylowercase()"
      >
          Искать
      </button>
  `,
};

export default searchButton;
