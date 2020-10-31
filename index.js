const sortedArray = (arr) => {
  if(arr === null)
    return [];

  if(arr.length === 0)
    return [];


  const finalArr = arr.sort((a, b) => {
    return a - b;
  });

  return finalArr;
}

sortedArray([80, 29, 4, -95, -24, 85]);



//sortNumsAscending([1, 2, 10, 50, 5]) ➞ [1, 2, 5, 10, 50]
//sortNumsAscending([80, 29, 4, -95, -24, 85]) ➞ [-95, -24, 4, 29, 80, 85]

//    Sort numbers array in ascending order.
//    If the function's argument is null, an empty array, or undefined; return an empty array.
//    Return a new array of sorted numbers.