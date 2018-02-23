<h1>Most useful in ES6</h1>

**Table of contents :**
    
    1. Promises and async/await
    2. Lambda functions
    3. map/forEach/reduce
    4. Classes (es6 style)
    
<h2>1. Promises and async/await</h2>

**Promises**

Promises give us a way to handle asynchronous processing in a more synchronous fashion. They represent a value that we can handle at some point in the future. And, better than callbacks here, Promises give us guarantees about that future value, specifically:
1. No other registered handlers of that value can change it (the Promise is immutable)
2. We are guaranteed to receive the value, regardless of when we register a handler for it, even if it's already resolved (in contrast to events, which can incur race conditions).

```javascript
var p = new Promise(function(resolve, reject) {  
   if (/* condition */) {
      resolve(/* value */);  // fulfilled successfully
   }
   else {
      reject(/* reason */);  // error, rejected
   }
});
```

**async/await**

The await operator is used to wait for a Promise. It can only be used inside an async function.

```javascript
[rv] = await expression;
```

The async function declaration defines an asynchronous function, which returns an AsyncFunction object.

```javascript
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  var result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();

```

<h2>2. Lambda functions</h2>

**Lambda functions**

Arrow functions – also called “fat arrow” functions. An arrow function expression has a shorter syntax than a function expression and does not have its own this, arguments, super, or new.target. These function expressions are best suited for non-method functions, and they cannot be used as constructors.

```javascript
var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]
```

**Basic Syntax**

```javascript
(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
// equivalent to: (param1, param2, …, paramN) => { return expression; }
```

**Advanced Syntax**

```javascript
(param1, param2, ...rest) => { statements }
(param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }
```

**Example**

***this:***
```javascript
function Person() {
  // The Person() constructor defines `this` as an instance of itself.
  this.age = 0;

  setInterval(function growUp() {
    // In non-strict mode, the growUp() function defines `this` 
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}

var p = new Person();
```

***becomes this:***
```javascript
function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| properly refers to the person object
  }, 1000);
}

var p = new Person();
```

<h2>3. map/forEach/reduce</h2>

**map**

The Map object holds key-value pairs. Any value (both objects and primitive values) may be used as either a key or a value.

```javascript
new Map([iterable])
```

```javascript
//Map Object
var myMap = new Map();

var keyString = 'a string',
    keyObj = {},
    keyFunc = function() {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

myMap.size; // 3

// getting the values
myMap.get(keyString);    // "value associated with 'a string'"
myMap.get(keyObj);       // "value associated with keyObj"
myMap.get(keyFunc);      // "value associated with keyFunc"

myMap.get('a string');   // "value associated with 'a string'"
                         // because keyString === 'a string'
myMap.get({});           // undefined, because keyObj !== {}
myMap.get(function() {}) // undefined, because keyFunc !== function () {}
```

```javascript
//With Array Objects
var kvArray = [['key1', 'value1'], ['key2', 'value2']];

// Use the regular Map constructor to transform a 2D key-value Array into a map
var myMap = new Map(kvArray);

myMap.get('key1'); // returns "value1"

// Use the Array.from function to transform a map into a 2D key-value Array
console.log(Array.from(myMap)); // Will show you exactly the same Array as kvArray

// Or use the keys or values iterators and convert them to an array
console.log(Array.from(myMap.keys())); // Will show ["key1", "key2"]
```
```javascript
//With forEach()
myMap.forEach(function(value, key) {
  console.log(key + ' = ' + value);
});
// Will show 2 logs; first with "0 = zero" and second with "1 = one"
```

**forEach**
```javascript
let list = [8, 3, 11, 9, 6];

for (let value of list) {
  console.log(value);
}
```

**reduce**

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```javascript
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

```

```javascript
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
```

<h2>4. Classes (es6 style)</h2>

Examples are below:

