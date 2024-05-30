// With inference if we start an array with values we don't need to annotate it
// If it were an empty empty array and we were planning on defineing the values later then we would
// const carMakers: string[] = [];

const carMakers = ['Tesla', 'Ford', 'Toyota'];

const dates = [new Date(), new Date()];

// 2 dimential array
// Again if we were defining these later it would be
// const carsByMake: string[][] = [[]];
const carsByMake = [
    ['Model Y', 'CyberTruck'],
    ['F150'],
    ['corola']
];

// Help with inference when extracting values
// TS inference automatically knows what these types are going to be
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100)

// Help with 'map' and 'reduce' etc
// receive car as a string and return a string as well
carMakers.map((car: string): string => {
    return car;
})

// Flexible types
const importantDates: (Date | string)[] = [new Date()]
importantDates.push('2030-10-10');
importantDates.push(new Date());
// Not a string or date so errors
importantDates.push(100);