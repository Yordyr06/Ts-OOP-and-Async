export class MyDate {
  constructor(
      private year: number,
      private month: number,
      private _day: number
    ) {};

  get day() {
    return this._day;
  }
  
  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0; 
  }

  private addPadding(value: number) {
    return value < 10 ? `0${value}` : `${value}`
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
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
myDate.day
myDate.isLeapYear;