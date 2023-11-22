export class MyService {
  static instance: MyService | null = null  
  
  private constructor(
    public name: string
  ) {}

  getName() {
    return this.name;
  }

  static create(name: string) {
    if(MyService.instance === null) {
      console.log('Only this time');
      MyService.instance = new MyService(name)
    } else {
      return MyService.instance;
    }
  }
}

const myService1 = MyService.create('service__1');
console.log(myService1?.getName());
const myService2 = MyService.create('service__2');
console.log(myService2?.getName());
const myService3 = MyService.create('service__3');
console.log(myService3?.getName());
