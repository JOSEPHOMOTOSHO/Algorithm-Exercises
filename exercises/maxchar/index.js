// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let chars = {};
    max = 0;
    charmax = ""
  for(let char of str){
  chars[char] = chars[char] + 1 || 1; //LOGICAL OR RETURNS A TRUTHY VALUE
  //CHARS[CHAR] VALUE IS NOT ASSIGNED IT IS FALSY SO 1(TRUTHY) IS ASSIGNED TO CHARS[CHAR]
  }
  for(let char in chars){
    if(chars[char] > max){
      max = chars[char];
      charmax = char
    }
  }
  return charmax
  }

  
//Longer solution with if statements

//   function maxChar(str) {
//     let chars = {};
//     max = 0;
//     charmax = ""
//   for(let char of str){
//   if(chars[char]){
//     chars[char]++
//   }else{
//     chars[char] = 1;
//   }
//   }
//   for(let char in chars){
//     if(chars[char] > max){
//       max = chars[char];
//       charmax = char
//     }
//   }
//   return charmax
//   }
module.exports = maxChar;
