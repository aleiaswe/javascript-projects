const input = require('readline-sync');
const originalStr = "LaunchCode";


//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

// const str = originalStr.slice(0,3); 
// const str2 = originalStr.slice(3,10); 
// const newStr = str2 + str;

/*let str = "LaunchCode";
str = str.slice(0,3);
//console.log(str); */

/*const str2 = "LaunchCode"; 
str2 = str2.slice(3,10);
//console.log(str2); */

//console.log(str2 + str);
//const newStr = str2 + str; 


//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${originalStr} is a program for those interested in making coding a career. If you want to know how to 
write ${originalStr} in pig latin, then you would write ${newStr}, cool right?`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
const question = input.question("What word would you like to translate?"); 
const charactersToRelocate = input.question("How many letters would you like to move?");

 const str = originalStr.slice(0,3); 
const str2 = originalStr.slice(3,10); 
const newStr = str2 + str; 

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (charactersToRelocate > originalStr.length) { 
    console.log("The number you have entered is too much. Please go down a few.");
} else if (charactersToRelocate < originalStr.length) { 
    console.log("Your number is within the limit. Please wait will letters are being relocated."); 
}