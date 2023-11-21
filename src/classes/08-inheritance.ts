export class Animal {
  constructor(public name: string) {};

  move() {
    console.log("Moving along!");
  }

  greeting() {
    return `Hello I'm ${this.name}`
  }
}

export class Dog extends Animal {
  constructor(
    name: string,
    public owner: string
  ) {
    super(name);
  }

  woof(times: number) {
    for (let index = 0; index < times; index++) {
      console.log("woof");
    }
  }
};

const cyndie = new Dog('Cyndie', 'Yordy');
cyndie.move();
console.log(cyndie.greeting());