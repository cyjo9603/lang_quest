const util = {
  isUnique: (inputArray: string[]): boolean => {
    if (
      inputArray[0] === inputArray[1] ||
      inputArray[0] === inputArray[2] ||
      inputArray[1] === inputArray[2]
    ) {
      return true;
    } else {
      return false;
    }
  },
  numberCheck: (input: string): boolean => {
    if (input.length !== 3 || util.isUnique(Array.from(input)) || isNaN(parseInt(input))) {
      util.errorMsg('잘못된 값을 입력하였습니다. 다시 입력해 주세요.');
    }
    return true;
  },
  errorMsg: (msg: string): void => {
    console.error(msg);
  },
};

export { util };
export default {};
