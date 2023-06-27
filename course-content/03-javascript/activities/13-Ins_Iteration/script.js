// We use a for-loop to execute code more than once
for (var i = 0; i < 5; i++) {
    // This is the block of code that will run each time
    console.log("This is the current value of i: " + i + ".");
}

console.log("****");

// For-loops are often used to iterate over arrays
var zooAnimals = ["Bears", "Giraffes", "Penguins", "Meerkats"];

//To determine how many times the loop should execute, we use the array's length

for (var i = 0; i < 3; i++) { 
    console.log("I am going to zoo to see " + zooAnimals[i] + ".");
}

console.log("****");

for (var i = 0; i < zooAnimals.length; i++) {
    console.log("I am going to zoo to see " + zooAnimals[i] + ".");
}

for (var i = 0; i < zooAnimals.length; i = i + 1) {
    console.log("I am going to zoo to see " + zooAnimals[i] + ".");
}

// console.log[0];//"Bears"
// console.log[1];//"Giraffes"
// console.log[2];//"Penguins"
// console.log[3];//"Meerkats"
// console.log[4];//undefined

console.log("****");

for (var i = zooAnimals.length -1 ; i >= 0; i--) { 
    console.log("I am going to zoo to see " + zooAnimals[i] + ".");
}
