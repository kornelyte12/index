export class Gyvunai{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
        this.energy=40;
        this.legCount = 0;
        this.isHungry = true;
        this.species = "unknown";
    }
    feed(wantedFood) //liutas nori mesos, pingvinas nori zuvies, flamingas nori krevečiu
    {
        if(this.isHungry===true && this.wantedFood === food)
        {
            this.isHungry=false;
            return "Ačiū už pietus"
        }
        else if(this.isHungry === true)
        {
            return "Duok tinkamą maistą!!"
        }
        else
        {
            return "Nenoriu valgyti."
        }
            
    }
             hi(){
        return `Hi, my name is ${this.name}.`;
    }
            HappyBirthday(){
        this.age++;
        return `Happy birthday ${this.name}, you are now ${this.age} years old!, Eating cake from ${this.wantedFood}`;
    }
            hiRest(){
        if(this.energy<5){
            return(`${this.name} is tired and needs to rest`);
            
        }
     this.energy-=5;
    return(`${this.name} is happy and has ${this.energy} energy left`);
    }

        sleep(){
    this.energy=Math.min(this.energy+20,40);
    return(`${this.name} is sleeping and has ${this.energy} energy now`);
}
        feed(){
    this.energy=Math.min(this.energy+10,40);
    return(`${this.name} is eating and has ${this.energy} energy now`);
}}