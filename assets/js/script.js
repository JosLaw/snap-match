// array to hold cards
const card = document.querySelectorAll(".card");
let cards = [...card]

// deck of cards
let deck = document.getElementById("card-deck");

// move variable
let moves = 0;
let count = document.querySelector(".moves")

// matching cards variable
let cardMatch = document.getElementsByClassName("match");

// opened cards array
let cardOpen = [];

// shuffles cards and returns the shuffled cards array
function shuffle(array) {
    var currentIndex = array.slice(0), temp, i = array.length, rand;

    while (--i) {
        rand = Math.floor(i * Math.random());
        temp = currentIndex[rand];
        currentIndex[rand] = currentIndex[i];
        currentIndex[i] = temp;
    }
   
    return(currentIndex);
};

function shuffleNodes() {
    var nodes = deck.children, i = 0;
    nodes = Array.prototype.slice.call(nodes);
    nodes = shuffle(nodes);
    while(i < nodes.length) {
        deck.appendChild(nodes[i]);
        ++i;
    }
}

document.body.onload = start();

function start() {
    cardOpen = [];

    cards = shuffle(cards);
    shuffleNodes()
}

// toggles stated classes to flipped cards
var flipCard = function () {
    this.classList.toggle("open");
    this.classList.toggle("flipped");
    this.classList.toggle("disable");
};

function openCards() {
    cardOpen.push(this);
    var amount = cardOpen.length;
    if (amount === 2) {
        changeCount();
        if (cardOpen[0].type === cardOpen[1].type) {
            match();
        } else {
            noMatch();
        }
    }
};

cards.forEach(card => {
    card.addEventListener("click", flipCard);
    card.addEventListener("click", openCards);
});
