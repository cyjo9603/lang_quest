// #패달 그리기 함수
function movePaddle() {
  canvas.getInit().ctx.beginPath();
  canvas
    .getInit()
    .ctx.rect(
      canvas.getPaddle().x,
      canvas.getInit().gameBoard.height - canvas.getPaddle().height,
      canvas.getPaddle().width,
      canvas.getPaddle().height
    );
  canvas.getInit().ctx.fillStyle = '#ef9a9a';
  canvas.getInit().ctx.fill();
  canvas.getInit().ctx.closePath();
}

// #패달 이동 함수
function changePaddleDirection() {
  if (
    canvas.getPaddle().rightPressed &&
    canvas.getPaddle().x < canvas.getInit().gameBoard.width - canvas.getPaddle().width
  ) {
    canvas.getPaddle().x += 7;
  } else if (canvas.getPaddle().leftPressed && canvas.getPaddle().x > 0) {
    canvas.getPaddle().x -= 7;
  }
}

// #패달 리셋 함수
function resetPaddle() {
  canvas.getPaddle().x = (canvas.getInit().gameBoard.width - canvas.getPaddle().width) / 2;
}

// #키보드 업 이벤트 함수
function keyUpHandler(event) {
  if (event.keyCode == 39) {
    canvas.getPaddle().rightPressed = false;
  } else if (event.keyCode == 37) {
    canvas.getPaddle().leftPressed = false;
  }
}

// #키보드 다운 이벤트 함수
function keyDownHandler(event) {
  if (event.keyCode == 39) {
    canvas.getPaddle().rightPressed = true;
  } else if (event.keyCode == 37) {
    canvas.getPaddle().leftPressed = true;
  }
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
