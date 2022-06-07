// Primitives passed by value
let a = 3; // Number
let b = "hi"; // String
let c = true; // booleams
let d = undefined; // Undefined
let e = null;	// null

// last primitive is symbol. Came with es6
let sym = Symbol('foo');
console.log(sym)
console.log(typeof(sym));

// It can define a property of an object that is private to that object


console.log('----------')

// Non-primitives passed by reference
// has one member: objects
let f = {}; // object
console.log(f)
console.log(typeof(f))

let g = []	// arrays are also objects
console.log(g)
console.log(typeof(g))

// everything that is not a primitive in javascript is an object
// thats why this works

let someArray = [5,6,7]
someArray['someProperty'] = 'someValue';
console.log(someArray)
console.log(someArray.someProperty)
console.log(someArray['someProperty']);

//...which is absolutely fucking absurd

console.log('----------')

// passed by reference huh.. why does that mattter???
// I'll tell you, you sick fuck
let prim1 = 1;
let prim2 = 1;
console.log(prim1 == prim2);

let obj1 = [1,2,3]
let obj2 = [1,2,3]
console.log(obj1 == obj2)
