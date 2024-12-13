import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },

  printBlank() {
    Console.print('');
  },
};

export default OutputView;
