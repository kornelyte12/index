import {automobiliai} from "./automobiliai.js";

export class Audi extends automobiliai{
    constructor(spalva,kuras){
        super(spalva,kuras);
        this.spalva='juoda';
        this.kuras=kuras;
        this.gamykla='Vokietija';
    }
}
