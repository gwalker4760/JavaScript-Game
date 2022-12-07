"use strict";

var chooseKnight = document.querySelector(".knight");
var chooseMerlin = document.querySelector(".merlin");
var chooseCharacter = document.querySelectorAll(".character"); // Choosing the knight 

chooseKnight.addEventListener("click", function () {
  window.location.href = "knight-adventure.html";
}); // Choosing Merlin

chooseMerlin.addEventListener("click", function () {
  window.location.href = "merlin-adventure.html";
});