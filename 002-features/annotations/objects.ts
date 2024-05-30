const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
};

// We could do something like this to get the age
// but lets do destructuring
// const age = profile.age

const { age, name }: { age: number; name: string } = profile

// Lets try and get the coords
// Plane destructuring would look like the following
// const {coords: { lat, lng } } = profile

const {coords: { lat, lng } }: { coords: { lat: number, lng: number } } = profile