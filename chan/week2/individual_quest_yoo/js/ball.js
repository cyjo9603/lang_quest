// #공 이동 함수
function moveBall() {
  canvas.getInit().ctx.beginPath();
  canvas
    .getInit()
    .ctx.arc(canvas.getBall().x, canvas.getBall().y, canvas.getBall().radius, 0, Math.PI * 2);
  canvas.getInit().ctx.fillStyle = '#ef9a9a';
  canvas.getInit().ctx.fill();
  canvas.getInit().ctx.closePath();
}

// #공과 패달 충격 감지 함수
function changeBallDirection() {
  if (
    canvas.getBall().x + canvas.getBall().moveX < canvas.getBall().radius ||
    canvas.getBall().x + canvas.getBall().moveX >
      canvas.getInit().gameBoard.width - canvas.getBall().radius
  ) {
    canvas.getBall().moveX *= -1;
  }

  if (canvas.getBall().y + canvas.getBall().moveY < canvas.getBall().radius) {
    canvas.getBall().moveY *= -1;
  } else if (
    canvas.getBall().y + canvas.getBall().moveY >
    canvas.getInit().gameBoard.height - canvas.getBall().radius
  ) {
    canvas.getStatus().life--;
    gameOverCheck();
  } else if (
    canvas.getBall().y + canvas.getBall().moveY >
    canvas.getInit().gameBoard.height - canvas.getBall().radius - canvas.getPaddle().height
  ) {
    if (
      canvas.getBall().x > canvas.getPaddle().x &&
      canvas.getBall().x < canvas.getPaddle().x + canvas.getPaddle().width
    ) {
      canvas.getBall().moveY *= -1;
    }
  }
}

// #공과 블록 충돌감지 함수
function collisionDetection() {
  canvas.getBlock().list.forEach(col => {
    col.forEach(row => {
      if (
        canvas.getBall().x >= row.x - canvas.getBall().radius &&
        canvas.getBall().x <= row.x + canvas.getBlock().width + canvas.getBall().radius &&
        canvas.getBall().y >= row.y - canvas.getBall().radius &&
        canvas.getBall().y <= row.y + canvas.getBlock().height + canvas.getBall().radius &&
        row.status !== 0
      ) {
        if (
          (canvas.getBall().x >= row.x - canvas.getBall().radius - 2 &&
            canvas.getBall().x <= row.x - canvas.getBall().radius + 2) ||
          (canvas.getBall().x >= row.x + canvas.getBlock().width + canvas.getBall().radius - 2 &&
            canvas.getBall().x <= row.x + canvas.getBlock().width + canvas.getBall().radius + 2)
        ) {
          canvas.getBall().moveX *= -1;
        }
        if (
          (canvas.getBall().y >= row.y - canvas.getBall().radius - 2 &&
            canvas.getBall().y <= row.y - canvas.getBall().radius + 2) ||
          (canvas.getBall().y >= row.y + canvas.getBlock().height + canvas.getBall().radius - 2 &&
            canvas.getBall().y <= row.y + canvas.getBlock().height + canvas.getBall().radius + 2)
        ) {
          canvas.getBall().moveY *= -1;
        }
        row.status--;
      }
    });
  });
}

// #공 리셋 함수
function resetBall() {
  canvas.getBall().x = canvas.getInit().gameBoard.width / 2;
  canvas.getBall().y = canvas.getInit().gameBoard.height - 30;
  canvas.getBall().moveX = Math.abs(canvas.getBall().moveX) * -1;
  canvas.getBall().moveY = Math.abs(canvas.getBall().moveY) * -1;
}
