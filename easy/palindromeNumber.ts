"use strict";

const isPalindrome = (x: number): boolean => {
  if (x > -1 && x < 10) return true;
  if (x < 0 || x % 10 === 0) return false;

  let power = 0,
    copyX = x,
    sum = 0;
  while (10 ** power < x) {
    power += 1;
  }

  let copyPower = power - 1;

  for (let i = 1; i <= power; i++) {
    const remainder = copyX % 10 ** i;
    copyX -= remainder;
    const digit = remainder / 10 ** (i - 1);
    console.log(digit, remainder);
    sum += digit * 10 ** copyPower;
    copyPower -= 1;
  }
  return x == sum ? true : false;
};

console.log(isPalindrome(121));
