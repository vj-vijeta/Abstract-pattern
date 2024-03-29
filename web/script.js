class Compound {
    constructor() {
        this.boilingPoint = 0;
        this.meltingPoint = 0;
        this.molecularWeight = 0;
        this.molecularFormula = "";
    }

    display() {
        const outputDiv = document.getElementById('output');
        if (outputDiv) {
            outputDiv.innerHTML = `<h2>Compound: Unknown ------ </h2>`;
        }

        // Log details to console for unknown compound
        console.log("Unknown Compound Details:");
        if (this.molecularFormula) {
            console.log("Formula:", this.molecularFormula);
        }
        if (this.molecularWeight) {
            console.log("Weight:", this.molecularWeight);
        }
        if (this.meltingPoint) {
            console.log("Melting Pt:", this.meltingPoint);
        }
        if (this.boilingPoint) {
            console.log("Boiling Pt:", this.boilingPoint);
        }

        // Change background color dynamically
        document.body.style.backgroundColor = getRandomColor();
    }
}

class RichCompound extends Compound {
    constructor(chemical) {
        super();
        this.chemical = chemical;
        this.bank = new ChemicalDatabank();
    }
    
    display() {
        this.boilingPoint = this.bank.getCriticalPoint(this.chemical, "B");
        this.meltingPoint = this.bank.getCriticalPoint(this.chemical, "M");
        this.molecularWeight = this.bank.getMolecularWeight(this.chemical);
        this.molecularFormula = this.bank.getMolecularStructure(this.chemical);

        const outputDiv = document.getElementById('output');
        if (outputDiv) {
            outputDiv.innerHTML = `
                <h2>Compound: ${this.chemical} ------ </h2>
                ${this.molecularFormula ? `<p>Formula: ${this.molecularFormula}</p>` : ''}
                ${this.molecularWeight ? `<p>Weight: ${this.molecularWeight}</p>` : ''}
                ${this.meltingPoint ? `<p>Melting Pt: ${this.meltingPoint}</p>` : ''}
                ${this.boilingPoint ? `<p>Boiling Pt: ${this.boilingPoint}</p>` : ''}
            `;
        }

        // Log details to console for known compound
        console.log(`${this.chemical} Compound Details:`);
        if (this.molecularFormula) {
            console.log("Formula:", this.molecularFormula);
        }
        if (this.molecularWeight) {
            console.log("Weight:", this.molecularWeight);
        }
        if (this.meltingPoint) {
            console.log("Melting Pt:", this.meltingPoint);
        }
        if (this.boilingPoint) {
            console.log("Boiling Pt:", this.boilingPoint);
        }

        // Change background color dynamically
        document.body.style.backgroundColor = getRandomColor();
    }
}

class ChemicalDatabank {
    getCriticalPoint(compound, point) {
        if (point === "M") {
            switch (compound.toLowerCase()) {
                case "water": return 0.0;
                case "benzene": return 5.5;
                case "ethanol": return -114.1;
                case "mercury": return -38.83;
                case "oxygen": return -218.8;
                case "gold": return 1064;
                case "sulfur": return 115.21;
            }
        } else {
            switch (compound.toLowerCase()) {
                case "water": return 100.0;
                case "benzene": return 80.1;
                case "ethanol": return 78.3;
                case "mercury": return 356.73;
                case "oxygen": return -182.9;
                case "gold": return 2856;
                case "sulfur": return 444.6;
                
            }
        }
    }

    getMolecularStructure(compound) {
        switch (compound.toLowerCase()) {
            case "water": return "H2O";
            case "benzene": return "C6H6";
            case "ethanol": return "C2H5OH";
            case "mercury": return "Hg";
            case "oxygen": return "O2";
            case "gold": return "Au";
            case "sulfur": return "S8";
            
        }
    }

    getMolecularWeight(compound) {
        switch (compound.toLowerCase()) {
            case "water": return 18.015;
            case "benzene": return 78.1134;
            case "ethanol": return 46.0688;
            case "mercury": return 200.592;
            case "oxygen": return 32.0;
            case "gold": return 196.97;
            //for verifing the pattern remove or add more values
            
        }
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.addEventListener('DOMContentLoaded', () => {
    const outputDiv = document.getElementById('output');
    if (outputDiv) {
        const water = new RichCompound("Water");
        water.display();
    }

    document.getElementById('toggleButton')?.addEventListener('click', toggleRendering);
});

const toggleRendering = () => {
    const compounds = ["Water", "Benzene", "Ethanol", "Mercury", "Oxygen", "Gold", "Sulfur", "Uranium", "Silver", "Unknown"];
    // adding more elements or componnet to the list to show the adaptor pattern 
    const currentCompound = compounds[Math.floor(Math.random() * compounds.length)];
    const compound = currentCompound === "Unknown" ? new Compound() : new RichCompound(currentCompound);
    compound.display();
};