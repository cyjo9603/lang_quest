import * as readline from 'readline';

class SelectionPlayer {
  playerList: string[][] = [];
  inputFamilyName: string = '';
  private selectionPlayerList: string[] = [];

  printList(): void {
    console.log(this.selectionPlayerList);
  }

  splitName(name: string): string[] {
    return name.split(' ');
  }

  selectFamilyName(inputFamilyName: string): boolean {
    const list: string[] = [];
    let count: number = 0;
    this.playerList.forEach((name: string[]): void => {
      if (name[0] === inputFamilyName && count <= 4) {
        list.push(name.join(' '));
        count++;
      }
    });
    if (count === 5) {
      this.selectionPlayerList = [...list];
      return true;
    }
    return false;
  }

  inputPlayer(): string[][] {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    let status: boolean = false;

    console.log('선수 입력을 종료하려면 "$$quit"를 입력해 주세요 ');

    rl.setPrompt('선수 이름을 입력해 주세요 : ');
    rl.prompt();
    rl.on('line', (input: string) => {
      if (status) {
        if (this.selectFamilyName(input)) {
          this.printList();
        } else {
          console.log('내일 뛸 선수가 없어서 기권합니다.');
        }
        rl.close();
      }
      if (input === '$$quit') {
        status = true;
        rl.setPrompt('선발을 뛰는 선수의 성을 입력해주세요 : ');
      }
      this.playerList.push(this.splitName(input));
      rl.prompt();
    });
    rl.on('close', () => process.exit());
    return this.playerList;
  }
}

export { SelectionPlayer };
export default {};
