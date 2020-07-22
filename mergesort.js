function split(wholeArray) {
  const splitNum = Math.floor(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, splitNum);
  const secondHalf = wholeArray.slice(splitNum);
  return [firstHalf, secondHalf];
}

function merge(arrayOne, arrayTwo) {
  const mergedArray = [];

  //pointer variables
  let i = 0;
  let j = 0;

  while (i < arrayOne.length && j < arrayTwo.length) {
    if (arrayOne[i] < arrayTwo[j]) {
      mergedArray.push(arrayOne[i]);
      i++;
    } else {
      mergedArray.push(arrayTwo[j]);
      j++;
    }
  }

  while (i < arrayOne.length) {
    mergedArray.push(arrayOne[i]);
    i++;
  }

  while (j < arrayTwo.length) {
    mergedArray.push(arrayTwo[j]);
    j++;
  }

  return mergedArray;
}

const newTestArray = [7, 4, 3, 13, 19, 1];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const [arrayOne, arrayTwo] = split(array);
    return merge(mergeSort(arrayOne), mergeSort(arrayTwo));
  }
}

mergeSort(newTestArray);
