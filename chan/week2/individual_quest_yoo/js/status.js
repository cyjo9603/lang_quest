// #점수 체크 함수
function scoreCheck() {
  let count = 0;
  canvas.getBlock().list.forEach(col => {
    col.forEach(row => {
      if (row.status !== 0) {
        count++;
      }
    });
  });
  if (count === 0) {
    canvas.getStatus().score++;
    resetBall();
    resetBlock();
    setBlockLevel();
    updateScore();
    updateLevel();
  }
}

// #점수 업데이트 함수
function updateScore() {
  const score = document.getElementById('js_score');
  score.innerText = canvas.getStatus().score;
}

// #생명 업데이트 함수
function updateLife() {
  const life = document.getElementById('js_lives');
  life.innerText = canvas.getStatus().life;
}

// #레벨 업데이트 함수
function updateLevel() {
  canvas.getBall().moveX--;
  canvas.getBall().moveY--;
  canvas.getPaddle().width -= 20;
}

// #게임오버 체크 함수
function gameOverCheck() {
  updateLife();
  if (canvas.getStatus().life < 0) {
    alert('GAME OVER');
    document.location.reload();
  } else {
    resetBall();
    resetBlock();
    resetPaddle();
  }
}

updateScore();
updateLife();
