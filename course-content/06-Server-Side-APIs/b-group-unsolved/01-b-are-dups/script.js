//  INTERVIEW QUESTIONS

// ## Are-Dups

// ## Instructions
// Given an array, return true if there is at least one duplicate element in the array. If not, return false

// ## Example
// Test Case 1: [1,2,13,12,4,2]
// Expected Output: true

// Test Case 2:[1,2,3,4]
// Expected Output: false

// ## Optimal Time
// O(n)

// input in an array
//assume that the array does not contain dup
//sort the array from lowest to the highest
//iterate thought the entire length of the array comparing 2 values at a time
//compare the current index with the next index value
//if they are the same then its true
//if not move to the next index
//if we reach the end of the array and did not find any dup then just return false


var list=[1,2,13,12,4,2]
// start from beginning, iterate each element
//j start from the next of i, 
function checkDuplicate(list){
   for (var i=0; i<list.length;i++){
    var element=list[i]//0, return 1
      for (var j=i+1; j<list.length; j++){
        elementCheck=list[j]
         if (element===elementCheck){
            return true
          }
        }
    }
    return false
}
var result=checkDuplicate(list1)
console.log(result)