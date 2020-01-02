function numberOfCase(inputNumber) {
  const weightList = getWeightList(inputNumber);
  const weightTrun = getWeightTurn(inputNumber);
  let scale = { left: 0, right: 0 };
  let count = 0;
  for (let i = 0; i < getFactorial(inputNumber); i++) {
    for (let j = 0; j < Math.pow(2, inputNumber); j++) {
      let check = true;
      const scaleDirection = getScaleDirection(inputNumber, j);
      for (let floor = 0; floor < inputNumber; floor++) {
        if (scaleDirection[floor] === '1') {
          scale.right += weightTrun[i][floor];
        } else if (scaleDirection[floor] === '0') {
          scale.left += weightTrun[i][floor];
        }

        if (scale.left > scale.right) {
          check = false;
          break;
        }
      }
      if (check) {
        //console.log(scaleDirection, weightTrun[i]);
        count++;
      }
      scaleReset(scale);
    }
  }
  return count;
}

function getScaleDirection(numberLength, directionNumber) {
  const scaleDirection = Array.from(directionNumber.toString(2));
  const setNumberLength = numberLength - scaleDirection.length;
  if (setNumberLength) {
    for (let i = 0; i < setNumberLength; i++) {
      scaleDirection.unshift('0');
    }
  }
  return scaleDirection;
}

function getWeightTurn(numberLength) {
  const weightTrun = [];
  const weightTrunList = [];
  for (let i = 1; i <= numberLength; i++) {
    weightTrun.push(Math.pow(2, i));
  }
  permutation(weightTrunList, weightTrun, 0, numberLength);
  return weightTrunList;
}

function permutation(weightTrunList, inputArray, depth, numberLength) {
  if (depth === numberLength) {
    weightTrunList.push(inputArray.slice());
    return;
  }

  for (let i = depth; i < numberLength; i++) {
    arrayItemSwap(inputArray, i, depth);
    permutation(weightTrunList, inputArray, depth + 1, numberLength);
    arrayItemSwap(inputArray, i, depth);
  }
}

function arrayItemSwap(inputArray, unit1, unit2) {
  [inputArray[unit1], inputArray[unit2]] = [inputArray[unit2], inputArray[unit1]];
}

function getFactorial(inputNumber) {
  if (inputNumber === 1) {
    return inputNumber;
  } else {
    return inputNumber * getFactorial(inputNumber - 1);
  }
}

function getWeightList(inputNumber) {
  const weightList = [];
  for (let i = 0; i < inputNumber; i++) {
    weightList.push(Math.pow(2, i + 1));
  }
  return weightList;
}

function scaleReset(scale) {
  scale.left = 0;
  scale.right = 0;
}

console.log(numberOfCase(3));
