const chooseKnight = document.querySelector(".knight");
const chooseMerlin = document.querySelector(".merlin");
// const chooseCharacter = document.querySelectorAll(".character");

// Choosing the knight 
chooseKnight.addEventListener("click", () => {
    window.location.href="knight-adventure.html";
})

// Choosing Merlin
chooseMerlin.addEventListener("click", () => {
    window.location.href="merlin-adventure.html";
})