const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');

//use the `change` event logic to apply to this var 
const winningScoreSelect = document.querySelector('#playto');

const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
}


const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
}


//logic: when click on player's button we want to add +1 to the current score and have that added score show on the span h1; keep track of the current score
let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false; //a boolean to keep track of who hit the winningscore first, if hit then game is over

function updatedScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}


p1.button.addEventListener('click', function () {
    updatedScores(p1, p2)
})

p2.button.addEventListener('click', function () {
    updatedScores(p2, p1)
})

//parseInt = a string convert into a number; converts a string to an integer
//when user select or change #'s of games play up to - winning score total will stop at whichever it is select to
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})


//reset button function:
resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }

}



