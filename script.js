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

/* Level 2 – Slightly Tougher but Logical */

// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

/* let password = "sheryians/src";
let matched = false;

for (let i = 1; i <= 3; i++) {
  let userInput = prompt("Please enter your password");

  if (userInput === password) {
    console.log("Password Matched");
    matched = true;
    break;
  }
}
if (!matched) {
  console.error("Account Locked");
}
 */


// 12. Ask user for words until they type “stop”. 
// Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".


/* let userInput = prompt("Enter text");
let count = 0;

while(userInput !== "stop"){
  if(userInput === "yes") {
    count++
  }
  userInput = prompt("Try again");

}
console.log("total count is "+ count); */


// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

/* for(let i = 1; i<=50; i++) {
  if(i%7 === 0) {
    console.log("divisible numbers are " + i)
  }
} */


// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

/* let sum = 0;
for(let i = 1; i<=30; i++) {
  if(i%2 !== 0) {
    sum += i;
  }
}
console.log(sum); */


// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

/* let userInput = +prompt("Please enter even number");

while(userInput % 2 !== 0) {
  userInput = prompt("Try again");
} */


// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.


/* 17. Print only first 3 odd numbers from 1 to 20
Use loop. Stop with break after 3 odd prints. */


/* let count = 0;
for(let i = 1; i<=20; i++ ) {
  if(i%2 !== 0) {
    console.log(i);
    count++
  }
  if(count === 3) {
    break;
  }
} */

  //chatGpt//

/* for(let i = 1, count = 0; count<3; i++ ) {
  if(i%2 !==0) {
    console.log(i);
    count++
  }
} */



// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.


/* let countP = 0;
let countN = 0;

for(let i = 1; i<=5; i++) {
  let num = Number(prompt(`Enter number ${i}`));
  
  if(num > 0) {
    countP++;
  }
  else{
    countN++;
  }
}

console.log("positive Numbers are " + countP);
console.log("Negative Numbers are " + countN); */



// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”























