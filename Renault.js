import {automobiliai} from "./automobiliai.js";

export class Renault extends automobiliai{
    constructor(spalva,kuras){
        super(spalva,kuras);
        this.spalva='Raudona';
        this.kuras=kuras;
        this.gamykla='Prancūzija';
    }
}
