// Use Array Methods
// function reverseString1(str) {
//   return str.split("").reverse().join("");
// }

// Using While Loop

function reverseString(str) {
  let reverse_str = "", string = str;
  while (string.length > 0) {
    reverse_str = string[0] + reverse_str;
    string = string.slice(1)
  }
  return reverse_str
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
