  // Creates an array containing names of five student in the class
  var students = ["Mark", "Sarah", "Orlando", "Heather", "Ismael", "Hung", "Mark"];

  // Logs length of the array
  console.log(students.length);

  for(var i = 0; i < 4; i++) {console.log("Great to see you, " + students[i] + "!"); }

  for(var farley = 0; farley < 4; farley++) {
    console.log("Great to see you, " + students[farley] + "!"); 
  }

  for(var bark = 0; bark < 4; bark++) {
    console.log("meow"); 
  }
  console.log("==========");
  
  for(var i = 0; i < 4; i++) {
    // This statement will run each time the loop is executed
    console.log("Great to see you, " + students[i] + "!");
  }

console.log("==========");

  // For loop starts at 0, runs while i is less than length of student array
  // Increments by 1
  for(var i = 0; i < students.length; i++) {
    // This statement will run each time the loop is executed
    console.log("Great to see you, " + students[i] + "!");
  }

console.log("==========");

  for(var i = students.length -1; i >= 0; i--) {
    // This statement will run each time the loop is executed
    console.log("Great to see you, " + students[i] + "!");
  }


console.log("=====NOT MARK=====");

  for(var i = 0; i < students.length && students[i] !== "Mark"; i++) {
    // This statement will run each time the loop is executed
    console.log("Great to see you, " + students[i] + ", as you are not Mark");
  }

  console.log("=====NOT MARK INSIDE=====");

  for(var i = 0; i < students.length; i++) {
    // This statement will run each time the loop is executed
    if(students[i] !== "Mark" ){
      console.log("Great to see you, " + students[i] );
    }else{
      console.log("Booooooo " + students[i] + "!");
    }
    
  }


console.log("==========");


// While Loop: Loops can execute a block of code as long as a specified condition is true.
  var i = 0;
  while (i < students.length) {
  console.log("Good to see you, " + students[i] + "!");
  i++;
  }

console.log("==========");

// The do...while statement creates a loop that executes a specified statement 
// until the test condition evaluates to false. 
// The condition is evaluated after executing the statement, 
// resulting in the specified statement executing at least once.
var i = 0;
do {
  console.log("Good to see you, " + students[i] + "!");
  i = i + 1;
  // i++
} while (i < students.length);


console.log("==========");

var foundStudent = false;
var i = 0;
while(!foundStuent && i < students.length ){
  if(students[i] === "Heather"){
    foundStuent = true;
    console.log("Found " + students[i])
  }
  if(i >= students.length -1 && !foundStudent){
    console.log("student Not Found");
    
  }else if (!foundStuent){
    console.log("Current Student: " + students[i])
    i++;
  }
  
}
