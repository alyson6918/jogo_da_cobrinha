let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
let direction = "right";

snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG(){
    context.fillStyle = "black";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for(i=0; i < snake.length; i++){
            context.fillStyle = "green";
            context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}
function drawnFood (){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener("keydown", update);

function update (event){
    if (event.keyCode == 37 && direction != "right") direction = "left";
    else if (event.keyCode == 40 && direction != "down") direction = "up";
    else if (event.keyCode == 39 && direction != "left") direction = "right";
    else if (event.keyCode == 38 && direction != "up") direction = "down";
    else if (event.keyCode == 65 && direction != "right") direction = "left";
    else if (event.keyCode == 83 && direction != "down") direction = "up";
    else if (event.keyCode == 68 && direction != "left") direction = "right";
    else if (event.keyCode == 87 && direction != "up") direction = "down";
}

function iniciarJogo(){

    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    else if(snake[0].x < 0 * box && direction == "left") snake[0].x = 16 * box;
    else if(snake[0].y > 15 * box && direction == "up") snake[0].y = 0;
    else if(snake[0].y < 0 * box && direction == "down") snake[0].y = 16 * box;

    for (i = 1; i < snake.length; i++){
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert("game-over :(");
        }
    }

    criarBG();
    criarCobrinha();
    drawnFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right"){
        snakeX += box;
    }
    if(direction == "left"){
        snakeX -= box;
    }
    if(direction == "up"){
        snakeY += box;
    }
    if(direction == "down"){
        snakeY -= box;
    }

    if(snakeX != food.x || snakeY != food.y){
        snake.pop();
    }
    else{
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }


    
    let newhead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newhead);
}

let jogo = setInterval(iniciarJogo, 120);