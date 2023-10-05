// Write a function that determines if a string is a palindrome.

// A palindrome is a string that is the same forward and backwards.

// Examples:
// isPalindrome('racecar') // --> true
// isPalindrome('table') // --> false


// 1.) Gather requirements
// 	Contents of the string. Capitalization? Characters? Numbers?
// 	must be greater than 2?
// 	spaces included?
// 2.) Break down problem
// 	String could be any length
// 	Could be even/odd
// 	Could get any random capitalization in our strings
// 	Priorities / steps: 
// 		Compare beginning and end letters. Start outwards and move inwards.
// 		If the condition passes then we keep moving inwards.
// 3.) Write pseudocode
// 	Loop through the string
// 	Compare first value to end value
// 	If passes / true then keep moving inward on the string
// 	Odd/Even: String will either end with 1 remaining letter and still pass
// 		OR all letters have been checked with none remaining and still pass.
// 4.) Code a solution

function isPalindrome(param){
	param = param.toLowerCase();
	if(param.length == 1){
		return false;
	}
	while(param.length >=1){
		let firstLetter = param[0];
		let lastLetter = param[param.length-1];
		if(firstLetter == lastLetter){
			param = param.slice(1,param.length-1);
		}
		else {
			return false;
		}
	};
	return true;
}

console.log(isPalindrome('racecar'));

// 5.) Test the solution. Tested!
// 6.) Consider changes
// 	Doesn't handle any characters / numbers / spaces
// 	A single length string returns true. Was it supposed to?