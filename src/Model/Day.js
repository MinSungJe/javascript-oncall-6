import { DATE_LIST, DAY_OFF, MAX_DAY, WEEKEND_LIST } from '../Constant/DateConfig.js';
import ErrorMessage from '../Constant/ErrorMessage.js';
import { ListChecker, NumberChecker } from '../Service/Checkers.js';
import throwError from '../Util/throwError.js';

class Day {
  month;
  day;
  date;
  isDayOff = false;
  worker;

  constructor(month, day, date) {
    this.#validate(month, day, date);
    this.month = month;
    this.day = day;
    this.date = date;
    this.#checkIsDayOff();
  }

  #validate(month, day, date) {
    if (!NumberChecker.isRangedNumber(month, 1, 12)) throwError(ErrorMessage.INVALID_INPUT);
    if (!NumberChecker.isRangedNumber(day, 1, MAX_DAY[month]))
      throwError(ErrorMessage.INVALID_INPUT);
    if (!ListChecker.isIncludesValue(DATE_LIST, date)) throwError(ErrorMessage.INVALID_INPUT);
  }

  #checkIsDayOff() {
    DAY_OFF.forEach(({ month, day }) => {
      if (this.month === month && this.day === day) this.isDayOff = true;
    });
    if (ListChecker.isIncludesValue(WEEKEND_LIST, this.date)) this.isDayOff = true;
  }

  setWorker(name) {
    this.worker = name;
  }

  getInfoString() {
    const isSpecialDayOff = this.isDayOff && !ListChecker.isIncludesValue(WEEKEND_LIST, this.date);

    if (isSpecialDayOff)
      return `${this.month}월 ${this.day}일 ${this.date}(휴일) ${this.worker || ''}`;
    return `${this.month}월 ${this.day}일 ${this.date} ${this.worker || ''}`;
  }
}

export default Day;
