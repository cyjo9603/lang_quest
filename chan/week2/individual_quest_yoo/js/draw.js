// #전체 그리기 함수
function draw() {
  canvas
    .getInit()
    .ctx.clearRect(0, 0, canvas.getInit().gameBoard.width, canvas.getInit().gameBoard.height);
  scoreCheck();
  drawBlock();
  moveBall();
  movePaddle();
  collisionDetection();
  changeBallDirection();
  changePaddleDirection();
  canvas.getBall().x += canvas.getBall().moveX;
  canvas.getBall().y += canvas.getBall().moveY;
}

setInterval(draw, 10);
