export class Animal {
  constructor(protected name: string) {};

  move() {
    console.log("Moving along!");
  }

  greeting() {
    return `Hello I'm ${this.name}`
  }

  protected doSomething() {
    console.log('doing something')
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

    this.doSomething()
  }

  move() {
    console.log('moving as a dog');
    super.move();
  }
};

const cyndie = new Dog('Cyndie', 'Yordy');
cyndie.move();
console.log(cyndie.greeting());
// cyndie.name
cyndie.owner