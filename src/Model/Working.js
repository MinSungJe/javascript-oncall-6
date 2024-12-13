import { DATE_LIST, MAX_DAY } from '../Constant/DateConfig.js';
import ErrorMessage from '../Constant/ErrorMessage.js';
import { ListChecker, NumberChecker, StringChecker } from '../Service/Checkers.js';
import throwError from '../Util/throwError.js';
import Day from './Day.js';

class Working {
  days = [];

  constructor(assignInput) {
    this.#validate(assignInput);
    const [monthInput, date] = assignInput.split(',');
    this.#createDays(Number(monthInput), date);
  }

  #validate(assignInput) {
    const infoList = assignInput.split(',');
    if (!ListChecker.isExactLength(infoList, 2)) throwError(ErrorMessage.INVALID_INPUT);

    const [monthInput, dateInput] = infoList;
    if (!StringChecker.isNumberString(monthInput)) throwError(ErrorMessage.INVALID_INPUT);
    if (!NumberChecker.isRangedNumber(Number(monthInput), 1, 12))
      throwError(ErrorMessage.INVALID_INPUT);
    if (!ListChecker.isIncludesValue(DATE_LIST, dateInput)) throwError(ErrorMessage.INVALID_INPUT);
  }

  #createDays(month, startDate) {
    for (let day = 1; day <= MAX_DAY[month]; day++) {
      this.days = [...this.days, new Day(month, day, this.#changeDate(startDate, day - 1))];
    }
  }

  #changeDate(startDate, additionDay) {
    const dateIndex = (DATE_LIST.indexOf(startDate) + additionDay) % 7;
    return DATE_LIST[dateIndex];
  }

  #setWorkers(weekdayWork, weekendWork) {
    this.days.forEach((day) => {
      if (day.isDayOff) day.setWorker(weekendWork.getNextWorker());
      else day.setWorker(weekdayWork.getNextWorker());
    });
  }
}

export default Working;
