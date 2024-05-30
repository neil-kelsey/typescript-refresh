
// We don't need to add the : number at the end here - we could use TS inference
// But we always want to define / use TS annotate that this function will return a type number
const add = (a: number, b: number): number => {
    return a + b
};

// And here is why we want to annotate the returned type
// I've made the mistake of not adding a 'return'
// And the TS inference thinks this function returns a type of void which is wrong
// That's why we want to use annotation in this instance
const subtract = (a: number, b: number) => {
    a - b
}

// Slightly different syntax but same idea
function devide(a: number, b: number): number {
    return a / b;
}

// And another different syntax
const multiply = function(a: number, b: number): number {
    return a * b;
}

// Here we just want to return a console log so the function doesn't actually have a return
// As it doesn't have a return we can give the function a type void
const logger = (message: string): void => {
    console.log(message);
    // You could also have the following in a type void function
    // return null;
    // return undefined
}

// We will never get to the end of this function
// as somepoint we will exit and throw an error
// in this instance we use type never
// this is rare
// A better way would be to say have
// if there's no message throw error
// else return the message
const throwError = (message: string): never => {
    throw new Error(message);
}