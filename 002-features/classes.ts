// Parent / super class
class Vehicle {
    // The constructor means that when we run the following
    // const vehicleTwo = new Vehicle('blue')
    // the blue agrument
    // we build a contructor that is going to tell our class and code
    // where to assign these arguments
    // we take the argument colour and assign it to our variable colour
    // Here is one way to write the constructor
    // constructor(colour: string) {
    //     this.colour = colour
    // }
    // colour: string;

    // shorthand
    constructor(public colour: string) {}

    // be default methods are set to public, but here's the syntax
    public drive(): void {
        console.log('Chugga chugga');
    }
    public honk(): void {
        console.log('Beep beep!')
    }

}

const vehicleTwo = new Vehicle('blue')
{
    console.log(vehicleTwo.colour)
}

// Child class
// A car is a type of vehicle so we want it to have all the same properties as a vehicle
// You just extend that class
class Car extends Vehicle {
    // We can also redefine methods if we choose
    // changing the scope to private means we cannot call this
    // method from outside of this class
    // But you could have a new function that calls this function - that's fine
    public drive() {
        console.log('Vroom')
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

// very C# style
// const vehicle = new Vehicle();
// // Can't use car variable as that's used in one of the other files
// const cartest = new Car();
// cartest.startDrivingProcess();
// cartest.honk();