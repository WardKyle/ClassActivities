// Create a variable "timeOfDay" and assign it a string
let timeofDay = "Night time";

// Create a variable "greeting" that references a template literal
// Use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
let greeting = `Welcome, it is ${timeofDay}`;

// Print "greeting"
console.log(greeting);

// Create a new variable, but do not assign it a value
let newVar;

// Print the new variable and its type
// What type should we expect?
console.log(newVar, typeof newVar);
// should expect undefined, and undefined. Check, check. 

// Assign the variable a value that indicates the variable is purposely blank
// What value should we assign?
newVar = null;

// Print the variable and its type again
// What type should we expect?
console.log(newVar, typeof newVar);

// Try to print a variable that does not exist
// What should we expect to print in the CLI?
console.log(nonExisting);

// Print "greeting" again
// Will this line run?
console.log(greeting);
//No it will not run, the page reads top down and will not make it past the previously undefined variable