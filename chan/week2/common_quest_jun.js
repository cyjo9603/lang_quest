function dhMath(inputNumber) {
  const continuousNumber = [];
  for (let i = 1; i <= inputNumber; i++) {
    const numberArray = [];
    let check = false;
    for (let j = i; j <= inputNumber; j++) {
      numberArray.push(j);
      if (getSumArray(numberArray) === inputNumber) {
        check = true;
        break;
      }
    }
    if (check === true) {
      continuousNumber.push(numberArray.join(' + '));
    }
  }

  return continuousNumber;
}

function getSumArray(inputArray) {
  let sum = 0;
  inputArray.forEach(element => {
    sum += element;
  });
  return sum;
}

console.log(dhMath(15));
