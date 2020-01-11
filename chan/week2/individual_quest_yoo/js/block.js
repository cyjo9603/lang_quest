// #블록 초기 생성 함수
(() => {
  for (let col = 0; col < canvas.getBlock().column; col++) {
    canvas.getBlock().list.push([]);
    for (let row = 0; row < canvas.getBlock().row; row++) {
      canvas.getBlock().list[col].push({ x: 0, y: 0, status: 1 });
    }
  }
  setBlockLevel();
})();

// #레벨별 블록모양 지정 함수
function setBlockLevel() {
  const blockLevel = [[2, 5, 6, 7, 8, 9, 12], [6, 7, 8], [7]];
  if (canvas.getStatus().score < 4) {
    blockLevel[canvas.getStatus().score - 1].forEach(delBlockCol => {
      let delBlockRow = 0;
      while (delBlockCol >= 5) {
        delBlockCol -= 5;
        delBlockRow++;
      }
      canvas.getBlock().list[delBlockCol][delBlockRow].status = 0;
    });
  }
}

// #블록 그리기 함수
function drawBlock() {
  canvas.getBlock().list.forEach((col, colIndex) => {
    col.forEach((row, rowIndex) => {
      if (row.status !== 0) {
        row.x =
          canvas.getBlock().offsetLeft +
          (canvas.getBlock().width + canvas.getBlock().padding) * colIndex;
        row.y =
          canvas.getBlock().offsetTop +
          (canvas.getBlock().height + canvas.getBlock().padding) * rowIndex;
        canvas.getInit().ctx.beginPath();
        canvas.getInit().ctx.rect(row.x, row.y, canvas.getBlock().width, canvas.getBlock().height);
        canvas.getInit().ctx.fillStyle = getBlockColor(row.status);
        canvas.getInit().ctx.fill();
        canvas.getInit().ctx.closePath();
      }
    });
  });
}

// #블록 리셋 함수
function resetBlock() {
  canvas.getBlock().list.forEach(col => {
    col.forEach(row => {
      row.x = 0;
      row.y = 0;
      row.status = canvas.getStatus().score;
    });
  });
}

// #블록 색갈 지정 함수
function getBlockColor(blockStatus) {
  switch (blockStatus) {
    case 1:
      return '#ef9a9a';
    case 2:
      return '#e57373 ';
    case 3:
      return '#ef5350 ';
    case 4:
      return '#f44336 ';
    case 5:
      return '#e53935 ';
    case 6:
      return '#d32f2f ';
    case 7:
      return '#c62828 ';
    default:
      return '#000';
  }
}
