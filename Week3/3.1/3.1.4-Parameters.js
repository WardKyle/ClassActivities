// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together

function parameters(param1 = 19, param2 = 25, ...resParam){
    console.log(`param1: ${param1}, param2: ${param2}`);
    resParam.length > 0 ? console.log(resParam):"Empty rest parameter";
    return param1 + param2;
}

// invoke the function and pass in two numbers

console.log(parameters(5,6));

// invoke the function and pass in more than two numbers

parameters(5,6,21);
// invoke the function and pass in only one number

parameters(5);
// change the function to set default values for the parameters

// again, invoke the function and pass in only one number

console.log(parameters(5));
// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers
parameters(5, 6, 21, 19, 1, 3, 4, 5);