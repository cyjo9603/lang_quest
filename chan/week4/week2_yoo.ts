const week2_util = {
  getLargestVale: (inputArray: number[]): number => {
    let value: number = 0;
    inputArray.forEach((element: number): void => {
      if (element > value) {
        value = element;
      }
    });
    return value;
  },
};

function immigration(numberOfPeople: number, times: number[]): number {
  const timeTable: number[] = [];

  times.forEach(() => timeTable.push(0));

  for (let i: number = 0; i < numberOfPeople; i++) {
    let virtualCheck: number = timeTable[0] + times[0];
    let checkNumber: number = 0;
    for (let j: number = 1; j < times.length; j++) {
      const virtualValue = timeTable[j] + times[j];
      if (virtualCheck >= virtualValue) {
        virtualCheck = virtualValue;
        checkNumber = j;
      }
    }
    timeTable[checkNumber] += times[checkNumber];
  }

  return week2_util.getLargestVale(timeTable);
}

console.log(immigration(6, [7, 10]));
