const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');



//logic: when click on player's button we want to add +1 to the current score and have that added score show on the span h1; keep track of the current score
let p1Score = 0;
let p2Score = 0;
let winningScore = 5;

p1Button.addEventListener('click', function () {
    if (p1Score !== winningScore) {
        p1Score += 1;
        p1Display.textContent = p1Score;
    }
})

p2Button.addEventListener('click', function () {
    if (p2Score !== winningScore) {
        p2Score += 1;
        p2Display.textContent = p2Score;
    }

})


