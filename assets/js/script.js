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

let modal = document.getElementById("popup-one");

// shuffles cards and returns the shuffled cards array
function shuffle(array) {
    var currentIndex = array.slice(0), temp, i = array.length, rand;

    while (--i) {
        rand = Math.floor(i * Math.random());
        temp = currentIndex[rand];
        currentIndex[rand] = currentIndex[i];
        currentIndex[i] = temp;
    }

    return (currentIndex);
};

function shuffleNodes() {
    var nodes = deck.children, i = 0;
    nodes = Array.prototype.slice.call(nodes);
    nodes = shuffle(nodes);
    while (i < nodes.length) {
        deck.appendChild(nodes[i]);
        ++i;
    }
}

document.body.onload = start();

function start() {
    cardOpen = [];
    cards = shuffle(cards);
    shuffleNodes()
    // removes addtional classes from cards
    for (var i = 0; i < cards.length; i++) {
        deck.innerHTML = "";
        [].forEach.call(cards, function (item) {
            deck.appendChild(item);
        });
        cards[i].classList.remove("flipped", "open", "match", "disable");
    }
    // reset moves
    moves = 0;
    count.innerHTML = "Moves: 0";

    // reset timer
    second = 30;
    var timer = document.querySelector(".timer");
    timer.innerHTML = "Timer: 30";
    clearInterval(countdown);

    // reset alerts
    alerted = false;
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

// moves counter
function changeCount() {
    moves++;
    count.innerHTML = "Moves: " + moves;
};

// game timer
var second = 30;
var timer = document.querySelector(".timer");
var countdown;
function startTimer() {
    clearInterval(countdown)
    countdown = setInterval(function () {
        timer.innerHTML = "Timer: " + second;
        second--;
        if (cardMatch.length === 12) {
            clearInterval(countdown);
        } else if (second === -1) {
            clearInterval(countdown);
        }
    }, 1000);
};

function match() {
    cardOpen[0].classList.add("match", "disable");
    cardOpen[1].classList.add("match", "disable");
    cardOpen[0].classList.remove("open");
    cardOpen[1].classList.remove("open");
    cardOpen = []
};

function noMatch() {
    cardOpen[0].classList.add("mismatch");
    cardOpen[1].classList.add("mismatch");
    disable();
    setTimeout(function () {
        cardOpen[0].classList.remove("open", "flipped", "mismatch");
        cardOpen[1].classList.remove("open", "flipped", "mismatch");
        enable();
        cardOpen = [];
    }, 800);
};

// make cards unclickable
function disable() {
    Array.prototype.filter.call(cards, function (card) {
        card.classList.add('disable');
    })
}

// make cards clickable
function enable() {
    Array.prototype.filter.call(cards, function (card) {
        card.classList.remove('disable');
        for (var i = 0; i < cardMatch.length; i++) {
            cardMatch[i].classList.add("disable");
        }
    });
}

// card click listeners
cards.forEach(card => {
    card.addEventListener("click", flipCard);
    card.addEventListener("click", openCards);
    card.addEventListener("click", gameOver);
});

// welcome modal
let play = document.getElementById("play");

//play.addEventListener("click", closeModal);
play.addEventListener('click', () => {
    closeModal();
    startTimer();
});

// play and restart buttons
let playbtn = document.getElementById("playbtn")
playbtn.addEventListener("click", startTimer);
let restart = document.getElementById("restartbtn")
restart.addEventListener("click", start);

function closeModal() {
    modal.classList.add("close")
}

var alerted = false
function gameOver() {
    setTimeout(function () {
        if (cardMatch.length === 12) {
            if (alerted === false) {
                alert("Congratulations! 🎊 All the matches found 😄");
            }
            alerted = true
        } else if (second === -1) {
            if (alerted === false) {
                alert("Game Over! You ran out of time 😔");
            }
            alerted = true
        }
    }, 2000)
};