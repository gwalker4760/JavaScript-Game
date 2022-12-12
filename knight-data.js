const playerHealth = document.querySelector(".playerHealth");
const enemyHealth = document.querySelector(".enemyHealth");
const attackButtons = document.querySelectorAll(".attack");
const container = document.querySelector(".eventFeed");


const data = [
    {
    knightHealth: 40,
    SwordSlash: 20,
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

playerHealth.innerHTML = (`Health: ${data[0].knightHealth}`);
enemyHealth.innerHTML = (`Health: ${data[2].trollHealth}`);
container.innerText = (`What will will you do?`);

attackButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.innerHTML == "Sword slash") {
            enemyHealth.innerHTML = (`Health: ${data[2].trollHealth - data[0].SwordSlash}`);
            data[2].trollHealth -= data[0].SwordSlash
            container.innerText = (`The Knight used Sword slash \n`);

        } else if (button.innerHTML == "Shield bash") {
            enemyHealth.innerHTML = (`Health: ${data[2].trollHealth - data[0].ShieldBash}`);
            data[2].trollHealth -= data[0].ShieldBash
            container.innerText = (`The Knight used Shield bash \n`);
        }

        if(data[2].trollHealth > 0){
            playerHealth.innerHTML = (`Health: ${data[0].knightHealth - data[2].attack}`);
            data[0].knightHealth -= data[2].attack
            container.innerHTML += (` The Troll attacked you with ${data[2].attack}`);
        }
        // console.log(data[1].Fireball)
        // console.log(data[2].trollHealth)
        
        if  (data[2].trollHealth <= 0) {
            container.innerText = (`The Troll is the dead!`);
        } 
        else if (data[0].knightHealth <= 0){
            container.innerText = "YOU ARE DEAD";
        }
    })
})