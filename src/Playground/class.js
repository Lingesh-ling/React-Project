class Cars {
  constructor(m = 'toyota') {
    this.model = m;
  }
  getcardetails() {
    return `car name is ${this.model}`
  }
}

class Person extends Cars {
  constructor(m,name = 'Default') {
    super(m);
    this.myNmae = name;
  }
getcardetails() {
  let descript =super.getcardetails();
  return descript += ` hi ${this.myNmae}`
}

}

const car = new Person('innova','Lingesh');
console.log(car.getcardetails());

const car1 = new Person();
console.log(car1.getcardetails());
