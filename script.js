// CHAPTER 21 to 25

// Question # 1
// var firstName = prompt("Enter your last name")
// var lastName = prompt("Enter your first name")

// var fullName = firstName.slice(0, 1).toUpperCase() + firstName.slice(1) + " " + lastName.slice(0, 1).toUpperCase() + lastName.slice(1)

// console.log("Hello, " + fullName)

// Question # 2
// var favouriteMobile = prompt("Enter the name of your favourite mobile", "Samsung Galaxy S26 Ultra")
// console.log("My favourite mobile is:", favouriteMobile)
// console.log("length of string:", favouriteMobile.length)

// Question # 3
// var string = "Pakistani"
// console.log("String:", string)
// console.log("Index of 'n':", string.indexOf("n"))

// Question # 4
// var string = "Hello World"
// console.log("String:", string)
// console.log("Last index of 'l':", string.lastIndexOf("l"))

// Question # 5
// var string = "Pakistani"
// console.log("String:", string)
// console.log("Character at index 3:", string.charAt(3))

// Question # 6
// var firstName = prompt("Enter your last name", "Basil")
// var lastName = prompt("Enter your first name", "ali")

// var titledFirstName = firstName.slice(0, 1).toUpperCase() + firstName.slice(1)
// var titledLastName = lastName.slice(0, 1).toUpperCase() + lastName.slice(1)

// var fullName = titledFirstName.concat(" ", titledLastName)

// console.log("Hello, " + fullName)

// Question # 7
// var city = "Hyderabad"
// console.log("City:", city)

// city = city.replace("Hyder", "Islam")
// console.log("After replacement:", city)

// Question # 8
// var message = "Ali and Sami are best friends. They play cricket and football together."
// message = message.replaceAll("and", "&")
// console.log(message)

// Question # 9
// var value = "472"
// console.log("Value:", value)
// console.log("Type:", typeof value)

// value = Number(value)
// console.log("Value:", value)
// console.log("Type:", typeof value)

// Question # 10
// var userInput = prompt("Write something", "peanuts")
// console.log("User input:", userInput)

// userInput = userInput.toUpperCase()
// console.log("Upper case:", userInput)

// Question # 11
// var userInput = prompt("Write something", "javascript")
// console.log("User input:", userInput)

// userInput = userInput.slice(0, 1).toUpperCase() + userInput.slice(1)
// console.log("Title case:", userInput)

// Question # 12
// var num = 35.36
// console.log("Number:", num)
// num = num.toString().replace(".", "")
// console.log(num)

// Question # 13
// var userName = prompt("Enter your username", "Basil@ali30")
// var userNameValid = false

// for (let i = 0; i < userName.length; i++) {
//     if (userName[i] == "@" || userName[i] == "." || userName[i] == "," || userName[i] == "!") {
//         console.log("Please enter a valid username")
//         userNameValid = false
//         break
//     } else {
//         userNameValid = true
//     }
// }

// if (userNameValid == true) {
//     console.log("Your username is:", userName)    
// }

// Question # 14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var userInput = prompt("Search item", "APplE pie")
// var itemFound = false
// userInput = userInput.toLowerCase()

// for (let i = 0; i < A.length; i++) {
//         if (A[i] == userInput) {
//             console.log(userInput, "is available at index", i, "in our bakery")
//             itemFound = true
//             break
//         }
// }
// if (itemFound == false) {
//     console.log("We are sorry.", userInput, "is not available in our bakery")
// }

// Question # 15
// var password = prompt("Enter a password")
// var firstChracter = password.slice(0, 1)
// var firstChracterCode = firstChracter.charCodeAt()
// var hasNumber = false
// var hasAlphabet = false

// for (let i = 0; i < password.length; i++) {

//     var passwordCode = password.charCodeAt(i)

//     if ((passwordCode >= 65 && passwordCode <= 90) || (passwordCode >= 97 && passwordCode <= 122)) {
//         hasAlphabet = true
//     }
//     if (passwordCode >= 48 && passwordCode <= 57) {
//         hasNumber = true
//     }
// }

// if (password.length < 6) {
//     console.log("Password must be at least 6 characters long. Please try again")
// } else if (firstChracterCode >= 48 && firstChracterCode <= 57) {
//     console.log("Password cannot start with a number. Please try again")
// } else if (hasNumber == false || hasAlphabet == false) {
//     console.log("Password must contain both letters and numbers. Please try again")
// } else {
//     console.log("Password is Valid!")
// }

// Question # 16
// var university = "University of Karachi"
// university = university.split("")

// for (let i = 0; i < university.length; i++) {
//     console.log(university[i]) 
// }

// Question # 17
// var userInput = "Pakistan"
// var lastCharcter = userInput.charAt(userInput.length - 1)

// console.log("User input:", userInput)
// console.log("Last character of input:", lastCharcter)

// Quetion # 18
// var str = "The quick brown fox jumps over the lazy dog"
// var lowerStr = str.toLowerCase()
// var arr = lowerStr.split(" ")
// var count = 0

