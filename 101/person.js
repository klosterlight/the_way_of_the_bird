class Person {
    constructor(height, weight, dob, name, xPosition = 0, yPosition = 0) {
        this.height = height;
        this.weight = weight;
        this.dob = dob;
        this.name = name;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
    }

    age() {
        var today = new Date();
        var birthDate = new Date(this.dob);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    saySomething(something = "") {
        console.log(`[${new Date().toString()}] ${this.name}: ${something}`);
        return;
    }

    walk(xPosition = 1, yPosition = 1) {
        this.xPosition += xPosition
        this.yPosition += yPosition
        console.log(`Now currently at ${this.xPosition}, ${this.yPosition}`)
    }
}

class World {
    constructor() {
        this.persons = []
    }

    addPerson(person) {
        this.persons.push(person)
    }
}

person = new Person('180', '65', '1990-12-06', 'Gerardo')