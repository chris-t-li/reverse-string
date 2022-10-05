// Use Array Methods
function reverseString1(str) {
  return str.split("").reverse().join("");
}

// Use iteraction
function reverseString(str) {
  // convert string param into an array
  const strArray = str.split("");
  // get length of array 
  const n = strArray.length-1;
  const reverseArray = strArray.map((element, index, array) => element = array[n - index])
  return reverseArray.join("");  
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
