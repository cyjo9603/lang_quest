import * as readline from 'readline';

class TransRomanNumerals {
  mark: string = '';
  romanArray: [string, number][] = [
    ['M', 1000],
    ['D', 500],
    ['C', 100],
    ['L', 50],
    ['X', 10],
    ['V', 5],
    ['I', 1],
  ];

  checkMark(inputNumber: number): void {
    inputNumber > 0 ? (this.mark = '') : (this.mark = '-');
  }

  getRomanNumerals(inputNumber: number): string {
    this.checkMark(inputNumber);
    inputNumber = Math.abs(inputNumber);

    let romanNumber: string = '';

    for (let i = 0; i < this.romanArray.length; i++) {
      while (inputNumber >= this.romanArray[i][1]) {
        inputNumber -= this.romanArray[i][1];
        romanNumber += this.romanArray[i][0];
      }
      if (i % 2 === 0 && i < 5 && inputNumber / this.romanArray[i + 2][1] >= 9) {
        inputNumber -= this.romanArray[i + 2][1] * 9;
        romanNumber += this.romanArray[i + 2][0] + this.romanArray[i][0];
      } else if (i % 2 === 1 && i < 6 && inputNumber / this.romanArray[i + 1][1] >= 4) {
        inputNumber -= this.romanArray[i + 1][1] * 4;
        romanNumber += this.romanArray[i + 1][0] + this.romanArray[i][0];
      }
    }

    return romanNumber;
  }

  startTransNumber() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    try {
      rl.question('로마숫자로 바꿀 숫자를 입력해주세요 : ', (input: string) => {
        const romanNumber: string = this.getRomanNumerals(parseInt(input));
        console.log(`변환된 로마숫자 : ${this.mark + romanNumber}`);
        rl.close();
      });
    } catch (e) {
      console.error('잘못된 값을 입력했습니다.');
    }
  }
}

const transRomanNumerals = new TransRomanNumerals();
transRomanNumerals.startTransNumber();
