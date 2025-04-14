
/* intro()-modelis, spalva
drive()-is atstumo paskaiciuoja sanaudas, jei nepakanka degalu, tai ribiniu atveju tiesiog sustoja ir masina issijungia
engineOn()-ijungti varikli, jei yra kuro ir jei jis isjungtas
engineOff()-isjungti varikli, jei jis pries tai buvo isjungtas
refill()- pripilti kuro, bet ne daugiau nei telpa ir jei variklis isjungtas
*/


// Eksportuojame Car klasę, kad būtų galima naudoti kituose failuose
export class Car {
    // Konstruktorius - iškviečiamas sukuriant naują Car objektą
    constructor(model, color, tankMax) {
        // Nustatomas automobilio modelis (pvz., "volva")
        this.model = model;

        // Nustatoma automobilio spalva (pvz., "red")
        this.color = color;

        // Nustatoma kuro bako maksimali talpa litrais (pvz., 50)
        this.tankMax = tankMax;

        // Pradinis kuro kiekis bake – 0 litrų
        this.tank = 0;

        // Variklio būsena – išjungtas (false)
        this.engineIsOn = false;
    }

    // Metodas, kuris grąžina trumpą aprašymą apie automobilį
    intro() {
        return `This is ${this.color} ${this.model}.`;
        // Pvz.: "This is red Toyota."
    }

    // Metodas pildyti baką nurodytu kuro kiekiu
    refill(volume) {
        // Tikrina, ar variklis įjungtas – jeigu taip, neleis pildyti kuro
        if (this.engineIsOn) {
            return 'Error: to refill a tank, you must turn off engine first.';
        }

        // Tikrina, ar įvesta reikšmė yra skaičius ir ar tai baigtinis skaičius
        if (typeof volume !== 'number' || !isFinite(volume)) {
            return 'Error: Only real numbers allowed.';
        }

        // Neleidžiama pildyti neigiamu skysčio kiekiu
        if (volume < 0) {
            return `Refill with ${volume} litres is not allowed.`;
        }

        // Jei į baką dar telpa nurodytas kiekis – tiesiog pridedame
        if (this.tankMax - this.tank >= volume) {
            this.tank += volume;
        } else {
            // Jei ne – pripilame iki maks. talpos
            this.tank = this.tankMax;
        }
    }
}