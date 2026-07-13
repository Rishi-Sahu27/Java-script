// array

const myArr = [1,3,4,5,6]
const myHeroes = ["batman" , "bheem" , "jaggu" , "kalia"]

const myArr2 = new Array(1,2,4,5)
console.log(myArr[0]);


// ARRAY METHODS 

myArr.push(7)
myArr.push(8)
myArr.pop()

myArr.unshift(9)
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(3))

const newArr = myArr.join()  // Join converts array to string

console.log(newArr);
console.log(typeof newArr );
console.log(myArr);


// Slice , Splice

console.log("A", myArr)

const myn1 = myArr.slice(1,3)  // index 1 to index 2 , 3 is not included
console.log(myn1);             // Slice cant manipulate original array
console.log("B" , myArr);


const myn2 = myArr.splice(1,3)    // index 1 to index 3 
console.log("C", myArr);          // Splice manipulates original array
console.log(myn2);



