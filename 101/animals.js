class Animal {
    constructor(typeOfAnimal) {
        this.typeOfAnimal = typeOfAnimal
    }

    makeASound() {
        return "Guawk";
    }
}

class Bird extends Animal {
    constructor(typeOfAnimal, region) {
        super(typeOfAnimal)
        this.region = region
    }

    cacaw() {
        this.makeASound()
    }
}