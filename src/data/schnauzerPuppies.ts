export interface Puppy {
    id: string;
    name: string;
    gender: "male" | "female";
    color: string;
    age: string;
    price: string;
    image: string;
}

export const availablePuppies: Puppy[] = [
    {
        id: "schnauzer-1",
        name: "Max",
        gender: "male",
        color: "black",
        age: "8",
        price: "1500€",
        image: "/src/assets/schnauzer/puppies/max.jpg",
    },
    {
        id: "schnauzer-2",
        name: "Luna",
        gender: "female",
        color: "salt",
        age: "10",
        price: "1500€",
        image: "/src/assets/schnauzer/puppies/luna.jpg",
    },
    // Add more Schnauzer puppies as needed
];
