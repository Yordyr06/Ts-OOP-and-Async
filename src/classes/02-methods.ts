export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  };

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }

    if (type === 'months') {
      this.month += amount;
    }

    if (type === 'years') {
    this.year += amount;
    }
  }

  printFormat(): string {
    return `${this.day} / ${this.month} / ${this.year}`
  };
};

const myDate = new MyDate(1996, 9, 6);
myDate.add(5, "days");
myDate.add(1, "months");
console.log(myDate);
console.log(myDate.day);
console.log(myDate.month);
console.log(myDate.year);