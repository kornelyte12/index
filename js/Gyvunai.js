//zoo soda su liutais, pingvinais ir flamingais
//vardas, amzius, alki, rusis, koju kieki

import {Lion}from "./Liutas.js";
import {Penguin}from "./Pingvinas.js";
import {Flamingo}from "./Flamingas.js";
import {Elephant}from "./Dramblys.js";
import {Monkey}from "./Bezdzione.js";



const zoo = [new Penguin("kowalski",10), new Lion("simba",4), new Lion("Puma", 8), new Penguin("Rico", 3), new Flamingo("Richard", 6), new Elephant("Dumbo", 12), new Monkey("George", 5)];


function oldestAnimal(animals)
{
    let animal
    let maxAmzius = 0;

    for(let i in animals)
    {
        if(animals[i].age>maxAmzius)
        {
            animal = animals[i].name;
            maxAmzius = animals[i].age;
        }
    }
    return animal;
}

console.log(oldestAnimal(zoo))

function collectBirds(animals)
{
    const birds = [];

    for(let i in animals)
    {
        if(animals[i].wingCount!=undefined)
        {
            birds.push(animals[i]);
        }
    }
    return birds
}

console.log(collectBirds(zoo))

const simba = new Lion("Simba", 4);
const kowalski = new Penguin("Kowalski", 10);
const Puma = new Lion("Puma", 8);
const Riko = new Penguin("Riko", 3);
const Dumbo = new Elephant("Dumbo", 12);
const George = new Monkey("George", 5);
const Richard = new Flamingo("Richard", 6);

console.log(simba.name);
console.log(simba.isHungry);
console.log(simba.hi());
console.log(simba.hiRest());
console.log(simba.feed());
console.log(simba.HappyBirthday());
console.log(simba.sleep());


console.log(kowalski.name);
console.log(kowalski.isHungry);
console.log(kowalski.hi());
console.log(kowalski.hiRest());
console.log(kowalski.feed());
console.log(kowalski.HappyBirthday());
console.log(kowalski.sleep());


console.log(Puma.name);
console.log(Puma.isHungry);
console.log(Puma.hi());
console.log(Puma.hiRest());
console.log(Puma.feed());
console.log(Puma.HappyBirthday());
console.log(Puma.sleep());

console.log(Riko.name);
console.log(Riko.isHungry);
console.log(Riko.hi());
console.log(Riko.hiRest());
console.log(Riko.feed());
console.log(Riko.HappyBirthday());
console.log(Riko.sleep());

console.log(Richard.name);
console.log(Richard.isHungry);
console.log(Richard.hi());
console.log(Richard.hiRest());
console.log(Richard.feed());
console.log(Richard.HappyBirthday());
console.log(Richard.sleep());

console.log(Dumbo.name);
console.log(Dumbo.isHungry);
console.log(Dumbo.hi());
console.log(Dumbo.hiRest());
console.log(Dumbo.feed());
console.log(Dumbo.HappyBirthday());
console.log(Dumbo.sleep());

console.log(George.name);
console.log(George.isHungry);
console.log(George.hi());
console.log(George.hiRest());
console.log(George.feed());
console.log(George.HappyBirthday());
console.log(George.sleep());


console.log(Dumbo.purskimas("sauleta"));
console.log(George.triukas(2,3));

console.log(Riko.triukas("labas"));
console.log(Riko.triukas("hi"));
console.log(Riko.triukas("hello"));