import isArrayLike from './isArrayLike';

export default function parseDate(inputTime) {
  const parseReg = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[\s]?(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.|\s]?(\d{1,3})?$/;
  const matchesArr = inputTime.match(parseReg);

  if (isArrayLike(matchesArr)) {
    return new Date(
      matchesArr[1],
      (matchesArr[2] - 1) || 0,
      matchesArr[3] || 1,
      matchesArr[4] || 0,
      matchesArr[5] || 0,
      matchesArr[6] || 0,
      matchesArr[7] || 0,
    );
  }
  return new Date(NaN);
}
