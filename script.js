const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');

//use the `change` event logic to apply to this var 
const winningScoreSelect = document.querySelector('#playto');


//logic: when click on player's button we want to add +1 to the current score and have that added score show on the span h1; keep track of the current score
let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false; //a boolean to keep track of who hit the winningscore first, if hit then game is over

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
        }
        p1Display.textContent = p1Score;
    }
})

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
        }
        p2Display.textContent = p2Score;
    }

})

//parseInt = a string convert into a number; converts a string to an integer
//when user select or change #'s of games play up to - winning score total will stop at whichever it is select to
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
})


//reset button function:
resetButton.addEventListener('click', function () {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;

})



