// #전역 객체 생성
const canvas = (() => {
  const init = {
    gameBoard: document.getElementById('gameBoard'),
    ctx: gameBoard.getContext('2d'),
  };
  const ball = {
    x: init.gameBoard.width / 2,
    y: init.gameBoard.height - 30,
    moveX: -2,
    moveY: -2,
    radius: 10,
  };
  const paddle = {
    width: 160,
    height: 10,
    leftPressed: false,
    rightPressed: false,
  };
  paddle.x = (init.gameBoard.width - paddle.width) / 2;

  const block = {
    row: 3,
    column: 5,
    width: 75,
    height: 20,
    padding: 10,
    offsetTop: 30,
    offsetLeft: 30,
    list: [],
  };

  const status = {
    score: 1,
    life: 3,
  };

  return {
    getInit: () => init,
    getBall: () => ball,
    getPaddle: () => paddle,
    getBlock: () => block,
    getStatus: () => status,
  };
})();
