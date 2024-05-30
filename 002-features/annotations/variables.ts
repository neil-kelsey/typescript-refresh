
// const apples will always be a number, if we were to try and assign apples = true it would throw an error
let apples:number = 5;

// This works
apples = 10;

// This wont
// apples = "test"

let speed:string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// build in objects
let now: Date = new Date();

// An array of strings
let colours: string[] = ['red', 'green', 'blue'];

// An array of number
let myNumbers: number[] = [1,2,3];

// An array of booleans
let truths: boolean[] = [true, true, false];

// Classes
class Car {

}

// let car use the type Car which is a class - it then creates a new instance of that which is the new Car() part of the syntax
let car: Car = new Car();

// Object literal
let point: { x:number; y:number } = {
    x: 10,
    // This would error as we haven't defined an a variable
    // a: "string",
    y: 20
};

// Function
// In normal React we would have an arrow function like follows
// const logNumber: = (i) => {
//     console.log(i);
// }
// And this is the Typescript version
// We define what arguments the function will get      (i: number)
// Then we define what values we think it will have     => void 
// And the rest is the standard arrow function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}



// When to use annotations

// 1 When a function returns the 'any' type
// When we're parsing JSON this could return anything, parse out a boolean, string, object etc
// So it's too complicated for Typescript to inference so Typescript will give coordinates the type any which isn't great
// So we can add some annotation as follows
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};

// 2 When we declare a variable on one line
// and initalizate it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
// A better approach would be
// let foundWord = false
// So without the Typescript annotation
// But this is just an example

for (let i = 0; i < words.length; i++) {
    if(words[i] === 'green') {
        foundWord = true;
    }
}

// 3 Whenever the inference cannot be easily defined
// Again a bit of bad code example, but shows the idea
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i]
    }
}