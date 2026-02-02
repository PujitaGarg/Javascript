const name = "Priya"
const repoCount = 50

// console.log(name + repoCount + "Value");

//string interpolation
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

//another way of declaring
const anothername = new String("Raj-Garg")

// console.log(typeof name);  //string
// console.log(typeof anothername);  //object

// console.log(anothername[0]); //R
// console.log(anothername.length);
// console.log(anothername.toUpperCase());
// console.log(anothername.charAt(2));
// console.log(anothername.indexOf('j'));

const newstr = anothername.substring(0,4)
console.log(newstr);

const newstr2 = anothername.slice(-8, 3)
console.log(newstr2);


