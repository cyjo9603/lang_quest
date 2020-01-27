const util = {
  getPermutation: (inputList: number[]): number[][] => {
    return inputList.reduce(
      (permutationList: number[][], element: number): number[][] => {
        const list: number[][] = [];
        permutationList.forEach((seq: number[]) => {
          for (let i = seq.length; i >= 0; i--) {
            const newSeq: number[] = [...seq];
            newSeq.splice(i, 0, element);
            list.push(newSeq);
          }
        });
        return list;
      },
      [[]]
    );
  },
  getFactorial: (inputNumber: number): number => {
    if (inputNumber === 1) {
      return inputNumber;
    } else {
      return inputNumber * util.getFactorial(inputNumber - 1);
    }
  },
};

export { util };
export default {};
