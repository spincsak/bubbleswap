const testArray = [10, 6, 25, 8, 1, 3, 5, 9, 3, 50]



describe('Bubble Sort', function(){

  beforeAll(function () {
    spyOn(testArray, 'swap')
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('returns an array with the same length as the input', function(){
    expect ( bubbleSort(testArray).length).toEqual(testArray.length);
  });

  it('sorts arrays of single items', function(){
    expect( bubbleSort([3])).toEqual([3]);
  })

  it('sorts arrays of multiple items', function() {
    expect(bubbleSort(testArray)).toEqual([1, 3, 3, 5, 6, 8, 9, 10, 25, 50])
  })

  // it('calls the swap fundtion more than once', function (){
  //   bubbleSort(testArray)
  //   expect(swap.calls.count()).not.toEqual(0)
  // })

});
