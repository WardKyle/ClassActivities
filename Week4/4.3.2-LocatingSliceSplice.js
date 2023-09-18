const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
let index1 = arr.indexOf("a");
let index2 = arr.indexOf("b");
let index3 = arr.indexOf("c");
console.log(index1, index2, index3);

// find the last index of "a", "b", and "c"
let lastindex1 = arr.lastIndexOf("a");
let lastindex2 = arr.lastIndexOf("b");
let lastindex3 = arr.lastIndexOf("c");
console.log(lastindex1, lastindex2, lastindex3);

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"

let done = false;
while(!done){
  arr.forEach((el)=> {
    done = true;
    if(arr.indexOf(el) != arr.lastIndexOf(el)){
      arr.splice(arr.lastIndexOf(el),1);
      done = false;
    }
  });
}
console.log(arr);
