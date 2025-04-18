import {Gyvunai}from "./Gyvunai2.js";


export class Lion extends Gyvunai{
    constructor(name, age)
    {
        super(name, age)
        this.legCount = 4;
        this.species = "liutas";
        this.wantedFood = "meat";
        this.voice = "🦁🦁🦁";
    }
}


