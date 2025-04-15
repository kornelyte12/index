

export class Automobiliai{
    constructor(spalva,kuras){
        this.spalva=spalva;
        this.kuras=kuras;
        this.gamykla=gamykla;
    }
}
import { Wolkswagen } from "./js/Wolkswagen.js";
import { Renault } from "./js/Renault.js";
import { Audi } from "./js/Audi.js";

const wolkswagen = new Wolkswagen('Vokietija', 'balta','Vokietija');
const renault= new Renault ('Prancuzija','raudona',"Prancuzija");
const audi= new Audi ('Vokietija','juoda','Vokietija');

console.log(Wolkswagen);
console.log(Renault);
console.log(Audi);