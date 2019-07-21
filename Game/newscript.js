
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var xPos = 0;
var yPos = 0;

var dogImg = new Image();
dogImg.src = "dog.png";


document.getElementById("buttonDiv").addEventListener("click", function (event) {
    event.preventDefault();
    direction = event.target.id;
    //This gets the direction
    console.log(direction);

    requestID = requestAnimationFrame(animate);

   }
)

function animate() {
    requestID = requestAnimationFrame(animate);

    if (xPos <= (canvas.width -50) && yPos <= (canvas.height -50)) {
        eraseDog(xPos, yPos);
        moveDirection();
        drawDog(xPos, yPos);
        
    } else {
        cancelAnimationFrame(requestID);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        
    }
}


function moveDirection() {
    if (direction == "moveUp") {
        moveUp();
    }
    else if (direction == "moveDown") {
        moveDown();
    }
    else if (direction == "moveLeft") {
        moveLeft();
    }
    else {
        moveRight();
    }
}

function drawDog(xPos, yPos){
ctx.drawImage(dogImg, xPos, yPos, 80, 80);
}


function eraseDog(xPos, yPos){
ctx.clearRect(xPos, yPos, 80, 80);
}

function moveDown(){
yPos = yPos + 1;
}


function moveUp(){
yPos = yPos - 1;
}


function moveRight(){
xPos = xPos + 1;
}

function moveLeft(){
  xPos = xPos - 1;
}

function BarkBark(){
  var barkImg = new Image();
  var barkY = Math.floor(Math.random() * 300);
  var barkX = Math.floor(Math.random() * 1000);

  barkImg.addEventListener("load", function(){
    ctx.drawImage(barkImg, barkX, barkY, 100, 50);
  }, false);
  barkImg.src = "bark.png";
}
