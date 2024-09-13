class Flower {
    constructor(name, color, bloomSeason, isFragrant) {
        this.name = name;
        this.color = color;
        this.bloomSeason = bloomSeason;
        this.isFragrant = isFragrant;
    }


    bloom() {
        return `The ${this.name} blooms in ${this.bloomSeason}.`;
    }

   
    fragrance() {
        return this.isFragrant
            ? `The ${this.name} is fragrant.`
            : `The ${this.name} is not fragrant.`;
    }

   
    colorDisplay() {
        return `The ${this.name} has a beautiful ${this.color} color.`;
    }
}


const rose = new Flower("Rose", "red", "Spring", true);


const outputDiv = document.getElementById("output");

const output = `
    <p>${rose.bloom()}</p>
    <p>${rose.fragrance()}</p>
    <p>${rose.colorDisplay()}</p>
`;


outputDiv.innerHTML = output;


console.log(rose.bloom());
console.log(rose.fragrance());
console.log(rose.colorDisplay());
