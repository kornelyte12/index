import {Gyvunai}from "./Gyvunai2.js";

export class Flamingo extends Gyvunai{

    constructor(name, age)
    {
        super(name, age)
        this.legCount = 2;
        this.wingCount = 2;
        this.isHungry = false;
        this.species = "flamingas";
        this.wantedFood = "shrimp";
        this.voice = "🦩🦩🦩";
    }

}