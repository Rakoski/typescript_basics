class Animal {
    constructor() {
        this.type = "";
        this.sound = "";
    }

    makeSound() {
        console.log(this.sound);
    }
}

class Dog extends Animal {
    constructor() {
        super();
        this.type = "Dog";
        this.sound = "Woof!";
    }
}

class Cat extends Animal {
    constructor() {
        super();
        this.type = "Cat";
        this.sound = "Meow!";
    }
}

class AnimalFactory {
    createAnimal() {
        throw new Error("createAnimal method should be overridden");
    }
}

class DogFactory extends AnimalFactory {
    createAnimal() {
        return new Dog();
    }
}

class CatFactory extends AnimalFactory {
    createAnimal() {
        return new Cat();
    }
}

function getAnimalSound(animalFactory) {
    const animal = animalFactory.createAnimal();
    animal.makeSound();
}

const dogFactory = new DogFactory();
getAnimalSound(dogFactory); // Output: Woof!

const catFactory = new CatFactory();
getAnimalSound(catFactory); // Output: Meow!
