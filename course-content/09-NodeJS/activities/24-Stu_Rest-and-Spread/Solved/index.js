// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];


// const jeromeSongs = ['No capping', 'Hello'];
// const sageSongs = ['Unicorns', 'Horses', 'I lava You'];
// const asherSongs = ['Dance Dance', 'Baby Shark'];


// const familySongs = [...jeromeSongs, ...sageSongs,...asherSongs];


// Which operator is being used here?
// We are using the spread operatzor to copy the 'songs' array into another array
const newSongs = [...songs, "unicorns"];

// What do you expect to be logged in the console?
// ["Creep", "Everlong", "Bulls On Parade", "Song 2", "What I Got"];
console.log(newSongs);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // What does the reduce() method do?
  // The reduce() method executes the reducer function on each element of the array
  return array.reduce((accumulator, currentValue) =>  accumulator + currentValue);
};


function add(x, y, z) {
  let sum = 0;
  const nums = [x, y, z];
  for (let num of nums) sum += num;
  return sum;
}

//Reduce Sidenote
console.log(["a","b","c","c"].reduce((a,b) => {
    a[b] = a[b] ? a[b]+1 : 1;
    return a;
},{}));


console.log(["a","b","c","c"].reduce((obj,value) => {
    // if obj[value] exists, iterate, else assign 1
    obj[value] = obj[value] ? obj[value] + 1 : 1;
    return obj;// obj for next iteration of reduce
},{}));


// returns: { a: 1, b: 1,c: 2 }

//----------

["a","b","c"].reduce((a,b)=>a+b,"");
// 'abc'
// The first example creates an object that counts the number of instances of each element of an array.
// The second example can be used to append strings. 

// What do you expect to be logged in the console?
// 6
console.log(addition(1, 2, 3));

// What is this syntax that is being used as the parameter?
// We are using the rest parameter syntax that allows us to represent an indefinite number of arguments as an array
const additionSpread = (...array) => {
  return array.reduce((a, b) => a + b, 0);
};

// What do you expect to be logged in the console?
// 6
console.log(additionSpread(1, 2, 3));

// What do you expect to be logged in the console?
// 110
console.log(additionSpread(1, 2, 3, 4, 100));
