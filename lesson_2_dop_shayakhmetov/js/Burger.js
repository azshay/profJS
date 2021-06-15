"use strict";

class Burger {
     constructor() {
          this.size = "";
          this.stuffings = [];
          this.souses = [];
          this.price = 0;
          this.calories = 0;
     }

     changePrice() {
          document.querySelector(".price").innerHTML = this.price + " рублей";
          document.querySelector(".calories").innerHTML =
               this.calories + " калорий";
     }

     calcPriceAndCalories() {
          this.price = this.size == "big" ? 100 : 50;
          this.calories = this.size == "big" ? 40 : 20;

          this.stuffings.forEach((stuffing) => {
               switch (stuffing) {
                    case "burger__cheese":
                         this.price += 10;
                         this.calories += 20;
                         break;
                    case "burger__malt":
                         this.price += 20;
                         this.calories += 5;
                         break;
                    case "burger__potates":
                         this.price += 15;
                         this.calories += 10;
                         break;
               }
          });

          this.souses.forEach((sous) => {
               switch (sous) {
                    case "burger__mayones":
                         this.price += 20;
                         this.calories += 5;
                         break;
                    case "burger__priprava":
                         this.price += 15;
                         this.calories += 0;
                         break;
               }
          });

          this.changePrice();
     }

     changeSize() {
          const radioButtons = document.getElementsByName("burgerSelect");

          radioButtons.forEach((radioButton) => {
               radioButton.addEventListener("change", () => {
                    if (radioButton.checked) {
                         if (
                              radioButton.parentNode.className == "burger__big"
                         ) {
                              this.size = "big";
                         } else {
                              this.size = "small";
                         }
                         this.calcPriceAndCalories();
                    }
               });
          });
     }

     changeStuffings() {
          const stuffingsList = document.querySelectorAll(".burger__stuffing");
          stuffingsList.forEach((stuffing) => {
               stuffing.addEventListener("change", () => {
                    if (stuffing.firstChild.nextSibling.checked) {
                         if (stuffing.className.includes("burger__cheese")) {
                              this.stuffings.push("burger__cheese");
                         }
                         if (stuffing.className.includes("burger__malt")) {
                              this.stuffings.push("burger__malt");
                         }
                         if (stuffing.className.includes("burger__potates")) {
                              this.stuffings.push("burger__potates");
                         }
                    } else {
                         if (stuffing.className.includes("burger__cheese")) {
                              this.stuffings.splice(
                                   this.stuffings.indexOf("burger__cheese"),
                                   1
                              );
                         }
                         if (stuffing.className.includes("burger__malt")) {
                              this.stuffings.splice(
                                   this.stuffings.indexOf("burger__malt"),
                                   1
                              );
                         }
                         if (stuffing.className.includes("burger__potates")) {
                              this.stuffings.splice(
                                   this.stuffings.indexOf("burger__potates"),
                                   1
                              );
                         }
                    }
                    this.calcPriceAndCalories();
               });
          });
     }

     changeSouses() {
          const sousesList = document.querySelectorAll(".burger__sous");
          sousesList.forEach((sous) => {
               sous.addEventListener("change", () => {
                    if (sous.firstChild.nextSibling.checked) {
                         if (sous.className.includes("burger__mayones")) {
                              this.souses.push("burger__mayones");
                         }
                         if (sous.className.includes("burger__priprava")) {
                              this.souses.push("burger__priprava");
                         }
                    } else {
                         if (sous.className.includes("burger__priprava")) {
                              this.souses.splice(
                                   this.souses.indexOf("burger__priprava"),
                                   1
                              );
                         }
                         if (sous.className.includes("burger__mayones")) {
                              this.souses.splice(
                                   this.souses.indexOf("burger__mayones"),
                                   1
                              );
                         }
                    }
                    this.calcPriceAndCalories();
               });
          });
     }
}
