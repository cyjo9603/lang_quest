function amountCheck(inputNumber) {
  let modular = Math.floor(inputNumber / 5);
  while (modular > -1) {
    let amount = inputNumber;
    amount -= 5 * modular;
    if (amount % 3 === 0 || amount === 0) {
      return console.log('5킬로그램 봉투 : ' + modular + '개, 3킬로그램 봉투 : ' + amount / 3 + '개');
    }
    modular--;
  }
  return console.log('정확하게 나누어 지지 않습니다.');
}
