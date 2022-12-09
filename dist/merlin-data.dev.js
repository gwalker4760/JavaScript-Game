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

playerHealth.innerHTML = "Health: ".concat(data[1].merlinHealth);
enemyHealth.innerHTML = "Health: ".concat(data[2].trollHealth);
container.innerText = "What will will you do?";
attackButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.innerHTML == "Fireball (Hot potato)") {
      enemyHealth.innerHTML = "Health: ".concat(data[2].trollHealth - data[1].Fireball);
      data[2].trollHealth -= data[1].Fireball;
      container.innerText = "Merlin used Fireball (Hot potato) \n";
    } else if (button.innerHTML == "Lightning Strike") {
      enemyHealth.innerHTML = "Health: ".concat(data[2].trollHealth - data[1].LightningStrike);
      data[2].trollHealth -= data[1].LightningStrike;
      container.innerText = "Merlin used Lightning Strike \n";
    }

    if (data[2].trollHealth > 0) {
      // var returnAttack = Math.floor(Math.random() * 15) + 1;
      playerHealth.innerHTML = "Health: ".concat(data[1].merlinHealth - data[2].attack);
      data[1].merlinHealth -= data[2].attack;
      container.innerHTML += " The Troll attacked you with ".concat(data[2].attack);
    } // console.log(data[1].Fireball)
    // console.log(data[2].trollHealth)


    if (data[2].trollHealth <= 0) {
      container.innerText = "The Troll is the dead!";
    } else if (data[1].merlinHealth <= 0) {
      container.innerText = "YOU ARE DEAD";
    }
  });
});