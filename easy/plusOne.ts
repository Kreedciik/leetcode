"use strict";

const plusOne = (digits: number[]): number[] => {
  if (digits[digits.length - 1] !== 9) {
    digits[digits.length - 1] += 1;
    return digits;
  }

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      if (i === 0 && digits[i] === 9) {
        digits[i] = 0;
        digits.unshift(1);
      } else {
        digits[i] = 0;
      }
    } else {
      digits[i] += 1;
      break;
    }
  }

  return digits;
};
