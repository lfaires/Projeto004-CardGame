let numCards = parseInt(prompt("Com quantas cartas deseja jogar?"));
let remainder = numCards % 2;

while (remainder !== 0 || numCards >14 || numCards <4){
    numCards = parseInt(prompt("Com quantas cartas deseja jogar?"));
    remainder = parseInt(numCards) % 2;
}
const listCard = "<li class=\"card\"></li>";
const numberOfList = document.querySelector(".container")
let i = 0;
for(let i=0;i<numCards;i++){
    numberOfList.innerHTML += listCard
}
