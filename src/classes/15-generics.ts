// function getNumber(number: number) {
//   return number
// }

function getValue<myType>(value: myType) {
  return value
}

getValue<string>('string').length;
getValue<number>(10).toFixed;
getValue<boolean>(true);
getValue<number[]>([1, 2, 3, 4, 5]).map(item => item * 2);