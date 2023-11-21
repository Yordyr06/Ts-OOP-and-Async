export class MyDate {
  constructor(
    private _year: number,
    private _month: number,
    private _day: number
  ) {};

  get day() {
    return this._day;
  }
  
  get month() {
    return this._month
  }

  get year() {
    return this._year
  }

  get isLeapYear(): boolean {
    if (this._year % 400 === 0) return true;
    if (this._year % 100 === 0) return false;
    return this._year % 4 === 0; 
  }

  set month(newMonth: number) {
    if (newMonth >= 1 && newMonth <= 12) {
      this._month = newMonth;
    } else {
      throw new Error("Invalid month");
    }
  }

  private addPadding(value: number) {
    return value < 10 ? `0${value}` : `${value}`
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }

    if (type === 'months') {
      this._month += amount;
    }

    if (type === 'years') {
    this._year += amount;
    }
  }

  printFormat(): string {
    const day = this.addPadding(this.day)
    const month = this.addPadding(this._month)
    return `${day} / ${month} / ${this._year}`
  };
};

const myDate = new MyDate(1996, 9, 6);
myDate.day
myDate.isLeapYear;