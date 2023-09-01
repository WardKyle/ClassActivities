// Follow the steps below to create a **while** loop that TOTALS the numbers from 1 to 100

// 1) create a variable to represent the current number
 let total, i;
 i = 1;
 total = 0;
// 2) create a variable to represent the current total

// 3) write a while loop that sums the numbers from 1 to 100
while (i <= 100){
    total+=i;
    i++;
}
console.log(total);
// Now using the same variables you created in steps 1 and 2, create a **for** loops that TOTALS the numbers from 1 to 100
total = 0;
for(i=1;i<=100;i++){
    total+=i;
}
console.log(total);
// 1) write a for loop that sums the numbers from 1 to 100
let sum=0;
for(i=1;i<=100;i++){
    sum+=i;
}
console.log(sum);