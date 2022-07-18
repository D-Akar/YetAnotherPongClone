var paddle1 = document.getElementById("paddle1");
var paddle2 = document.getElementById("paddle2");
var ball = document.getElementById("ball");

var ballDirection = 0;
var ballSpread = 0;
var gameStarted = 0;
var direction = 0;


addEventListener('keydown', event => {
    var paddle1Top = parseInt(window.getComputedStyle(paddle1).getPropertyValue("top"));
    var paddle2Top = parseInt(window.getComputedStyle(paddle2).getPropertyValue("top"));
    if(event.key == " " || event.key == "SpaceBar") {
        start();
    }
    if(event.key == "s") {
        paddle1.style.top = (paddle1Top + 5) + "px";
    }
    if(event.key == "w") {
        paddle1.style.top = (paddle1Top - 5) + "px";
    }
    if(event.key == "ArrowDown") {
        paddle2.style.top = (paddle2Top + 5) + "px";
    }
    if(event.key == "ArrowUp") {
        paddle2.style.top = (paddle2Top - 5) + "px";
    }
})


function start() {
    if(gameStarted == 0) {
        gameStarted = 1;
       
        var ballLeft = parseInt(window.getComputedStyle(ball).getPropertyValue("left"));
        direction = Math.floor(Math.random() * 2) + 1;
        if(direction == 1) {
            ball.style.left = (ballLeft - 30) + "px";
        }
        else if(direction == 2) {
            ball.style.left = (ballLeft + 30) + "px";
        }
    }
}

function gameReset() {
    var ballDirection = 0;
    var ballSpread = 0;
    var gameStarted = 0;
    var direction = 0;
    ball.style.left = "290px";
    ball.style.top = "190px";
    alert("you lose");
}


setInterval(function() {
    var ballLeft = parseInt(window.getComputedStyle(ball).getPropertyValue("left"));
    var ballTop = parseInt(window.getComputedStyle(ball).getPropertyValue("top"));

    var paddle1Right = parseInt(window.getComputedStyle(paddle1).getPropertyValue("left")) + 15;
    var paddle1Top = parseInt(window.getComputedStyle(paddle1).getPropertyValue("top"));

    var paddle2Left = parseInt(window.getComputedStyle(paddle2).getPropertyValue("left"));
    var paddle2Top = parseInt(window.getComputedStyle(paddle2).getPropertyValue("top"));

    //MOVEMENT LOGIC
    if(direction == 1) 
    {
        if(ballLeft <= 35 && ballLeft >= 25 && ballTop>paddle1Top && ballTop < paddle1Top + 80) {
            direction = 2;
            ball.style.left = (ballLeft + 2) + "px";
        }
        else if(ballLeft<=0) {
            gameReset();
            document.location.reload(true);
        }
        else {
            ball.style.left = (ballLeft - 2) + "px";
        } 

    }
    else if(direction == 2) {
        if(ballLeft <= paddle2Left + 5 && ballLeft >= paddle2Left - 20 && ballTop>paddle2Top && ballTop < paddle2Top + 80) {
            direction = 1;
            ball.style.left = (ballLeft - 2) + "px";
        }
        else if(ballLeft>=580) {
            gameReset();
            document.location.reload(true);
        }
        else {
            ball.style.left = (ballLeft + 2) + "px";
        } 
    }
}, 10);