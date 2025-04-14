import {Car}from './js/Car.js';

const volvo=new Car('Volvo S40', 'red',55);
const zapas=new Car('Zapas',"white",35);
console.log(volvo.intro());
console.log(volvo.color());
console.log(zapas.intro());
console.log(zapas.color());
console.log(zapas.tankMax());
console.log(volvo.tankMax());
console.log(zapas.refill(-5));
console.log(zapas.refill(4.2));
console.log(zapas.refill(null));
console.log(zapas.refill('pazadais uzpilti'));
console.log(zapas.refill(NaN));
console.log(zapas.refill(Infinity));
console.log(zapas);