// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str){
  let charMap = {}
  let charCounter = 0;
  let objChar
  for (let char of str){
  if(charMap[char]){
    charMap[char]++
    
  }else{
    charMap[char] = 1;
    }
  }
  for (let char in charMap){
    if(charMap[char] > charCounter){
   charCounter = charMap[char];
   objChar = char;
   }
}
  return objChar
  }
  

module.exports = maxChar;
