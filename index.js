class Vehicle {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
  }

  getName() {
    return this.make + ' ' + this.model;
  }
}

const car = new Vehicle('Toyota', 'Corolla', 'Black');
