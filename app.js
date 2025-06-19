// JavaScript Functions Practice, Loop Practice  & Array Practice

// Number is Prime or NOT
function isPrime(num) {
    for (let i = 0; i < Math.sqrt(num); i += 1) {
        if (num % i == 2) {
            return false;
        }
    }
    return true;
}

let checkPrime = isPrime(5); // Output - True
console.log(checkPrime)

// Find Second Max Number in Array 
function secondMax(arr) {
    let max = arr[0];
    let secondMaxNumber = arr[0];

    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] > max) {
            secondMaxNumber = max;
            max = arr[i];
        }
        else if (arr[i] > secondMaxNumber && arr[i] < max) {
            secondMaxNumber = arr[i];
        }

    }

    if (max == secondMaxNumber) {
        return -1; // All numbers in array are equal
    }
    return secondMaxNumber;
}


let secondMaxNumber = secondMax([8, 6, 2, 3, 1, 4, 7, 8, 9, 6, 3, 2, 10, 9]);
console.log(secondMaxNumber); // Output - 9


// JavaScript Arrays and its Methods

let arr = [1, 2, 3, 4, 4, 3, 2, 1];

let size = arr.length;
console.log(size); // Size of Array

// arr.push(5);
// arr.pop();
// arr.unshift(7);
// arr.shift

// delete arr[2];

// arrr.sort(function(a,b) {return a - b}) Sort the array by numbers

// Array indexOf()	Returns the first position of an element value
// Array lastIndexOf()	Returns the last position of an element value
// Array includes()	Returns true if an element value is present in an array



// JavaScript Closure
function outerFunction(num) {
    let outerVariable = num;
    return function innerFunction() {
        let innerVariable = outerVariable + 10;
        console.log(`This is the Outervariable ${outerVariable} and Innervariable is ${innerVariable}.`);
    }
}

let examp1 = outerFunction(10);
let examp2 = outerFunction(20);

examp1(); // Output - 10 and 20
examp2(); // Output - 10 and 30


// JavaScript Classes and Objects

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age(x) {
        return x - this.year;
    }
}

const date = new Date();
let year = date.getFullYear();

const myCar = new Car("Ford", 2014);
"My car is " + myCar.age(year) + " years old.";


// JavaScript Eventloop - Async nature of JS
function printNameAfterOneSec(name) {
    setTimeout(console.log(name), 1000);
}

// JavaScript Async / Await - Try / Catch

// try {
//     ...
//     ...
//     ...
// } catch (err) {

// }


// JavaScript High-Order Functions

// Example 1
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
arr2.map((num) => {
    arr[num] + 2;
})

// Example 2
function evenNumbers(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] % 2 == 0) return arr[i];
    }
}
arr2.filter(evenNumbers)


// JavaScript Hoisting

car = "Ford"
var car;
console.log(car) // Output - Ford

// Function Example

printName("Sir Fahad");
function printName(name) {
    console.log(`Name is ${name}`);
}

// Output - Sir Fahad


// JavaScript IIFEs (Invoked Function Expressions)
(function maleOrFemale(gender) {
    if (gender == "Male") {
        console.log("I am Male");
    } else if (gender == "Female") {
        console.log("I am Female");
    } else {
        console.log("No Gender Found");
    }
})("Male")


// JavaScript Currying
function brewCoffee(beans) {
    return function (water) {
        return beans * water;
    }
}
const coffeeMaker = brewCoffee(10);
// returns a function that multiplies its argument by 10 (the number of coffee beans)
console.log(coffeeMaker(8)); // prints 80 (the amount of water)
console.log(coffeeMaker(12)); // prints 120 (the amount of water)

// JavaScript Iterators

let x = ["Apple", "Mango", "Orange"]
let y = x[Symbol.iterator]()
console.log(y.next());



// JS Objects

const person = {
    firstName: "Muhammad Zeeshan",
    lastName: "Hassan",
    age: 23,
    eyeColor: "black",
    getFullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
};

// Performing CRUD on Objects
//Create and Read
person.nationality = "Pakistani"
console.log(person);
// Update
person.nationality = "USA"
console.log(person)
// Delete
delete person.nationality;
console.log(person)
person.getFullName();

// Displaying with loop
for (let x in person) {
    console.log(person[x]);
}

console.log(Object.values(person));
console.log(Object.entries(person));
console.log(JSON.stringify(person));

// Creating Object with Generic Function

function Bus(name, model) {
    this.name = name;
    this.model = model;
}

const bus = new Bus("Ford", 2025);
console.log(bus)
Bus.prototype.weight = 1000;

// String
// Methods
// +, toUpperCase, toLowerCase, padStart, padEnd
// concat, slice, substring, trim, trimStart, trimEnd
// repeat, replace, replaceAll, at, charAt, charCodeAt, indexOf, lastIndexOf
// Implementation on W3Schools


