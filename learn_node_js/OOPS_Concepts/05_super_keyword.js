class person {
  constructor(species) {
    console.log("enter parent constructor");
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
  constructor(Branch) {
    console.log("enter child constructor");
    super(); // super keyword is used to call the constructor of parent class , it mendatory to call super() in child class constructor
    this.branch = Branch;
    console.log("exit child constructor");
  }
  work() {
    console.log("Engineer is working");
  }
}

let chemicalEngineer = new engineer("Chemical");
