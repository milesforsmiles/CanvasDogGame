
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var xPos = 0;
var yPos = 0;

var dogImg = new Image();
dogImg.src = "dog.png";

for(var i = 0; i <= 10; i++){


}

function drawDog(xPos, yPos)
{
ctx.drawImage(dogImg, xPos, yPos, 80, 80);
}


function eraseDog(xPos,yPos){

  ctx.clearRect(xPos,yPos, 80,80);
}

function showSummary()
{
  var dogAlone = document.getElementsByName("location")[0].checked;
  var ownerAlone = document.getElementsByName("location")[1].checked;
  var together = document.getElementsByName("location")[2].checked;

  if(dogAlone)
  {
    console.log("Dog Alone");
  }
  else if (ownerAlone)
  {
    console.log("One Human");
  }
  else
  {
    console.log("Walking together");
  }
  console.log("slider val: " + document.querySelector("#rating").value);
}

function updateSliderVal(){
  document.querySelector("#sliderVal").innerHTML = document.querySelector("#rating").value;
}


function moveDown(){
eraseDog(xPos, yPos);
yPos = yPos + 1;
drawDog(xPos, yPos);
}


function moveUp(){
eraseDog(xPos,yPos);
yPos = yPos - 1;
drawDog(xPos, yPos);
}


function moveRight(){

eraseDog(xPos, yPos);
xPos = xPos + 1;
drawDog(xPos, yPos);
}

function moveLeft(){
eraseDog(xPos, yPos);
  xPos = xPos - 1;
  drawDog(xPos, yPos);
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
