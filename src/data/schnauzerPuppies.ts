import leglo from "../assets/dostupnoleglosnaucer.jpg";

export interface Puppy {
    id: string;
    name: string;
    gender: "male" | "female";
    color: "salt" | "black" | "black-silver" | "red";
    age: string;
    price: string;
    image: string;
    isPlaceholder?: boolean;
}

export interface Litter {
    id: string;
    puppyCount: number;
    dateOfBirth: string;
    gender: "male" | "female" | "both";
    colors: Array<"salt" | "black" | "black-silver" | "red">;
    price: string;
    image?: string;
}

// Puppies for schnauzer
export const availablePuppies: Puppy[] = [];

// Litter for schnauzer
export const availableLitters: Litter[] = [
    {
        id: "schnauzer-litter-march-2023",
        puppyCount: 5,
        dateOfBirth: "15.03.2023",
        gender: "both",
        colors: ["salt"],
        price: "Contact for price",
        image: leglo,
    },
];