// for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == "the") {
//             count++
//         }
// }

// console.log("Text:", str)
// console.log("There are", count, "occurrence(s) of word 'the'",)





// CHAPTER 26 to 30

// Question # 1
// var num = Number(prompt("Enter a number", 3.45215))

// console.log("Number:", num)
// console.log("Round off value:", Math.round(num))
// console.log("Floor value:", Math.floor(num))
// console.log("Ceil vlue:", Math.ceil(num))

// Question # 2
// var num = Number(prompt("Enter a negtive number", -2.637))

// if (num > 0) {
//     console.log("The number should be negtive")
// } else {
//     console.log("Number:", num)
//     console.log("Round off value:", Math.round(num))
//     console.log("Floor value:", Math.floor(num))
//     console.log("Ceil vlue:", Math.ceil(num))
// }

// Question # 3
// var num = Number(prompt("Enter a number"))
// var absoluteValue = num

// if (num < 0) {
//     absoluteValue = num * -1
// }

// console.log("The absolute value of", num, "is", absoluteValue)

// Question # 4
// var valueOfDice = Math.round((Math.random() * 6))
// console.log("Random dice value:", valueOfDice)

// Question # 5
// var coinValue;
// var randomNum = Math.round(Math.random() * 1 + 1)

// if (randomNum == 2) {
//     coinValue = "Heads"
// } else {
//     coinValue = "Tails"
// }

// console.log("Random coin value:", coinValue)

// Question # 6
// var randomNum = Math.round(Math.random() * 99 + 1)
// console.log("Random number between 1 and 100:", randomNum)

// Question # 7
// var userInput = prompt("Enter your wieght in kilograms")
// userInput = parseFloat(userInput)
// console.log("The weight of user is", userInput, "Kilograms")

// Question # 8
// var randomSecreatNum = Math.round(Math.random() * 9 + 1)
// var userInput = Number(prompt("Enter a number between 1 to 10"))

// if (randomSecreatNum == userInput) {
//     console.log("Congratulations! You guessed the correct number")
// } else {
//     console.log("Sorry! That is not correct. Try again")
// }





// CHAPTER 31 to 34

// Question # 1
// var now = new Date();
// console.log(now);

// Question # 2
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// console.log("Current month: " + months[now.getMonth()]);

// Question # 3
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// console.log("Today is " + days[now.getDay()]);

// Question # 4
// var dayNum = now.getDay();
// if (dayNum === 0 || dayNum === 6) console.log("It's Fun day");
// else console.log("It's working day");

// Question # 5
// var currentDate = now.getDate();
// if (currentDate < 16) console.log("First fifteen days of the month");
// else console.log("Last days of the month");

// Question # 6
// var elapsedMs = now.getTime();
// console.log("Elapsed minutes since 1970: " + elapsedMs / (1000 * 60));

// Question # 7
// var hours = now.getHours();
// if (hours < 12) console.log("Its AM");
// else console.log("Its PM");

// Question # 8
// var laterDate = new Date(2020, 11, 31);
// console.log("Later date: " + laterDate);

// Question # 9
// var ramadan = new Date(2015, 5, 18);
// var today = new Date(2015, 11, 5);
// var daysPassed = (today - ramadan) / (1000 * 60 * 60 * 24);
// console.log(Math.floor(daysPassed) + " days have passed");

// Question # 10
// var start2015 = new Date(2015, 0, 1);
// var refDate = new Date(2015, 11, 5, 22, 50, 16);
// console.log((refDate - start2015) / 1000 + " seconds passed");

// Question # 11
// console.log("current date: " + now);
// var oneHourBack = new Date(now);
// oneHourBack.setHours(now.getHours() - 1);
// console.log("1 hour ago: " + oneHourBack);

// Question # 12
// var hundredBack = new Date(now);
// hundredBack.setFullYear(now.getFullYear() - 100);
// console.log("100 years back: " + hundredBack);

// Question # 13
// var age = prompt("Enter your age");
// console.log("Your birth year is " + (new Date().getFullYear() - age));

// Question # 14
// console.log("Customer Name: ABC Customer");
// console.log("Month: February");
// console.log("Number of units: 410");
// console.log("Charges per unit: 16");
// console.log("Net Amount: " + 410 * 16);
// console.log("Late surcharge: 350");
// console.log("Gross Amount: " + (410 * 16 + 350));





// CHAPTER 35 to 38on showDate() {
//     var now = new Date();
//     console.log(now);
// }
// showDate

// Question # 1 Current date & time
// functi();

// Question # 2 Greet user
// function greet(fname, lname) {
//     var full = fname + " " + lname;
//     console.log("Hello " + full);
// }
// greet("Ali", "Khan");

// Question # 3 Add two numbers
// function add() {
//     var a = Number(prompt("Enter first"));
//     var b = Number(prompt("Enter second"));
//     var sum = a + b;
//     console.log("Sum is " + sum);
// }
// add();

