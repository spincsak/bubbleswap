const mergeArray = [3, 6, 4, 10, 16, 3, 72, 1];

const splitArray = [3, 6, 4, 10, 16, 3, 72, 1, 17, 101, 48];

describe('Split Array', function () {
  // beforeEach(function () {

  // });
  it('returns an array', function () {
    expect(Array.isArray(split(splitArray))).toBe(true);
  });
  it('splits the input array in half', function () {
    expect(split(splitArray)[0].length + split(splitArray)[1].length).toEqual(
      splitArray.length
    );
    if (splitArray.length % 2 === 0) {
      expect(split(splitArray)[0].length).toEqual(splitArray.length / 2);
    }
  });
});

const mergeTestOne = [4, 8, 15];
const mergeTestTwo = [7, 14, 19];

describe('Merge function', function () {
  it('is able to merge two sorted arrays into one sorted array', function () {
    expect(merge(mergeTestOne, mergeTestTwo)).toEqual([4, 7, 8, 14, 15, 19]);
  });
});

describe('Merge Sort function', function () {
  it('accepts an array and returns a sorted copy of that array', function () {
    expect(mergeSort(mergeArray)).toEqual([1, 3, 3, 4, 6, 10, 16, 72]);
  });
});
