// Follow along with the examples here
function doNothing() {}

function sayHello() {
    console.log("Hello!");
  }

  sayHello();

  function sayHelloToGuadalupe () {
    console.log("Hello, Guadalupe!");
  }
  sayHelloToGuadalupe();

  function sayHelloToLiz() {
    console.log("Hello, Liz!");
  }

  sayHelloToLiz();

  function sayHelloToSamip() {
    console.log("Hello, Samip!");
  }

  sayHelloToSamip();

  sayHelloToGuadalupe();
  sayHelloToLiz();
  sayHelloToSamip();

  function doSomething(thing){
    console.log(thing);
  }

  doSomething("dog");

  function sayHelloTo(firstName){
    console.log(`Hello ${firstName}!`);
  }

sayHelloTo("Guadalupe");
sayHelloTo("Jane");
sayHelloTo("R2-D2");
sayHelloTo(1);

function say(greeting, firstName) {
    console.log(`${greeting} ${firstName}!`);
}
say("Goodbye", "Julio");
say ("Julio", "hello");
console.log(say("Hello", "Liz"));

function add(x, y) {
    return x+y;
}
console.log(add(1, 2)); 

function calculator(num1, num2) {
    return num1 + num2;
}
console.log(calculator(1, 2), `Your total is ${calculator(1,2)}.`)



function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
    
  }

console.log(say("Howdy", "partner"));

function areaOfSquare(x,y) {
    return x * y;
}

console.log(areaOfSquare(4,4));

function princess(name) {
    console.log(`${name}`);
}

princess("Jasmine");
princess("Cinderella");
princess("Mulan");


function characters(role) {
    console.log(role);

}

characters("Captain America");
characters("Iron Man")

function areaOfTraingle(x, y) {
    return (x *y) / 2;

}
console.log(areaOfTraingle(3,2));