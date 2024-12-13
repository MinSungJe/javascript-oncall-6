import { Console } from '@woowacourse/mission-utils';
import Comment from '../Constant/Comment.js';

const InputView = {
  async getAssign() {
    const input = await Console.readLineAsync(Comment.ASSIGN_INPUT);
    return input;
  },

  async getWeekdayWorkers() {
    const input = await Console.readLineAsync(Comment.WEEKDAY_WORKER_INPUT);
    return input;
  },

  async getWeekendWorkers() {
    const input = await Console.readLineAsync(Comment.WEEKEND_WORKER_INPUT);
    return input;
  },
};

export default InputView;
