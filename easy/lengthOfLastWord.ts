"use strict";

const lengthOfLastWord = (s: string): number => {
  if (s.includes(" ")) {
    for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] !== " ") {
        let j = i,
          lastStr = "";
        while (s[j] !== " " && s[j]) {
          lastStr += s[j];
          j--;
        }
        return lastStr.length;
      } else continue;
    }
  }
  return s.length;
};
