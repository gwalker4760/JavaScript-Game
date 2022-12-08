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
  LightningStrike: 15
}, {
  trollHealth: 40,
  attack: 15
}]; // console.log(data["Sword slash"]);
// console.log(data.trollHealth);
// buttons = data;

playerHealth.innerHTML = "Health: ".concat(data[1].merlinHealth);
enemyHealth.innerHTML = "Health: ".concat(data[2].trollHealth);
container.innerText = "What will will you do?"; // buttons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         console.log(e.target.innerHTML);
//     })
// })

attackButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.innerHTML == "Fireball (Hot potato)") {
      enemyHealth.innerHTML = "Health: ".concat(data[2].trollHealth - data[1].Fireball);
      data[2].trollHealth -= data[1].Fireball;
      container.innerText = "Merlin used Fireball (Hot potato)";
    } else if (button.innerHTML == "Lightning Strike") {
      enemyHealth.innerHTML = "Health: ".concat(data[2].trollHealth - data[1].LightningStrike);
      data[2].trollHealth -= data[1].LightningStrike;
      container.innerText = "Merlin used Lightning Strike";
    } // console.log(data[1].Fireball)
    // console.log(data[2].trollHealth)


    if (data[1].merlinHealth <= 0 || data[2].trollHealth <= 0) {
      container.innerText = "The Troll is the dead!"; // container.innerText = (`YOU ARE DEAD`);
    } else {
      playerHealth.innerHTML = "Health: ".concat(data[1].merlinHealth - data[2].attack);
      data[1].merlinHealth -= 5;
      container.innerHTML += " The Troll attacked you with ".concat(data[2].attack);
    } // if (data[1].merlinHealth <= 0) {
    //     container.innerHTML = (`YOU ARE DEAD`);
    // }

  });
});