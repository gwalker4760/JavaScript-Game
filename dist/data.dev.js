"use strict";

var playerHealth = document.querySelector(".knightHealth");
var enemyHealth = document.querySelector(".trollHealth");
var buttons = document.querySelectorAll(".button");
var data = [{
  "knightHealth": 45,
  SwordSlash: 10,
  ShieldBash: 10
}, {
  merlinHealth: 20,
  Fireball: 20,
  LightningStrike: 20
}, {
  trollHealth: 40,
  tackle: 5,
  swing: 5
}]; // console.log(data["Sword slash"]);
// console.log(data.trollHealth);
// buttons = data;

playerHealth.innerHTML = "Health: ".concat(data[0].knightHealth); // enemyHealth.innerHTML = (`Health: ${data.}`)
// buttons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         console.log(e.target.innerHTML);
//     })
// })
// buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//     })
// })