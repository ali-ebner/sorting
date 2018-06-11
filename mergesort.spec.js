describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      expect( split([4, 6, 3, 2])).toEqual([[4, 6], [3, 2]]);
    });

    it('is able to split an array with odd length into two halves', function() {
        expect( split([4, 6, 3, 2, 5])).toEqual([[4, 6], [3, 2, 5]]);
      });
  });

describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
        expect( merge([4, 6], [2, 3, 5])).toEqual([2, 3, 4, 5, 6]);
    });
});

describe('Merge Sort function', function(){
    it('is able to sort an array with no length', function(){
        expect( mergeSort([])).toEqual([]);
    });

    it('is able to sort an array with one element', function(){
        expect( mergeSort([3])).toEqual([3]);
    });

    it('is able to sort an array with many elements', function(){
        expect( mergeSort([4, 6, 3, 2])).toEqual([2, 3, 4, 6]);
    });
});