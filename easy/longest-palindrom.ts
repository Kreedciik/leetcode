"use strict";

const longestPalindrome = (str: string): string => {
  const str2 = str.toLowerCase();
  let longestPalindrome = "";
  if (str2.length > 1) {
    for (let i = 0; i < str2.length; i++) {
      const matchedIndex = str2.indexOf(str[i], i + 1);
      if (matchedIndex !== -1) {
        const palindrome = str2.slice(i, matchedIndex + 1);
        if (palindrome.length > longestPalindrome.length) {
          longestPalindrome += palindrome;
        }
      }
    }
  } else {
    longestPalindrome = str2;
  }
  return longestPalindrome;
};
