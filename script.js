const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

//logic: when click on player's button we want to add +1 to the current score and have that added score show on the span h1; keep track of the current score
let p1Score = 0;

p1Button.addEventListener('click', function () {
    p1Score += 1;
    p1Display.textContent = p1Score;

})


