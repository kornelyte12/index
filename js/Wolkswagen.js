import {automobiliai} from "./automobiliai.js";

export class Wolkswagen extends automobiliai{
    constructor(spalva,kuras){
        super(spalva,kuras);
        this.spalva="balta";
        this.gamykla='Vokietija';
        this.kuras=kuras;
    }
}
