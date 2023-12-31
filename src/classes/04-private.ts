export class MyDate {
  private year: number;
  private month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  };

  getDay() {
    return this.day;
  }

  private addPadding(value: number) {
    return value < 10 ? `0${value}` : `${value}`
  }

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
    const day = this.addPadding(this.day)
    const month = this.addPadding(this.month)
    return `${day} / ${month} / ${this.year}`
  };
};

const myDate = new MyDate(1996, 9, 6);
myDate.add(5, 'days');
// console.log(myDate.day = 8)
console.log(myDate.getDay());
