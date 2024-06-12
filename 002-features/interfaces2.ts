// Not limited to primitive types, we can you any type we want
// Here's an example using more complex types - a date and a function
interface Reportable {
    summary(): string;
}

// Two very different objects but they can use the same report
const oldCivicTwo = {
    name: 'Civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
}

// Two very different objects but they can use the same report
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 400,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`
    }
}

// This function is used to print out the above const
// We expect an argument of Reportable
// This argument has the types name, year and broken - we define their types
// Then the output of the function is void as we're only going to log the output

// This is the interface version
const printSummary = (item: Reportable): void => {
    console.log(item.summary)
};

// The point here is to show different functions using the same type - repeatable code
printSummary(oldCivicTwo);
printSummary(drink);