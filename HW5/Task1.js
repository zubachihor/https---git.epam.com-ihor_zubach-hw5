class Fruit {
  constructor(name) {
    this.name = name;
  }
}

class Apple extends Fruit {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

