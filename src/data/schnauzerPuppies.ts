import leglo from "../assets/dostupnoleglosnaucer.jpg";

export interface Puppy {
    id: string;
    name: string;
    gender: "male" | "female" | "both";
    color: "salt" | "black" | "black-silver" | "red";
    age: string;
    price: string;
    image: string;
}

export const availablePuppies: Puppy[] = [
    {
        id: "schnauzer-1",
        name: "Dostupno leglo",
        gender: "both",
        color: "salt",
        age: "0",
        price: "1000€",
        image: leglo,
    },
];
