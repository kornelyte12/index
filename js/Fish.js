import {Fish}from "./Fish.js"

export class Fish {
    constructor(name){
        this.name=name;
        this.eyes=2;
        this.tail=1;
        this.emoji='🐟🐟';}
    
    hi(){
        return `Hi, my name is ${this.name}${this.emoji}.`;
    }}