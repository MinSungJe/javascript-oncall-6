import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async getsomething() {
    const something = await Console.readLineAsync('입력부 메시지\n');
    return something;
  },
};

export default InputView;
