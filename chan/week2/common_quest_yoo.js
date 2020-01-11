function immigration(numberOfPeople, times) {
  let timeTable = [];

  if (!isCheckNumber(numberOfPeople, times)) {
    return console.log('올바른 값을 입력해 주세요');
  }

  times.forEach(() => timeTable.push(0));

  for (let i = 0; i < numberOfPeople; i++) {
    let virtualCheck = timeTable[0] + times[0];
    let checkNumber = 0;
    for (let j = 1; j < times.length; j++) {
      const virtualValue = timeTable[j] + times[j];
      if (virtualCheck >= virtualValue) {
        virtualCheck = virtualValue;
        checkNumber = j;
      }
    }
    timeTable[checkNumber] += times[checkNumber];
  }

  return getTime(timeTable);
}

function getTime(inputTimeTable) {
  let value = 0;
  inputTimeTable.forEach(element => {
    if (element > value) {
      value = element;
    }
  });
  return value;
}

function isCheckNumber(numberOfPeople, times) {
  const checkList = [numberOfPeople, times.length];
  let checkValue = true;
  times.forEach(element => checkList.push(element));
  checkList.forEach(element => {
    if (element < 1 || element > 1000000) {
      checkValue = false;
    }
  });
  return checkValue;
}

console.log(immigration(100, [7, 5, 9, 10]));