// Question # 4 Calculator
// function calc(a, b, op) {
//     var result;
//     if (op === "+") result = a + b;
//     if (op === "-") result = a - b;
//     if (op === "*") result = a * b;
//     if (op === "/") result = a / b;
//     console.log(a + " " + op + " " + b + " = " + result);
// }
// calc(10, 5, "+");

// Question # 5 Square
// function square(n) {
//     var ans = n * n;
//     console.log("Square is " + ans);
// }
// square(5);

// Question # 6 Factorial
// function fact(n) {
//     var ans = 1;
//     for (var i = 1; i <= n; i++) {
//         ans = ans * i;
//     }
//     console.log("Factorial is " + ans);
// }
// fact(5);

// Question # 7 Counting
// function count(start, end) {
//     for (var i = start; i <= end; i++) {
//         console.log(i);
//     }
// }
// count(1, 10);

// Question # 8 Hypotenuse
// function hyp(base, perp) {
//     function square(x) {
//         return x * x;
//     }
//     var h = Math.sqrt(square(base) + square(perp));
//     console.log("Hypotenuse is " + h);
// }
// hyp(3, 4);

// Question # 9 Area of rectangle
// function area(w, h) {
//     var a = w * h;
//     console.log("Area is " + a);
// }
// area(15, 25);

// Question # 10 Palindrome
// function palindrome(str) {
//     var rev = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         rev = rev + str[i];
//     }
//     if (str === rev) {
//         console.log(str + " is palindrome");
//     } else {
//         console.log(str + " is not palindrome");
//     }
// }
// palindrome("madam");
// palindrome("hello");

// Question # 11 Capitalize first letter
// function capitalize(str) {
//     var words = str.split(" ");
//     var out = "";
//     for (var i = 0; i < words.length; i++) {
//         var first = words[i].charAt(0).toUpperCase();
//         var rest = words[i].slice(1);
//         out = out + first + rest + " ";
//     }
//     console.log(out);
// }
// capitalize("the quick brown fox");

// Question # 12 Longest word
// function longest(str) {
//     var words = str.split(" ");
//     var big = "";
//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > big.length) {
//             big = words[i];
//         }
//     }
//     console.log("Longest word is " + big);
// }
// longest("Web Development Tutorial");

// Question # 13 Count letter
// function countLetter(str, letter) {
//     var c = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             c++;
//         }
//     }
//     console.log(letter + " appears " + c + " times");
// }
// countLetter("JSResourceS.com", "o");

// Question # 14 Circle
// function cir(r) {
//     var c = 2 * 3.14 * r;
//     var a = 3.14 * r * r;
//     console.log("Circumference is " + c);
//     console.log("Area is " + a);
// }
// cir(5);









// CHAPTER 38 to 40

// Q1: power function
// function power(a, b) {
//     let result = 1;
//     for (let i = 1; i <= b; i++) {
//         result = result * a;
//     }
//     return result;
// }
// power(2, 3); // 8

// Q2: leap year
// function leapYear(year) {
//     if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
//         return "Leap Year";
//     } else {
//         return "Not Leap Year";
//     }
// }
// leapYear(2000); // "Leap Year"

// Q3: triangle area
// function triangleArea(a, b, c) {
//     let s = (a + b + c) / 2;
//     let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
// }
// triangleArea(3, 4, 5); // 6

// Q4: average, percentage, max, min
// function average(m1, m2, m3) {
//     return (m1 + m2 + m3) / 3;
// }
// function percentage(m1, m2, m3) {
//     return (m1 + m2 + m3) / 300 * 100;
// }
// function maximum(m1, m2, m3) {
//     if (m1 > m2 && m1 > m3) return m1;
//     if (m2 > m1 && m2 > m3) return m2;
//     return m3;
// }
// function minimum(m1, m2, m3) {
//     if (m1 < m2 && m1 < m3) return m1;
//     if (m2 < m1 && m2 < m3) return m2;
//     return m3;
// }

// Q5: custom indexOf
// function myIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == char) {
//             return i;
//         }
//     }
//     return -1;
// }
// myIndexOf("hello", "e"); // 1

// Q6: delete vowels
// function deleteVowels(sentence) {
//     let newSentence = "";
//     for (let i = 0; i < sentence.length; i++) {
//         if (sentence[i] != "a" && sentence[i] != "e" && sentence[i] != "i" && sentence[i] != "o" && sentence[i] != "u") {
//             newSentence = newSentence + sentence[i];
//         }
//     }
//     return newSentence;
// }
// deleteVowels("hello"); // "hll"

// Q7: count two vowels using switch
// function countVowelsPair(str) {
//     let count = 0;
//     for (let i = 0; i < str.length - 1; i++) {
//         switch (str[i]) {
//             case "a": case "e": case "i": case "o": case "u":
//                 switch (str[i + 1]) {
//                     case "a": case "e": case "i": case "o": case "u":
//                         count++;
//                 }
//         }
//     }
//     return count;
// }
// countVowelsPair("please"); // 1 (ea)