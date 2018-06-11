


describe('Bubble Sort', function(){
beforeAll(function () {
  spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
});


  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array of one element', function(){
  	expect( bubbleSort([1]) ).toEqual( [1] );
  });

  it('handles an array of multiple elements', function(){
  	expect( bubbleSort( [4, 10, 29, 3, 1, 18]) ).toEqual( [1, 3, 4, 10, 18, 29] );
  }), it('runs n times', function () {
  //swap();
  expect(window.swap.calls.count()).toEqual(8);
});

  it('handles an array with duplicates', function(){
  	expect( bubbleSort( [5, 9, 3, 5]) ).toEqual( [3, 5, 5, 9]);
  }), it('runs n times', function () {
  expect(window.swap.calls.count()).toEqual(3);
});

  it('handles an array with negatives', function(){
  	expect( bubbleSort( [8, 12, -3, 1, 6, -10]) ).toEqual( [-10, -3, 1, 6, 8, 12]);
  });
});

