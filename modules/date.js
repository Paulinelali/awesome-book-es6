import { DateTime } from './luxon.js';

const dateNow = () => {
  const currentDate = DateTime.now().toHTTP();
  return currentDate;
};

export default { dateNow };