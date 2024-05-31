const oldCivic = {
    name: 'Civic',
    year: 2000,
    broken: true
}

// This is a long type annotation
// This function is used to print out the above const
// We expect an argument of vehicle
// This argument has the types name, year and broken - we define their types
// Then the output of the function is void as we're only going to log the output
const printVehicle = (vehicle: {name: string, year: number, broken: boolean}): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);