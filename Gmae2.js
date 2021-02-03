const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;

const keys = []

const player = {
  x:400,
  y:400,
  width: 96,
  height:96,
  frameX:0,
  frameY:0,
  speed:11,
  moving: false

}



const playerSprite = new Image();
playerSprite.src = "c.png";
const background = new Image();
background.src = "cafe.png";


function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}


/*




setInterval(function(){

  ctx.clearRect(0,0,canvas.width, canvas.height)
  ctx.drawImage(background ,0, 0, canvas.width, canvas.height);
  //pose++;
  drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
  moveplayer();
  bewgeung();


},75)
*/

window.addEventListener("keydown", function(e){
  keys[e.keyCode] = true;
  player.moving = true;
  
});


window.addEventListener("keyup", function(e){
  delete keys[e.keyCode];
  player.moving = false;
  
});


function moveplayer(){
  if (keys[38] && player.y >14){
    player.y -= player.speed;
    player.frameY = 3;
    player.moving = true;
  }
  if(keys[37] && player.x > 0){
    player.x -= player.speed;
    player.frameY = 1;
    player.moving = true;
  }
  if(keys[40] && player.y < canvas.height - player.height){
    player.y += player.speed;
    player.frameY = 0;
    player.moving = true;
  }
  if(keys[39] && player.x < canvas.width - player.width){
    player.x += player.speed;
    player.frameY = 2;
    player.moving = true;
  }
  if(keys[32]){
    const a = new Image();
    a.src = "xt.png";
    function nw(){
      let aa = 200;
      let bb = 200;
      ctx.drawImage(a , aa, bb);
      ctx.stroke();
    }nw();
    
  }

}


function bewgeung(){
  if(player.frameX < 3 && player.moving) player.frameX++
  else player.frameX = 0;
}

/*
//let pose = 0;
function animate(){
  ctx.clearRect(0,0,canvas.width, canvas.height)
  ctx.drawImage(background ,0, 0, canvas.width, canvas.height);
  //pose++;
  drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
  moveplayer();
  bewgeung();
  requestAnimationFrame(animate);

}


animate();
*/

let fps, fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps){
  fpsInterval = 1000/fps;
  then = Date.now();
  startTime = then;
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  now = Date.now();
  elapsed = now - then;
  if (elapsed > fpsInterval){
    then = now - (elapsed % fpsInterval);

    ctx.clearRect(0,0,canvas.width, canvas.height)
    ctx.drawImage(background ,0, 0, canvas.width, canvas.height);
    //pose++;
    drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
    moveplayer();
    bewgeung();
    
  }
}

startAnimating(20);

