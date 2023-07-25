// Avoid using arrow functions for object methods
// module.exports.name = "Farley";
// module.exports.sound = "Meow";
// var sound = "meow"
var dog = {
  name: "Lassie",
  sound: "Woof!",
  makeSound: () => console.log(this.sound),//undefined
  makeSoundFun: function(){console.log(this.sound)},//Woof!
  readTag: () => console.log("The dog's tag reads: " + this.name + "."),//The dog's tag reads: undefined.
  nested: function(){
    var nestedGreeting =() => console.log("Hello: " + this.name + ".")//Hello: Lassie.
    nestedGreeting()
  },
  nestedArrow: () =>{
    var nestedGreeting =() => console.log("Goodbye: " + this.name + ".")//Goodbye: undefined.
    nestedGreeting()
  }
};



// Prints `undefined`
dog.makeSound();
dog.makeSoundFun();

// Prints `The dog's tag reads: undefined.`
dog.readTag();
dog.nested();
dog.nestedArrow();
// In the makeSound and readTag methods, `this` doesn't refer to `dog`
// If this code run in node, `this` refers to `module.exports` (the object containing all the exports in this file)
// If this code was run in the browser, `this` would refer to the window

//Arrow functions don't have their own bindings to this, and should not be used as methods.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
