import * as readline from 'readline';
import { util } from './util';
// interface ArrayConstructor {
//   from(arrayLike: any, mapFn?: any, thisArg?: any): Array<any>;
// }

class BaseBall {
  private baseballNumber: string[] = this.getRandomNumber();
  private count: number = 0;

  print(): void {
    console.log(this.baseballNumber);
  }

  getRandomNumber(): string[] {
    while (true) {
      const makeNumber: string[] = [];
      for (let i = 0; i < 3; i++) {
        makeNumber.push(String(Math.floor(Math.random() * 10)));
      }
      if (!util.isUnique(makeNumber)) {
        return makeNumber;
      }
    }
  }

  getStrikeOrBallNumber(input: string): number[] {
    const arrayInputNumber: string[] = Array.from(input);
    let strikeNumber: number = 0;
    let ballNumber: number = 0;

    this.baseballNumber.forEach((systemNumber: string, systemIndex: number) => {
      arrayInputNumber.forEach((inputNumber: string, inputIndex: number) => {
        if (systemNumber === inputNumber) {
          systemIndex === inputIndex ? strikeNumber++ : ballNumber++;
        }
      });
    });

    return [strikeNumber, ballNumber];
  }

  isClear(strikeNumber: number, ballNumber: number): boolean {
    if (strikeNumber === 3) {
      console.log(`count : ${this.count}, 3STRIKE CLEAR!`);
      return true;
    }
    console.log(`count : ${this.count}, STRIKE : ${strikeNumber} BALL : ${ballNumber}`);
    return false;
  }

  runGame(): void {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.setPrompt('숫자를 입력해 주세요 : ');
    rl.prompt();
    rl.on('line', (input: string) => {
      this.count++;
      if (!util.numberCheck(input)) {
        rl.prompt();
      }
      const [strikeNumber, ballNumber] = this.getStrikeOrBallNumber(input);
      this.isClear(strikeNumber, ballNumber) ? rl.close() : rl.prompt();
    });
    rl.on('close', () => process.exit());
  }
}

export { BaseBall };
export default {};
