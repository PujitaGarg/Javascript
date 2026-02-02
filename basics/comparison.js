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

const arr = ["Tea", "Coffee", "Juice"];

let myObj = {
    name: "Priya",
    age: 22,
}

const fun = function() {
    console.log("Hello World");  
}



//-------------------------------Memory---------------------------------

//Two types of Memory : Stack(Primitive), Heap(Non-Primitive) 

let firstname = "Pooja"

let anothername = firstname
anothername = "Raj"

console.log(firstname);          //pooja
console.log(anothername);        //raj

let user1 = {
    email: "user@google.com",
    upi: "user@ybl",
}

let user2 = user1;

user2.email = "pooja@google.com"

console.log(user1.email);  //pooja@google.com
console.log(user2.email);  //pooja@google.com


