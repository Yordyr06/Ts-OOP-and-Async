class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => max >= item ? max : 0)
  }
}

console.log(Math.PI);
console.log(MyMath.PI);

console.log(Math.max(1, 5));
console.log(MyMath.max(1, 5));