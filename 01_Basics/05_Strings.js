const name= "Rishi"
const repoCount = 50

console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String (`Rishi-Sahu-IIIT`);   
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,4);     // Ignores -ve values

console.log(newString);
const anotherString = gameName.slice(-8,4);  // Not Ignores -ve values
console.log(anotherString);

const newString1 = "    Rishi     "
console.log(newString1);
console.log(newString1.trim());

const url = "https://rishi.com/rishi%20sahu"

console.log(url.replace('%20' , '-'))

console.log(url.includes('sharma'));

console.log(gameName.split('-'));







