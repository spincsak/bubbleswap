// function bubbleSort(array) {
//   let counter = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > array[i + 1]) {
//       array.splice(i, 2, array[i + 1], array[i])
//       counter++
//     }
//   }
//   if (counter === 0) {
//     return array
//   } else {
//     counter = 0
//     return bubbleSort(array)
//   }
// }

function bubbleSort(array) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      const swapped = swap(array[i], array[i+1])
      array.splice(i, 2, swapped[0], swapped[1])
      counter++
    }
  }
  if (counter === 0) {
    return array
  } else {
    counter = 0
    return bubbleSort(array)
  }
}

function swap (num1, num2) {
  return [num2, num1]
}
