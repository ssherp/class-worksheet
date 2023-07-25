const originalArray = [1, 3, 2, 5, 10];

// doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). map() will use an anonymous function as a condition. 
const doubledArray = originalArray.map(function(data) {
  // The anonymous function returns each number multiplied by 2. The returned result is added to a new array.
  return data * 2;
});

console.log(doubledArray);
console.log(originalArray);


// Describe how map is working in the example below. What will the value of tripledArray be?
// A map loops through each number in originalArray, multiplies it by 3, and adds it to a new array. The value of tripledArray will be the new array returned by the map.
// [3, 9, 6, 15, 30]
const tripledArray = originalArray.map(data => data * 3);

// const tripledArray = originalArray.map(data => {
//   return data * 3
//  });

// Describe how map is working in the example below. What will the value of oddOrEven be?
// A map takes the originalArray, uses a conditional statement to check if a number is even or odd, and returns a new array 
// containing the text "even" if the number is even and the text "odd" if the number is odd
// [1, 3, 2, 5, 10];
// ["odd", "odd", "even", "odd", "even"]

const oddOrEven = originalArray.map(num => {
  if (num % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
});

console.log(oddOrEven);//["odd", "odd", "even", "odd", "even"]
console.log(originalArray);//[1, 3, 2, 5, 10];





const pirateArr = originalArray.map(()=> "Arrr");
// [1, 3, 2, 5, 10];
// ["Arrr", "Arrr", "Arrr", "Arrr", "Arrr"];


//=================
const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((previousValue, currentValue) => previousValue + currentValue,initialValue);

console.log(sumWithInitial);
// // expected output: 10


var map = (arr, cb) => {
  var result = [];
  for (var index = 0; index < arr.length; index++) {
    var currentElement = arr[index];
    result.push(cb(currentElement));
  }
  return result;
};

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var doubled = map(numbers, element => element * 2);
// var pirateArr  = map(numbers, ()=> "Arrr");
// ["Arrr", "Arrr", "Arrr", "Arrr", "Arrr"];

// Prints `[ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]`
console.log(doubled);