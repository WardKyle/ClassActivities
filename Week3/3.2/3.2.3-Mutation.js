let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values
x = false;
y = null;
z = undefined;
// print x, y, and z
console.log(x, y, z);

const a = "name";
const b = [];
const c = {};
// try to reassign a, b, and c to FALSY values
// a = null;
// b = undefined;
// c = false;
// using BRACKET NOTATION, assign a value to b
b[0] = 100;
// using DOT NOTATION, assign a PROPERTY to c
c.thisProp = "reassigned";
// using DOT NOTATION, assign a METHOD to c
c.newMethod = () => 1;
// using BRACKET NOTATION, call the method in c
c["newMethod"]();
// print a, b, and c
console.log(a, b, c);