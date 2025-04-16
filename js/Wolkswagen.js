import {Automobiliai} from "./Automobiliai.js";

export class Wolkswagen extends Automobiliai{
    constructor(spalva,kuras){
        super(spalva,kuras);
        this.spalva="balta";
        this.gamykla='Vokietija';
        this.kuras=kuras;
    }
}
