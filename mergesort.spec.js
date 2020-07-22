// const mergeArray = [3, 6, 4, 10, 16, 3, 72, 1];

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
