/* 
automobilis:
    -audi
    -wolkswagen
    -renault
motociklai:
    -suzuki
    -kawasaki
    -jawa
    -vespa
sunkvezimiai:
    -volvo
    -Man
    -scania
*/
/*
Elektronika:
smart phone:
    -samsung smart phone
    -apple smart phone
    -nokia smart phone
Tablete:
    -samsung tablete
    -xiomi tablete
    Laptop:
        -asus
        -lenovo
        -IBM
        -

*/
/*
ANIMALS:
pet:(4 kojos, 2 akys)
    -dog 
    -cat
    -hamstes

bird:(2 sparnai, 2 akys)
    -Parrot
    -hummingbird
    -eagle

fish:(2 akys, 1 uodega)
    -shark
    -dophin
    -tuna
*/
import { Dog } from "./js/Dog.js";
import { Cat } from "./js/Cat.js";
import { Hamster } from "./js/Hamster.js";

import { Dolphin } from "./js/Dolphin.js";
import { Tuna } from "./js/Tuna.js";
import { Shark } from "./js/Shark.js";


const rex = new Dog('Rex', 'black');
const rainis= new Cat ('Rainis','mixed');
const keksas= new Hamster ('Keksas','brown');

const lydeka = new Dolphin('Rex', 'black');
const antanas= new Shark ('Rainis','mixed');
const tuna= new Tuna ('Keksas','brown');


console.log(rex);
console.log(rainis);
console.log(keksas);

console.log(lydeka);
console.log(antanas);
console.log(tuna);