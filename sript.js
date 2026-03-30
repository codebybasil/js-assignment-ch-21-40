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