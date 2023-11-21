export class MyDate {
  constructor(
      private year: number,
      private month: number,
      private day: number
    ) {};

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