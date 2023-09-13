/* eslint-disable prettier/prettier */
// create an Array using an Array literal
let arr = [1, 2, 3, 4, 5, 6, 17];

// access the 1st item in the Array
arr[0];

// access the last item in the Array
arr[5];

// print the length of the Array
console.log(arr.length);

// use the length property to access the last item in the Array
[arr.length - 1];

// with for...of, loop over the Array, modify the value and add to a different Array
let newArr = [];
for (let item of arr) {
    newArr.push(`new ${item}`);
}
console.log(newArr);