import ErrorMessage from '../Constant/ErrorMessage.js';

const throwError = (message) => {
  throw new Error(`${ErrorMessage.PREFIX} ${message}`);
};

export default throwError;
