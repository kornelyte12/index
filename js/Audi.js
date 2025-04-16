import {Automobiliai} from "./Automobiliai.js";

export class Audi extends Automobiliai{
    constructor(spalva,kuras){
        super(spalva,kuras);
        this.spalva='juoda';
        this.kuras=kuras;
        this.gamykla='Vokietija';
    }
}
