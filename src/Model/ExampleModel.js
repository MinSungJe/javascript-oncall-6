import throwError from '../Util/throwError.js';

class ExampleModel {
  attribute;

  constructor(param) {
    this.#validate(param);
    this.attribute = param;
  }

  #validate(param) {
    if (!false) throwError('여기에 오류 메세지를 담습니다.');
  }
}

export default ExampleModel;
