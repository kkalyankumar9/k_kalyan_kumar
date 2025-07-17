// Problem-2: With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]
 
//   Output: (examples)
//     1) input a = 1, then output : 1
//     2) input a = 2, then output : 1, 3
//     3) input a = 3, then output : 1, 3, 5
//     4) input a = 4, then output : 1, 3, 5, 7
//     .
//     .
//     5) input a = x, then output : 1, 3, 5, 7, .......

function odd(input) {
  let container = [];

  if (input > 0) {
    for (let i = 1; ; i++) {
      if (i % 2 !== 0) {
        container.push(i);
      }

      if (container.length === input) {
        break;
      }
    }
    return container;
  } else if (input === "x") {
    return ["1","3","5","..."];
  } else {
    return "❌ Invalid input. Please enter a positive number or 'x'.";
  }
}
let data=odd(10);
console.log(...data.join(","));