
// function isEqual() {
//   console.log('They are equal in type and value');
// }

// isEqual();


// isEqual using function declaration
var str1 = "cat";
var str2 = "dog";

function isEqual(x, y) {
  if (x === y) {
    console.log('They are equal in type and value');
  } else if (x == y) {
    console.log('They are equal in value');
  } else {
    console.log('They are not equal');
  }
}

// Logs "They are equal in type and value"
isEqual(10, 10);

// Logs "They are equal in value"
isEqual('10', 10);

isEqual(str1, str2);
isEqual("cat", "dog");


// Using function expression
var isEqualTakeTwo = function (x, y) {
  if (x === y) {
    console.log('They are equal in type and value');
  } else if (x == y) {
    console.log('They are equal in value');
  } else {
    console.log('They are not equal');
  }
  return;
};

// Logs "They are not equal"
isEqualTakeTwo(10, true);


//=========================


var score = 0;


// score = score + 1;
// score = score + 1;
// score = score + 1;



function incrementScore() {
  score = score + 1;
  return score;
}

incrementScore(); // score === 1
incrementScore(); // score === 2
incrementScore(); // score === 3

console.log(score)//3


var newScore = incrementScore();
console.log(newScore);//4



function setOfWork (){
  //do something
  console.log("Hello"); 
}

setOfWork();
setOfWork();
setOfWork();
setOfWork();
setOfWork();


function setOfOtherWork(arg){
  //do something different 
  console.log("Hello " + arg);
}


setOfOtherWork("Farley");
setOfOtherWork("Asher");
setOfOtherWork("Sage");

var str = setOfOtherWork("Mr.Snuggles");
console.log(str)//undefined 

function setOfOtherWork (x){
  for (var i = 0; i < 4; ++i) {
    console.log("Hello "+x);
  }
  //do something different 
  // console.log("Hello " + arg);
  return "Hello " + x
}



var str = setOfOtherWork("Mr. Snuggles");
console.log(setOfOtherWork("Mr. Snuggles"));//undefined no return value
console.log(str);//undefined no return value
