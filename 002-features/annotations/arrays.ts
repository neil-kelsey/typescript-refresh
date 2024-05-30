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