"use strict";

var startButton = document.querySelector(".start");
var chooseCharacter = document.querySelectorAll(".character");
var knight = document.querySelector(".knight");
var merlin = document.querySelector(".merlin"); // Start button at menu allows me to click button and move onto character page

startButton.addEventListener("click", function () {
  window.location.href = "character.html";
});