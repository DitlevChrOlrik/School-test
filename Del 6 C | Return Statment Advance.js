// Del 6 C | Return Statement Advance

// Oppgave 1

const convertToCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;

console.log(convertToCelsius(100)); // 37.78


// Oppgave 2

const calculateAge = (birthYear, currentYear) => currentYear - birthYear;

console.log(calculateAge(2005, 2025)); // 20


// Oppgave 3

const calculate = (num1, num2, operator) => {
    return operator === "+" ? num1 + num2 : num1 - num2;
};

console.log(calculate(5, 3, "+")); // 8
console.log(calculate(5, 3, "-")); // 2


// Oppgave 4

const isEven = (num) => num % 2 === 0;

console.log(isEven(4)); // true
console.log(isEven(7)); // false



// Oppgave 5

const findMax = (a, b) => {
    if (a === b) return "Tallene er like";
    return a > b ? a : b;
};

console.log(findMax(10, 20)); // 20
console.log(findMax(15, 15)); // "Tallene er like"



// Oppgave 6

const calculateTax = (income) => {
    if (income < 50000) return income * 0.1;
    if (income <= 100000) return income * 0.2;
    return income * 0.3;
};

console.log(calculateTax(40000)); // 4000
console.log(calculateTax(75000)); // 15000
console.log(calculateTax(120000)); // 36000


// Oppgave 7

const isValidEmail = (email) => email.includes("@") && email.includes(".");

console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("testexample.com"));  // false



// Oppgave 8

const findLongestString = (str1, str2) => {
    if (str1.length === str2.length) return "Strengene er like lange";
    return str1.length > str2.length ? str1 : str2;
};

console.log(findLongestString("hei", "hallo")); // "hallo"
console.log(findLongestString("abc", "xyz"));   // "Strengene er like lange"



// Oppgave 9

const calculateDiscount = (price, discount) => price - (price * discount / 100);

console.log(calculateDiscount(100, 10)); // 90
console.log(calculateDiscount(200, 25)); // 150



// Oppgave 10

const isStrongPassword = (password) => {
    return password.length >= 8 && /\d/.test(password);
};

console.log(isStrongPassword("abc123"));     // false
console.log(isStrongPassword("password1")); // true