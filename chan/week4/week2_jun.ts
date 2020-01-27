const util = {
  getSumArray: (inputArray: number[]): number => {
    return inputArray.reduce((sum: number, element: number): number => sum + element, 0);
  },
};

function dhMath(inputNumber: number): number {
  let count: number = 0;
  for (let i: number = 1; i <= inputNumber; i++) {
    const numberArray: number[] = [];
    for (let j: number = i; j <= inputNumber; j++) {
      numberArray.push(j);
      if (util.getSumArray(numberArray) === inputNumber) {
        count++;
        break;
      }
    }
  }

  return count;
}

console.log(dhMath(15));
