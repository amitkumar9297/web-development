// inheritance is passing down the properties and methods from parent class to child class
// Inheritance is a mechanism that allows us to eliminate redundant code by reusing common properties and methods of existing classes.
// we use extends keyword to inherit the properties and methods of a class

class parent {
  hello() {
    console.log("Hello from parent");
  }
}

class child extends parent {
  hi() {
    console.log("Hi from child");
  }
}

let obj = new child();
obj.hello();

class person {
  constructor(species) {
    this.species = species;
  }
  eat() {
    console.log("Person is eating");
  }
  sleep() {
    console.log("Person is sleeping");
  }
  work() {
    console.log("Person is working");
  }
}

class engineer extends person {
  work() {
    console.log("Engineer is working");
  }
}

let Amit = new engineer();
Amit.work();
Amit.eat();

let p1 = new person("Human");
console.log("person p1", p1.species);

let eng = new engineer("homosapien");
console.log("engineer", eng.species);
