const employee = {
  calcTax() {
    console.log("Tax rate is 10%");
  },
};

const karanArjun = {
  salary: 5000,
};
const karanArjun1 = {
  salary: 5000,
};
const karanArjun2 = {
  salary: 5000,
  calcTax() {
    console.log("Tax rate is 20%");
  },
};
karanArjun1.__proto__ = employee;
karanArjun2.__proto__ = employee; // jab object ka method aur prototype ka method same hote hai to object ka method chalega
// as compare to prototype object ke method jayada closee hoata hai jo object ka method pehle chalega

console.log(karanArjun1.calcTax());
console.log(karanArjun2.calcTax());
