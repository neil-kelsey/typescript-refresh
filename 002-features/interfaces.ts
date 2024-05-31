// Not limited to primitive types, we can you any type we want
// Here's an example using more complex types - a date and a function
interface Vehicle {
    name: string;
    year: Date;
    broken: boolean;
    summary(): string;
}

const oldCivic = {
    name: 'Civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
}

// This function is used to print out the above const
// We expect an argument of vehicle
// This argument has the types name, year and broken - we define their types
// Then the output of the function is void as we're only going to log the output

// This is a long type annotation version 
// const printVehicle = (vehicle: {name: string, year: number, broken: boolean}): void => {

// This is the interface version
const printVehicle = (vehicle: Vehicle): void => {
    // console.log(`Name: ${vehicle.name}`);
    // console.log(`Year: ${vehicle.year}`);
    // console.log(`Broken: ${vehicle.broken}`);
    console.log(vehicle.summary)
};

printVehicle(oldCivic);