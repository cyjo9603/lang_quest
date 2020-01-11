const randomNumber = makeRandomNumber();
let count = 0;

function baseballGame(inputNumber) {
  const arrayInputNumber = Array.from(inputNumber);
  let strikeNumber = 0;
  let ballNumber = 0;

  if (!numberCheck(inputNumber)) {
    return;
  }

  for (let i in randomNumber) {
    for (let j in arrayInputNumber) {
      if (randomNumber[i] === arrayInputNumber[j]) {
        i === j ? strikeNumber++ : ballNumber++;
      }
    }
  }

  count++;

  if (strikeNumber === 3) {
    console.log(`count : ${count}, 3STRIKE CLEAR!`);
  } else {
    console.log(`count : ${count}, STRIKE : ${strikeNumber} BALL : ${ballNumber}`);
  }
  return;
}

function makeRandomNumber() {
  while (1) {
    let makeNumber = [];
    for (let i = 0; i < 3; i++) {
      makeNumber[i] = '' + Math.floor(Math.random() * 10);
    }
    if (!isUnique(makeNumber)) {
      return makeNumber;
    }
  }
}

function numberCheck(inputNumber) {
  if (inputNumber.length !== 3 || isUnique(Array.from(inputNumber)) || isNaN(Number(inputNumber))) {
    console.error('잘못된 값을 입력하였습니다. 다시 입력해 주세요.');
    return;
  }
  return true;
}

function isUnique(inputNumber) {
  if (inputNumber[0] === inputNumber[1] || inputNumber[0] === inputNumber[2] || inputNumber[1] === inputNumber[2]) {
    return true;
  } else {
    return false;
  }
}
