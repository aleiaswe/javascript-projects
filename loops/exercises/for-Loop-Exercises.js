/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */


    for (i = 0; i < 21; i++) { 
      //console.log(i);
    }

    for (i = 3; i < 30; i = i + 2) { 
      //console.log(i)
    }

    for (i = 12; i >= -14; i = i - 2) { 
      //console.log(i);
    }

    for (i = 50; i >= 20; i = i - 3) { 
      //console.log(i);
    }
/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 

let str = "LaunchCode"; 
let arr = [1, 5, 'LC101', 'blue', 42];

// A)
for (i = 0; i < arr.length; i++) { 
  console.log(arr[i]);
}

// B) 
let reversed = ""
for (i = 0; i < str.length; i++) { 
  reversed = str[i] + reversed
  console.log(reversed);
}



/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

  let arr2 = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104]
  let evenArr = [];
  let oddArr = [];

  for (i = 0; i < arr2.length; i++) { 
    if (arr2.includes(-10, 0, 2, 18, 38, 104)) { 
      console.log(arr2.push(evenArr));
    } else if (arr2.includes(-5, 3, 13)) { 
      console.log(arr2.push(oddArr));
    }
  }