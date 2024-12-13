import OutputView from '../View/OutputView.js';

const loopWhileValid = async (func, ...args) => {
  while (true) {
    try {
      return await func(...args);
    } catch (error) {
      OutputView.printMessage(error.message);
      OutputView.printBlank();
    }
  }
};

export default loopWhileValid;
