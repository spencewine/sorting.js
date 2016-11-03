describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([])).toEqual([[],[]])
  });
  it('is able to split an array of 10 integers into two halves', function() {
    expect( split([3,4,7,2,1,9,8,0,22,100])).toEqual([[3,4,7,2,1],[9,8,0,22,100]])
  });
  it('is able to split an array of 7 integers into two halves', function() {
    expect( split([5,3,1,2,4,0,6])).toEqual([[5,3,1],[2,4,0,6]])
  });
});

describe('Merge Sort', function(){
  it('is able to merge two arrays of length 1', function(){
   expect( merge([6],[10])).toEqual([6, 10])
  });
    it('is able to merge two sorted arrays into one sorted array', function(){
   expect( merge([6,7,8,9],[2,3,4,5])).toEqual([2,3,4,5,6,7,8,9])
  });
    it('is able to merge two sorted arrays into one sorted array (evens/odds)', function(){
   expect( merge([2,4,6,8],[1,3,5,7])).toEqual([1,2,3,4,5,6,7,8])
  });
      it('is able to merge two sorted arrays into one sorted array (disparate lengths)', function(){
   expect( merge([2,4,6],[1,3,5,7])).toEqual([1,2,3,4,5,6,7])
  });
});

describe('Merge Sort', function(){
  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });

  it('handles an array with one integer', function(){
    expect( mergeSort([1]) ).toEqual( [1] );
  });


  it('handles an array with multiple integers', function(){
    expect( mergeSort([6,3,20,4,7,8]) ).toEqual( [3,4,6,7,8,20] );
  });


  it('handles an array with a negative number', function(){
    expect( mergeSort([5, 7, -3,40, -1, 75,0]) ).toEqual( [-3,-1,0,5,7,40,75] );
  });
});
