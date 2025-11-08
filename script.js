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

/* let start = Number(prompt("Enter Starting num"));
let end = Number(prompt("Enter Ending num"));

if (start > end) {
  for (let i = start - 1; i > end; i--) {
    console.log(i);
  }
} else if(start < end) {
  for (let i = start + 1; i < end; i++) {
    console.log(i);
  }
} else {
  console.log("Both number are same or invalid");
} */

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

/* let sum = 0;
let balance = 1000;
let matched = false;
for (let i = 0; i <= 2; i++) {
  let val = Number(prompt("Enter value"));
  sum += val;
  if (sum === balance) {
    matched = true;
    console.log("Deduct");
  }
}
if (!matched) {
  console.log("Insufficient balance");
}
 */

/* let balance = 1000;
let attempt = 0;

for (let i = 0; i < 3; i++) {
  let val = Number(prompt("Enter your withdraw amount"));
  attempt++;
  if (val > balance || balance === 0) {
    console.log("insufficient balance");
    break;
  } else {
    balance -= val;
    console.log(`Withdraw Successful, Remaining balance is ${balance}`);
  }
}
if (attempt === 3) {
  console.error("Maxium time reached");
}

console.log(`Available balance : ${balance}`); */

// 20. **Ask user for a number and print its double**
//     → Example: input 5 → output 10.

/* let userInput = prompt("please enter your number");

if (userInput === null) {
  console.error("Cancel by user!");
} else if (userInput.trim() === "") {
  console.warn("please don't enter blank space");
} else {
  let uInput = Number(userInput);

  if (isNaN(uInput)) {
    console.log("enter a valid number");
  } else {
    console.log(`Your Double number is ${uInput * 2}`);
  }
} */

// 21. **Ask user for two numbers and print which one is smaller**
//     → Use `if-else` to compare.

/* let num1 = prompt("Enter num1");
let num2 = prompt("Enter num 2")

if(num1>num2) {
  console.log(`${num2} : num2 is smaller.`)
} else {
  console.log(`${num1} : num1 is smaller`)
}
 */

// 22. **Print all numbers from 1 to 50 that are divisible by 5**
//     → Use loop + `%` condition.
/* 
let count = 0;
for (let i = 1; i<=50; i++) {
  if(i%5=== 0) {
    count++;
  }
}
console.log("Total number divisible by 5 is " + count); */

// 23. **Ask user for a number and print its multiplication table**
//     → Example: input 7 → print 7×1 to 7×10.

/* let number = prompt("Enter you number");

for(let i = 1; i<=10; i++) {
  console.log(`${number} x ${i} = ${number * i}`)
} */

// 24. **Ask user for 5 numbers and print their total sum**
//     → Use loop and `+=` to accumulate.

/* let sum = 0;
for (let i =1; i<=5; i++) {
  let num = +prompt("Enter your number");
  
  sum += num
  
}
console.log(sum); */

// 25. **Print numbers between 1 and 30 but skip 15**
//     → Use `continue` statement.

/* for (let i = 0; i <= 30; i++) {
  if (i === 15) continue;
  else {
    console.log(i);
  }
} */

// 26. **Ask user for name 3 times and print “Welcome [name]” each time**
//     → Simple for loop with prompt.

/* let name;
for (let i = 1; i <= 3; i++) {
  name = prompt("enter your name");

  console.log(`Welcome ${name}`);
} */


// 27. **Ask user for a number and check if it’s divisible by 3 and 5**  
//     → If yes → print “FizzBuzz”, else → print number.

/* let num = +prompt("Enter your number");

if (num % 3 === 0 && num % 5 === 0) {
  console.log("“FizzBuzz”");
} else {
  console.log(num);
} */

// 28. **Ask user for a number and print if it’s even or odd**  
//     → Use `% 2` condition.


/* let num = +prompt("Enter your num");

if(num % 2 === 0) {
  console.log("Even Number");
} else if(num % 2 !== 0) {
  console.log("Number is odd");
} */


// 29. **Print only numbers between 1 and 20 that are NOT divisible by 4**  
//     → Use `if (i % 4 !== 0)`.

/* for(let i = 0; i<= 20; i++) {
  if(i%4 !== 0) {
    console.log(i)
  }
} */

// 30. **Ask user for 3 numbers and print their average**  
//     → Use simple arithmetic.

