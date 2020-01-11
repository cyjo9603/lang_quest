// 메인 함수
function getPlayerList(inputList) {
  if (inputList.length < 5) {
    return errorMessage('입력된 선수의 숫자가 부족합니다.');
  }
  const playerFamilynameList = getFamilyname(inputList);
  const familynameFrequency = getFrequency(playerFamilynameList);

  for (let key in familynameFrequency) {
    if (familynameFrequency[key][1] > 4) {
      const playerList = getFamilynamePlayerList(inputList, playerFamilynameList, familynameFrequency[key][0]);
      return console.log(`${playerList}`);
    } else {
      return errorMessage('내일 뛸 선수가 없어서 기권합니다.');
    }
  }
}

// 이름 성 분리 함수
function getFamilyname(inputList) {
  const playerFamilyname = [];
  inputList.forEach((element, index) => {
    playerFamilyname.push([element.substr(0, element.search(/\s/)), index]);
  });
  return playerFamilyname;
}

// 성 빈도 수 함수
function getFrequency(inputList) {
  const familynameFrequency = [];
  inputList.sort();
  inputList.forEach((element, index) => {
    if (familynameFrequency.length === 0) {
      familynameFrequency.push([element[0], 1]);
      return;
    }
    if (inputList[index - 1][0] === element[0]) {
      familynameFrequency[familynameFrequency.length - 1][1]++;
    } else {
      familynameFrequency.push([element[0], 1]);
    }
  });
  familynameFrequency.sort((unit1, unit2) => {
    return unit2[1] - unit1[1];
  });
  return familynameFrequency;
}

// 출전 선수 명단 5명 계산 함수
function getFamilynamePlayerList(playerListAll, playerFamilynameList, familyname) {
  let outputPlayerList = '출전할 선수의 명단은 ';
  let count = 0;
  for (let key in playerListAll) {
    if (playerFamilynameList[key][0] == familyname) {
      count++;
      if (count === 5) {
        outputPlayerList += playerListAll[playerFamilynameList[key][1]] + '입니다.';
        break;
      }
      outputPlayerList += playerListAll[playerFamilynameList[key][1]] + ', ';
    }
  }
  return outputPlayerList;
}

function errorMessage(errorString) {
  console.error(errorString);
}

getPlayerList(['cho chanyeong', 'im sungjun', 'yoo changwon', 'cho yongwoo', 'cho minguk', 'yun youngsub', 'yang wonseo', 'cho hayeong', 'lee yongkyun', 'kim jungwoo', 'yun hayeong', 'cho minho']);
