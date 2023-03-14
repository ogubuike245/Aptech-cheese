// QUESTION ONE

// Create a function that takes 3 parameters
// 1) first_number
// 2) second_number
// 3) arithmetics
// depending on the arithmetic sign perform the arithmetics operation.

function computeArithmeticFunction(first_number, second_number, arithmetics) {
  let result = 0;

  switch (arithmetics) {
    case "+":
      result = first_number + second_number;
      break;
    case "-":
      result = first_number - second_number;
      break;
    case "*":
      result = first_number * second_number;
      break;
    case "/":
      result = first_number / second_number;
      break;
    case "%":
      result = first_number % second_number;
      break;
    default:
      console.log("Invalid arithmetic operator provided.");
      break;
  }
  return result;
}

console.log(computeArithmeticFunction(10, 5, "+")); // Output: 15
console.log(computeArithmeticFunction(10, 5, "-")); // Output: 5
console.log(computeArithmeticFunction(10, 5, "*")); // Output: 50
console.log(computeArithmeticFunction(10, 5, "/")); // Output: 2
console.log(computeArithmeticFunction(10, 5, "%")); // Output: 0

// QUESTION TWO

// check if the first and last letter in 'GOING' is the same and if the length are even

function checkString(str) {
  if (str.length % 2 === 0 && str.charAt(0) === str.charAt(str.length - 1)) {
    return true;
  } else {
    return false;
  }
}

checkString("GOING"); // returns false because the length is not even
