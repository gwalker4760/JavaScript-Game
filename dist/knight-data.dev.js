"use strict";

var playerHealth = document.querySelector(".playerHealth");
var enemyHealth = document.querySelector(".enemyHealth");
var attackButtons = document.querySelectorAll(".attack");
var container = document.querySelector(".eventFeed");
var data = [{
  knightHealth: 40,
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

playerHealth.innerHTML = "Health: ".concat(data[0].knightHealth);
enemyHealth.innerHTML = "Health: ".concat(data[2].trollHealth);
container.innerHTML = "Player has attacked!"; // buttons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         console.log(e.target.innerHTML);
//     })
// })
// buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//     })
// })