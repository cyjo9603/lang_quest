import { util } from './util';

class ChanceList {
  scale = { left: 0, right: 0 };

  resetScale(): void {
    this.scale.left = 0;
    this.scale.right = 0;
  }

  getWeightTurn(numberLength: number): number[][] {
    const weightTrun: number[] = [];
    for (let i = 1; i <= numberLength; i++) {
      weightTrun.push(Math.pow(2, i));
    }
    const weightTrunList: number[][] = util.getPermutation(weightTrun);
    return weightTrunList;
  }

  getWeightList(inputNumber: number): number[] {
    const weightList: number[] = [];
    for (let i: number = 0; i < inputNumber; i++) {
      weightList.push(Math.pow(2, i + 1));
    }
    return weightList;
  }

  getScaleDirection(numberLength: number, directionNumber: number): string[] {
    const scaleDirection = Array.from(directionNumber.toString(2));
    const setNumberLength = numberLength - scaleDirection.length;
    if (setNumberLength) {
      for (let i = 0; i < setNumberLength; i++) {
        scaleDirection.unshift('0');
      }
    }
    return scaleDirection;
  }

  runChanceList(inputNumber: number): number {
    const weightList: number[] = this.getWeightList(inputNumber);
    const weightTrun: number[][] = this.getWeightTurn(inputNumber);
    let count: number = 0;

    for (let i: number = 0; i < util.getFactorial(inputNumber); i++) {
      for (let j: number = 0; j < Math.pow(2, inputNumber); j++) {
        let check: boolean = true;
        const scaleDirection: string[] = this.getScaleDirection(inputNumber, j);
        for (let floor: number = 0; floor < inputNumber; floor++) {
          if (scaleDirection[floor] === '1') {
            this.scale.right += weightTrun[i][floor];
          } else if (scaleDirection[floor] === '0') {
            this.scale.left += weightTrun[i][floor];
          }

          if (this.scale.left > this.scale.right) {
            check = false;
            break;
          }
        }
        if (check) {
          count++;
        }
        this.resetScale();
      }
    }
    return count;
  }
}

export { ChanceList };
export default {};
