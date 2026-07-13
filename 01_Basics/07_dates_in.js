let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2026 , 0 ,23)
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2026 , 0 ,23 , 5 , 4)
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("14-07-2026")
console.log(myCreatedDate2.toLocaleString());

let myTimestamp = Date.now()         // new se bhi kr skte hai
console.log(myTimestamp);             // ans is milliseconds from 1 Jan 1970
console.log(myCreatedDate2.getTime());
console.log(Date.now());                // in milliseconds
console.log(Math.floor((Date.now()/1000)));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+ 1);      // +1 cuz in JS all things start from 0 
console.log(newDate.getDay());           // that is 0 is January

`${newDate.getDay()} and the time is `

newDate.toLocaleString('default', {

    weekday: "long",
    timezone,
    
})