```javascript
'use strict';

// Example 1: Creating a new class (declaration-form)
// ===============================================================

// A base class is defined using the new reserved 'class' keyword
class Polygon {
  // ..and an (optional) custom class constructor. If one is
  // not supplied, a default constructor is used instead:
  // constructor() { }
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }

  // Simple class instance methods using short-hand method
  // declaration
  sayName() {
    ChromeSamples.log('Hi, I am a ', this.name + '.');
  }

  sayHistory() {
    ChromeSamples.log('"Polygon" is derived from the Greek polus (many) ' +
      'and gonia (angle).');
  }

  // We will look at static and subclassed methods shortly
}

// Classes are used just like ES5 constructor functions:
let p = new Polygon(300, 400);
p.sayName();
ChromeSamples.log('The width of this polygon is ' + p.width);

// Example 2: Creating a new class (expression-form)
// ===============================================================

// Our Polygon class above is an example of a Class declaration.
// ES6 classes also support Class expressions - just another way
// of defining a new class. For example:
const MyPoly = class Poly {
  getPolyName() {
    ChromeSamples.log('Hi. I was created with a Class expression. My name is ' +
      Poly.name);
  }
};

let inst = new MyPoly();
inst.getPolyName();

// Example 3: Extending an existing class
// ===============================================================

// Classes support extending other classes, but can also extend
// other objects. Whatever you extend must be a constructor.
//
// Let's extend the Polygon class to create a new derived class
// called Square.
class Square extends Polygon {
  constructor(length) {
    // The reserved 'super' keyword is for making super-constructor
    // calls and allows access to parent methods.
    //
    // Here, it will call the parent class' constructor with lengths
    // provided for the Polygon's width and height
    super(length, length);
    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = 'Square';
  }

  // Getter/setter methods are supported in classes,
  // similar to their ES5 equivalents
  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  }
}

let s = new Square(5);

s.sayName();
ChromeSamples.log('The area of this square is ' + s.area);

// Example 4: Subclassing methods of a parent class
// ===============================================================

class Rectangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = 'Rectangle';
  }
  // Here, sayName() is a subclassed method which
  // overrides their superclass method of the same name.
  sayName() {
    ChromeSamples.log('Sup! My name is ', this.name + '.');
    super.sayHistory();
  }
}

let r = new Rectangle(50, 60);
r.sayName();

// Example 5: Defining static methods
// ===============================================================

// Classes support static members which can be accessed without an
// instance being present.
class Triple {
  // Using the 'static' keyword creates a method which is associated
  // with a class, but not with an instance of the class.
  static triple(n) {
    n = n || 1;
    return n * 3;
  }
}

// super.prop in this example is used for accessing super-properties from
// a parent class. This works fine in static methods too:
class BiggerTriple extends Triple {
  static triple(n) {
    return super.triple(n) * super.triple(n);
  }
}

ChromeSamples.log(Triple.triple());
ChromeSamples.log(Triple.triple(6));
ChromeSamples.log(BiggerTriple.triple(3));
// var tp = new Triple();
// ChromeSamples.log(tp.triple()); tp.triple is not a function

// Example 6: Subclassing built-in classes and DOM
// ===============================================================

// Extend Date built-in
class MyDate extends Date {
  constructor() {
    super();
  }

  getFormattedDate() {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
      'Oct', 'Nov', 'Dec'];
    return this.getDate() + '-' + months[this.getMonth()] + '-' +
      this.getFullYear();
  }
}

var aDate = new MyDate();
ChromeSamples.log(aDate.getTime());
ChromeSamples.log(aDate.getFormattedDate());

// Extend Uint8Array
class ExtendedUint8Array extends Uint8Array {
  constructor() {
    super(10);
    this[0] = 255;
    this[1] = 0xFFA;
  }
}

var eua = new ExtendedUint8Array();
ChromeSamples.log(eua.byteLength);

// Extend DOM Audio element
class MyAudio extends Audio {
  constructor() {
    super();
    this._lyrics = '';
  }

  get lyrics() {
    return this._lyrics;
  }

  set lyrics(str) {
    this._lyrics = str;
  }
}

var player = new MyAudio();
player.controls = true;
player.lyrics = 'Never gonna give you up';
document.querySelector('body').appendChild(player);
ChromeSamples.log(player.lyrics);

// Note: The V8 in Chrome 42 supports subclassing built-ins but Arrays.
// Subclassing arrays supported in Chrome 43.

class Stack extends Array {
  constructor() {
    super();
  }

  top() {
    return this[this.length - 1];
  }
}

var stack = new Stack();
stack.push('world');
stack.push('hello');
ChromeSamples.log(stack.top());
ChromeSamples.log(stack.length);
```
