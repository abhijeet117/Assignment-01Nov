// 1 - print numbers from 1 to 10  loop from 1 to 10 and print each numbers .

/* for(let i =1; i<=10; i++) {
    console.log(i)
} */

// 2 - print only even numbers from 1 to 20 use loop and conditions to print even ones .

/* for(let i=1; i<=20; i++) {
    if(i%2===0) {
        console.log(i);
    }
} */

// 3 - print numbers from 10 to 1 reverse loop with a decrement .

/* for(let i =10; i>=1; i--){
    console.log(i);
} */

// 4 - print the word "yes" 5 times repeat using a loop

/* for(let i =1; i<6; i++) {
    console.log("yes");
} */

// 5 - print whether numbers from 1 to 10 are
// even or odd  for each number check :"even", else -> "odd".

/* for(let i = 1; i<=10; i++) {
    if(i%2===0) {
        console.log(`${i} is even.`);
    }
    if(i%2 !==0) {
        console.log(`${i} is odd.`);
    }
} */

// 6 - ask user for a number and say if its
// positive or negative  use prompt() and a condition.

/* let answer = prompt("Please Enter Your Number");

if (answer === null) {
  console.error("Cancel by user");
} else if (answer.trim() === "") {
  console.warn("User Enter Blank Space");
} else {
  let num = Number(answer);

  if (isNaN(num)) {
    console.error("PLease enter a valid number");
  } else if (num === 0) {
    console.log("0 is neutral number");
  } else if (num > 0) {
    console.log("Number is Positive");
  } else {
    console.log("Number is Negative");
  }
} */


// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

/* let age = Number(prompt("Enter Your age "));

if(age >= 18) {
    console.log("Eligible")
} else {
    console.log("Not Eligible")
} */


// 8. Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.


/* for(let i =1; i<=10; i++) {
    console.log(` 5 x ${i} = ${5 * i} `);
} */


// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.    

/* let count = 0;
for (let i =1; i<= 15; i++) {
    if(i>8) {
        count++  
    } 
}
console.log(count + " Times") */


// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

/* let password = "sheryians/src";

let userInput = prompt("Please enter your password");

if(userInput === password) {
  console.log("Password Matched");
} else {
  console.warnj("Entered password did not matched");
} */

































