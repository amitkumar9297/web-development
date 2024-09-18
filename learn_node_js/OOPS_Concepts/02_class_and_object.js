// classes object bnanane ka template deta hai (blueprint)

class Toyota {
  strat() {
    console.log("Engine is starting");
  }
  stop() {
    console.log("Engine is stopping");
  }

  setBrand(brand) {
    this.brand = brand;
  }
}

// #region create object from class

const fortuner = new Toyota();
fortuner.strat();
fortuner.stop();

const lexus = new Toyota();
lexus.strat();
lexus.stop();

// #endregion
// #region create object from class and set brand
const innova = new Toyota();
innova.setBrand("Toyota");
console.log(innova.brand);
