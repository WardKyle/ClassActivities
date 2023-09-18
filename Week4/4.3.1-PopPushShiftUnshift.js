const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let thisNewVar = nums.pop();
let removedSecond = nums.pop();
// remove each of the first two items with shift(), saving each item to a variable
let shift1 = nums.shift();
let shift2 = nums.shift();
// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.unshift(removedSecond);
nums.unshift(thisNewVar);
nums.push(shift2);
nums.push(shift1);

console.log(nums);
