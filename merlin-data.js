const playerHealth = document.querySelector(".playerHealth");
const enemyHealth = document.querySelector(".enemyHealth");
const attackButtons = document.querySelectorAll(".attack");
const container = document.querySelector(".eventFeed");


const data = [
    {
    knightHealth: 40,
    SwordSlash: 10,
    ShieldBash: 10,
    },
    {
    merlinHealth: 20,
    Fireball: 20,
    LightningStrike: 15,
    },
    {
    trollHealth: 40,
    attack: 15,
    }]
// console.log(data["Sword slash"]);
// console.log(data.trollHealth);

// buttons = data;

playerHealth.innerHTML = (`Health: ${data[1].merlinHealth}`);
enemyHealth.innerHTML = (`Health: ${data[2].trollHealth}`);
container.innerText = (`What will will you do?`);


// buttons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         console.log(e.target.innerHTML);
//     })
// })

attackButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.innerHTML == "Fireball (Hot potato)") {
            enemyHealth.innerHTML = (`Health: ${data[2].trollHealth - data[1].Fireball}`);
            data[2].trollHealth -= data[1].Fireball
            container.innerText = (`Merlin used Fireball (Hot potato)`);
        } else if (button.innerHTML == "Lightning Strike") {
            enemyHealth.innerHTML = (`Health: ${data[2].trollHealth - data[1].LightningStrike}`);
            data[2].trollHealth -= data[1].LightningStrike
            container.innerText = (`Merlin used Lightning Strike`);
        }
        // console.log(data[1].Fireball)
        // console.log(data[2].trollHealth)
        if (data[1].merlinHealth <= 0 || data[2].trollHealth <= 0) {
            container.innerText = (`The Troll is the dead!`)
            // container.innerText = (`YOU ARE DEAD`);
        } else {
            playerHealth.innerHTML = (`Health: ${data[1].merlinHealth - data[2].attack}`);
            data[1].merlinHealth -= 5
            container.innerHTML += (` The Troll attacked you with ${data[2].attack}`);
        }
        // if (data[1].merlinHealth <= 0) {
        //     container.innerHTML = (`YOU ARE DEAD`);
        // }
    })
})