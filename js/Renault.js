import {Automobiliai} from "./Automobiliai.js";

export class Renault extends Automobiliai{
    constructor(spalva,kuras){
        super(spalva,kuras);
        this.spalva='Raudona';
        this.kuras=kuras;
        this.gamykla='Prancūzija';
    }
}
