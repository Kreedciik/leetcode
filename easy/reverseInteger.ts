"use strict";

const reverse = (x: number) => {
  const strFromNumber = x.toString();
  let numberFromStr: string | number = "";
  let minus = "";
  const math = Math;
  for (let i = strFromNumber.length - 1; i >= 0; i--) {
    if (strFromNumber[i] !== "-") {
      numberFromStr += strFromNumber[i];
    } else {
      minus += "-";
    }
  }

  numberFromStr = parseInt(minus.concat(numberFromStr));
  const checkRange =
    numberFromStr >= math.pow(-2, 31) && numberFromStr <= math.pow(2, 31)
      ? numberFromStr
      : 0;
  return checkRange;
};
