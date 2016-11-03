

describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array with one integer', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });


  it('handles an array with multiple integers', function(){
    expect( bubbleSort([6,3,20,4,7,8]) ).toEqual( [3,4,6,7,8,20] );
  });


  it('handles an array with a negative number', function(){
    expect( bubbleSort([5, 7, -3,40, -1, 75,0]) ).toEqual( [-3,-1,0,5,7,40,75] );
  });

   it('handles an array with strings', function(){
    expect( bubbleSort(['d','b','c','a']) ).toEqual( ['a','b','c','d'] );
  });

//  it('handles an array with objects', function(){
//     expect( bubbleSort([{name: 'Spencer', age: 36}, {name: 'Jean', age: 26}]) ).toEqual( [] );
//   });



});