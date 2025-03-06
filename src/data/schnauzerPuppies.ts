export interface Puppy {
    id: string;
    name: string;
    gender: "male" | "female";
    color: "salt" | "black" | "black-silver" | "red";
    age: string;
    price: string;
    image: string;
}

export const availablePuppies: Puppy[] = [];
