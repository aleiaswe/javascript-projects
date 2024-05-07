//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0,1));
console.log(language.slice(4,5));
console.log(language.slice(0,1) + language.slice(4,5)); 

//2. Without using slice(), use method chaining to accomplish the same thing.

//let firstInitial = (language.replace("ava", ""));
//console.log(firstInitial.replace("cript", "")); 
//console.log(language.replace("cript", "")); 

//the below code is method chaining, the above code is using regular method via assignment to achieve same result. 
console.log(language.replace("ava", "").replace("cript", ""));

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."

//let bothInitials = firstInitial.replace("cript", ""); 

// above commented assignment correleates with the commented out code under "2."
let bothInitials = language.replace("ava", "").replace("cript", "");
console.log(`The abbreviation for ${language} is ${bothInitials}`);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.
let dreamLocation = "Japanese    ";
console.log(dreamLocation.toUpperCase().slice(0,5).trim());

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
console.log(notTitleCase.charAt(0).toUpperCase() + notTitleCase.slice(1));
let firstLetter = notTitleCase.charAt(0).toUpperCase() + notTitleCase.slice(1);
//let secondLetter = notTitleCase.charAt().toUpperCase() + notTitleCase.slice(1)
//console.log(secondLetter);