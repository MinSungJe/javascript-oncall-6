import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },

  printBlank() {
    Console.print('');
  },

  printWorking(working) {
    this.printBlank();
    working.days.forEach((day) => Console.print(day.getInfoString()));
  },
};

export default OutputView;
