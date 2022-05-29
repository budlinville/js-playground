class Vehicle {
	constructor(name) {
		this.name = name;
	}

	move() {
		console.log(this.name, 'is moving')
	}
}

class Car extends Vehicle {
	move() {
		console.log(this.name, 'is driving');
	}
}

class Plane extends Vehicle {
	move() {
		console.log(this.name, 'is flying');
	}
}

class Boat extends Vehicle {
	constructor(name, adj) {  // defining new constructor... must call parent class with 'super'
		super(name);
		this.adj = adj;
	}

	move() {
		console.log(`${this.name} is drifitng ${this.adj}`);
	}
}

const vehicle = new Vehicle('Betsy');
vehicle.move();

const car = new Car('Tina');
car.move();

const plane = new Plane('Betsy');
plane.move();

const boat = new Boat('Helga', 'lazily');
boat.move();
