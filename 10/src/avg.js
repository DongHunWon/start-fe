function avg(...args) {
  let sum = 0;
  let count = 0;

  function sumNum(numbers) {
    numbers.forEach(num => {
      // eslint-disable-next-line no-restricted-globals
      if (!isNaN(num)) {
        sum += num;
        count += 1;
      } else if (Array.isArray(num)) {
        sumNum(num)
      }
    });
  }

  sumNum(args);

  return sum / count;
}

export default avg;