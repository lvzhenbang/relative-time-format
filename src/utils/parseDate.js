import isValidDate from './isValidDate';
import isArrayLike from './isArrayLike';

export default function parseDate(inputTime) {
  // parse `new Date()` object value
  if (isValidDate(inputTime)) {
    return inputTime.getTime();
  }

  // parse '2020-0-7 16:29:59 888' value
  if (typeof inputTime === 'string' && inputTime.indexOf('-')) {
    const parseReg = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[\s]?(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.|\s]?(\d{1,3})?$/;
    const matchesArr = inputTime.match(parseReg);
    let inputDate = new Date(NaN);

    if (isArrayLike(matchesArr)) {
      inputDate = new Date(
        matchesArr[1],
        (matchesArr[2] - 1) || 0,
        matchesArr[3] || 1,
        matchesArr[4] || 0,
        matchesArr[5] || 0,
        matchesArr[6] || 0,
        matchesArr[7] || 0,
      );
    }

    if (isValidDate(inputDate)) {
      return inputDate.getTime();
    }
  }

  // parse Date.now()/Date.getTime() value
  if (isValidDate(new Date(inputTime))) {
    return inputTime;
  }

  return false;
}
