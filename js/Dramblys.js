import {Gyvunai}from "./Gyvunai2.js";

export class Elephant extends Gyvunai{

    constructor(name, age)
    {
        super(name, age)
        this.legCount = 4;
        this.isHungry = false;
        this.species = "dramblys";
        this.wantedFood = "grass";
        this.voice = "🐘🐘🐘";
    }
    


 purskimas(klimatas){
    if(klimatas==="sauleta"){
        return "dramblys purskia ir parodys vaivorykste";
    } else if (klimatas==="debesuota"){
        return "dramblys purskia";
    } else  if (klimatas==="salta"){
        return "dramblys apipurks ir bus salta";
    } else {
        return "dramblys nieko nedaro";
    }
}
}