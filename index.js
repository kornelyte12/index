// class (klasė)- objektas
//blyno receptas-blynas
//namo brezinys-namas

class Dog {
constructor(vardas,kailioSpalva){
   this.name=vardas;
   this.furColor=kailioSpalva;
   this.age=0;
   this.legsCount=4;
   this.hasTail=true;
   this.isStanding=true;
}
hi(){
return`hi,my name is ${this.name}!`;
}
bbbb(){

}
intro(){
    return `hi, my name is ${this.name},my fur is ${this.furColor} and i am ${this.age} years old`;
}
birthday(){
    this.age*=2
    this.age++
    return `happy birthday ${this.name}! now you arev ${++this.age} years old`;
}
lostTail(){
    this.hasTail=false;
}
lostLeg(){
    if(this.legsCount>0){
    this.legsCount--;
}
}
changePose(){
    this.isStanding=!this.isStanding?  // ! ivertina reiksme true arba false
}
changeFurColor(newColor){
this.furColor=newColor;
return `${this.name} has${this.furColor} fur.`
}
}
const rex =new Dog("rex",'black');
const brisius=new Dog('Brisius','white')
brisius.lostTail()
console.log(rex);
console.log(brisius);
console.log(rex.name);
console.log(rex.age);
console.log(brisius.furColor),
console.log(brisius.legsCount);
console.log(brisius.hi());
console.log(rex.hi());
console.log(brisius.intro());
console.log(rex.intro());
console.log(brisius.birthday());
console.log(rex.birthday());
console.log(brisius.changePose());
console.log(rex.changeFurColor('red'));
