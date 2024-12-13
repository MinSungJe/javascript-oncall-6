import ErrorMessage from '../Constant/ErrorMessage.js';
import { ListChecker, NumberChecker } from '../Service/Checkers.js';
import throwError from '../Util/throwError.js';

class WeekendWork {
  workerList;
  lastIndex = 0;

  constructor(workerInput, weekdayWorkerList) {
    this.#validate(workerInput, weekdayWorkerList);
    this.workerList = workerInput.split(',');
  }

  #validate(workerInput, weekdayWorkerList) {
    const workerList = workerInput.split(',');
    if (!ListChecker.isNoRepeatValue(workerList)) throwError(ErrorMessage.IS_DUPLICATE_NICKNAME);
    if (!NumberChecker.isMorethanMin(workerList.length, 5))
      throwError(ErrorMessage.IS_LESS_THAN_MIN);
    if (!NumberChecker.isLessthanMax(workerList.length, 35))
      throwError(ErrorMessage.IS_MORE_THAN_MAX);
    workerList.forEach((worker) => {
      if (!NumberChecker.isRangedNumber(worker.length, 0, 5))
        throwError(ErrorMessage.IS_WRONG_NICKNAME);
    });
    if (!ListChecker.isSameElementList(workerList, weekdayWorkerList))
      throwError(ErrorMessage.INVALID_INPUT);
  }

  getNextWorker() {
    const prevIndex = this.lastIndex;
    this.lastIndex = (this.lastIndex + 1) % this.workerList.length;
    return this.workerList[prevIndex];
  }

  getNextWorkerByName(name) {
    const index = this.workerList.indexOf(name);
    return this.workerList[(index + 1) % this.workerList.length];
  }
}

export default WeekendWork;
