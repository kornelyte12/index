
/* intro()-modelis, spalva
drive()-is atstumo paskaiciuoja sanaudas, jei nepakanka degalu, tai ribiniu atveju tiesiog sustoja ir masina issijungia
engineOn()-ijungti varikli, jei yra kuro ir jei jis isjungtas
engineOff()-isjungti varikli, jei jis pries tai buvo isjungtas
refill()- pripilti kuro, bet ne daugiau nei telpa ir jei variklis isjungtas
*/


export class Car {
    // Konstruktorius - nustato pradines reikšmes automobilio objekto savybėms
    constructor(model, color, tankMax) {
        // Automobilio modelis (pvz., "Toyota")
        this.model = model;

        // Automobilio spalva (pvz., "red")
        this.color = color;

        // Maksimalus bako talpos dydis (litrais)
        this.tankMax = tankMax;

        // Kuro kiekis bake (pradžioje 0 litrai)
        this.tank = 0;

        // Variklio būsena: išjungtas (false)
        this.engineIsOn = false;

        // Kuro sąnaudos: 6 litrai / 100 km
        this.fuelUsage = 6; // l/100km
    }

    // Metodas, kuris grąžina trumpą aprašymą apie automobilį
    intro() {
        return `This is ${this.color} ${this.model}.`;
    }

    // Metodas pildyti baką nurodytu kiekio kuro
    refill(volume) {
        // Tikrinama, ar variklis yra įjungtas, nes pildyti baką galima tik su išjungtu varikliu
        if (this.engineIsOn) {
            return 'Error: to refill a tank, you must turn off engine first.';
        }

        // Tikrinama, ar įvesta reikšmė yra skaičius ir ar tai baigtinis skaičius
        if (typeof volume !== 'number' || !isFinite(volume)) {
            return 'Error: Only real numbers allowed.';
        }

        // Neleidžiama pildyti neigiamu skysčio kiekiu
        if (volume < 0) {
            return `Refill with ${volume} litres is not allowed.`;
        }

        // Jei į baką telpa tiek, kiek nurodyta, pripildome tiek
        if (this.tankMax - this.tank >= volume) {
            this.tank += volume;
        } else {
            // Jei į baką telpa mažiau, pripildome iki maksimalaus bako dydžio
            this.tank = this.tankMax;
        }
    }

    // Metodas įjungti variklį, jei jis išjungtas ir bakas turi kuro
    engineOn() {
        // Jei variklis jau įjungtas, grąžinamas pranešimas
        if (this.engineIsOn) {
            return 'Engine is already running.';
        }

        // Jei bako kiekis mažesnis arba lygus 0, variklio negalima įjungti
        if (this.tank <= 0) {
            return 'Cannot start engine. Tank is empty.';
        }

        // Įjungiame variklį, jei bakas turi kuro
        this.engineIsOn = true;
        return 'Engine started.';
    }

    // Metodas išjungti variklį, jei jis buvo įjungtas
    engineOff() {
        // Jei variklis jau išjungtas, grąžinamas pranešimas
        if (!this.engineIsOn) {
            return 'Engine is already off.';
        }

        // Išjungiame variklį
        this.engineIsOn = false;
        return 'Engine turned off.';
    }

    // Metodas važiuoti nurodytu atstumu, jei variklis įjungtas ir yra pakankamai kuro
    drive(distance) {
        // Jei variklis išjungtas, negalima pradėti kelionės
        if (!this.engineIsOn) {
            return 'Cannot drive. Engine is off.';
        }

        // Tikrinama, ar įvesta teisinga reikšmė (teigiamas skaičius)
        if (typeof distance !== 'number' || distance <= 0) {
            return 'Distance must be a positive number.';
        }

        // Apskaičiuojame, kiek kuro reikės įveikti nurodytą atstumą
        const neededFuel = (distance / 100) * this.fuelUsage;

        // Jei bako kiekis pakankamas, sumažiname kuro kiekį ir tęsiame kelionę
        if (this.tank >= neededFuel) {
            this.tank -= neededFuel;
            return `Successfully drove ${distance} km.`;
        } else {
            // Jei bako neužtenka, apskaičiuojame maksimalią atstumą, kurį galima nuvažiuoti
            const maxDistance = (this.tank / this.fuelUsage) * 100;

            // Baigiame kelionę, kai baigiasi kuras, ir išjungiame variklį
            this.tank = 0;
            this.engineIsOn = false;
            return `Not enough fuel. Car stopped after ${maxDistance.toFixed(1)} km and engine turned off.`;
        }}}