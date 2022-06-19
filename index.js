function isPalindrome(word) {
  
  let newWord = word.toLowerCase();
  let newWordRevevse = newWord.split("").reverse().join("");
  return newWord === newWordRevevse;
}

/* 
  Add your pseudocode here
  variable newWord is word.toLowerCase();
  variable newWordRevevse is by changing newWord.split("") then reverse() and later join("");
  strictly compare newWord and newWordRevevse
*/

/*
  Solution steps
  1. Change word to lowercase letters
  2. Split the lowercase letter words, reverse them and later join them
  3. Compare the reversed word with the original word
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
