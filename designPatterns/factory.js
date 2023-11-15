function Animal() {
    this.type = "";
    this.sound = "";
}

Animal.prototype.makeSound = function () {
    console.log(this.sound);
};

function Dog() {
    Animal.call(this);
    this.type = "Dog";
    this.sound = "Woof!";
}
Dog.prototype = Object.create(Animal.prototype);

function Cat() {
    Animal.call(this);
    this.type = "Cat";
    this.sound = "Meow!";
}
Cat.prototype = Object.create(Animal.prototype);

function AnimalFactory() {}

AnimalFactory.prototype.createAnimal = function () {
    throw new Error("createAnimal method should be overridden");
};

function DogFactory() {}
DogFactory.prototype = Object.create(AnimalFactory.prototype);
DogFactory.prototype.createAnimal = function () {
    return new Dog();
};

function CatFactory() {}
CatFactory.prototype = Object.create(AnimalFactory.prototype);
CatFactory.prototype.createAnimal = function () {
    return new Cat();
};

function getAnimalSound(animalFactory) {
    const animal = animalFactory.createAnimal();
    animal.makeSound();
}

const dogFactory = new DogFactory();
getAnimalSound(dogFactory); // Output: Woof!

const catFactory = new CatFactory();
getAnimalSound(catFactory); // Output: Meow!
