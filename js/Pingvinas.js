import {Gyvunai}from "./Gyvunai2.js";

export class Penguin extends Gyvunai{

    constructor(name, age)
    {
        super(name, age)
        this.legCount = 2;
        this.wingCount = 2;
        this.isHungry = false;
        this.species = "pingvinas";
        this.wantedFood = "fish";
        this.voice = "🐧🐧🐧";
    }


triukas(tekstas){
    if(tekstas==='hi'||tekstas==='hello'||tekstas==='labas'){
        return("Pingvinas paplojo,pamojavo ir pasisveikino");
    } else{
        return("Pingvinas paplojo ir pamojavo");
    }
}}
