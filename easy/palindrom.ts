"use strict";

const isPalindrom = (str: string): boolean => {
  let isPalindrom = false;
  const str2 = str.toLowerCase();
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === str2[str2.length - (i + 1)]) {
      isPalindrom = true;
    } else {
      isPalindrom = false;
      break;
    }
  }

  return isPalindrom;
};
