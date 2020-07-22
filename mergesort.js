function split(wholeArray) {
  const splitNum = Math.floor(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, splitNum);
  const secondHalf = wholeArray.slice(splitNum);
  console.log('first half:', firstHalf);
  console.log('second half', secondHalf);
  return [firstHalf, secondHalf];
}
