console.log("2" > 1);  //true

console.log(null > 0);  //false
console.log(null == 0); //false
console.log(null >= 0); //true

console.log(undefined > 0);  //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false

//the reason is that an == and comparisons >, <, >=, <= work differently.
//comparisons convert null to a number, treating it as 0
// null >= 0 (0 >= 0) gives true whereas  null > 0 (0 > 0) gives false

console.log("2" === 2);  //false === checks datatype also


//------------------------summary-------------------------

//Primitive(call by value)
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  //false


// Reference (Non primitive)  : call by reference
// Arrays, Objects, Functions