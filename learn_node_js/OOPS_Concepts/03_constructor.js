// constructor method is automatically invocked by javascript when we create object of class

class Toyota {
  constructor(Brand, mileage) {
    this.Brand = Brand;
    this.mileage = mileage;
    console.log(`The brand is ${Brand} and mileage is ${mileage}`);
  }
  start() {
    console.log("Engine is starting");
  }
  stop() {
    console.log("Engine is stopping");
  }

  setBrand(brand) {
    this.brand = brand;
  }
}

let fortuner = new Toyota("Fortuner", 10);
console.log(fortuner);
fortuner.start();
