/* eslint-disable no-restricted-globals */
function random(...args) {
  let [min, max] = args;

  if (!isNaN(min) && max === undefined) {
    max = min;
    min = 0;
  } else if (isNaN(min) || isNaN(max)) {
    return -1;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default random;