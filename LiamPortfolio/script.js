document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

   
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    
    if (name && email && message) {
        alert("Thank you for your message, " + name + "! I will get back to you shortly.");
        
        this.reset();
    } else {
        alert("Please fill out all fields before submitting.");
    }
});


let score = 0;
let gameActive = false;
let gameTimer;

const clickButton = document.getElementById('click-button');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('start-game');

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    gameActive = true;
    clickButton.style.display = 'inline-block';
    
    gameTimer = setTimeout(endGame, 10000);
}

function endGame() {
    gameActive = false;
    clickButton.style.display = 'none';
    alert('Time\'s up! Your final score is: ' + score);
}

clickButton.addEventListener('click', function() {
    if (gameActive) {
        score++;
        scoreDisplay.textContent = score;
    
        clickButton.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    }
});

startButton.addEventListener('click', function() {
    if (!gameActive) {
        startGame();
    }
});
