class Human {
    constructor(abilityToSpeak, go, weight, skinColor, name, surname) {
        this.abilityToSpeak = abilityToSpeak;
        this.go = go;
        this.weight = weight + ' kg';
        this.skinColor = skinColor;
        this.name = name;
        this.surname = surname;
    }
    sayHello() {
        console.log(`Hello, I'm ${this.name} ${this.surname}`);
    }
    canGo = function () {
        console.log(' I can go');
    }
    haveWeight = function () {
        console.log(` Weight: ${this.weight}`);
    }

}
class Man extends Human {
    constructor(abilityToSpeak, go, weight, skinColor, name, surname) {
        super(abilityToSpeak, go, weight, skinColor, name, surname);
        console.log(`I'm a man`);
    }
};
class Woman extends Human {
    constructor(abilityToSpeak, go, weight, skinColor, name, surname) {
        super(abilityToSpeak, go, weight, skinColor, name, surname);
        console.log(`I'm a woman`);
    }
};

class Librarian extends Woman {
    constructor(abilityToSpeak, go, weight, skinColor, name, surname, communicationSkills, analyticalSkills, organizationalSkills) {
        super(abilityToSpeak, go, weight, skinColor, name, surname)
        this.communicationSkills = communicationSkills;
        this.analyticalSkills = analyticalSkills;
        this.organizationalSkills = organizationalSkills;
    }
    provideAccesToInformation() {
        console.log('Librarian helps people find information');
    }
}
class Nurse extends Woman {
    constructor(abilityToSpeak, go, weight, skinColor, name, surname, clinicalSkills, interpersonalSkills, attentionToDetail) {
        super(abilityToSpeak, go, weight, skinColor, name, surname)
        this.clinicalSkills = clinicalSkills;
        this.interpersonalSkills = interpersonalSkills;
        this.attentionToDetail = attentionToDetail;
    }
    documentingTreatments() {
        console.log(`Nurse documents the treatment and progress of her patients`);
    }

    identifyProblems() {
        console.log('Nurse must be able to quikly identify the best way to stabilize patients and minimize pain');
    }
}

class Worker extends Man {
    constructor(abilityToSpeak, go, weight, skinColor, name, surname, company, position) {
        super(abilityToSpeak, go, weight, skinColor, name, surname)
        this.company = company;
        this.position = position;
    }
    workInfo() {
        console.log(`company:${this.company}, position:${this.position}`);
    }
}
class Hunter extends Man {
    constructor(abilityToSpeak, go, weight, skinColor, name, surname, abilityToShoot) {
        super(abilityToSpeak, go, weight, skinColor, name, surname)
        this.abilityToShoot = abilityToShoot;
    }
    shoot() {
        console.log('Hunter can shoot an animal');
    }
}

let nurse = new Nurse(true, true, 40, 'white', 'Alina', 'Petrova', true, true, true)
console.log(nurse);
nurse.canGo()
nurse.haveWeight()
nurse.sayHello()
nurse.identifyProblems()

console.log('-------------------');
let librarian = new Librarian(true, true, 50, 'white', 'Ira', 'Ivanova', true, true, true)
console.log(librarian);
librarian.canGo()
librarian.haveWeight()
librarian.sayHello()
librarian.provideAccesToInformation()

console.log('-------------------');
let hunter = new Hunter(true, true, 90, 'white', 'Ivan', 'Ivanov', true);
console.log(hunter);
hunter.canGo()
hunter.haveWeight()
hunter.sayHello()
hunter.shoot();

console.log('-------------------');
let worker = new Worker(true, true, 60, 'white', 'Petro', 'Petriv', 'Google', 'Fronted developer')
console.log(worker);
worker.canGo()
worker.haveWeight()
worker.sayHello()
worker.workInfo()
