const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// A tuple version of the above array
// const pepsi = ['brown', true, 40]

// One way would be to define the types as so
const pepsi: [string, boolean, number] = ['brown', true, 40]

// Will cause error
pepsi[0] = 40

// Or you can create a Drink type
type Drink = [string, boolean, number]

const newPepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 35];
const tea: Drink = ['brown', false, 5];

// I dont like Tuples - what do these numbers mean to me as an engineer?
// Not a lot
const carSpecs: [number, number] = [400, 3354];

// As an object is much more human readable
const carStats = {
    horsepower: 400,
    weight: 3354
}