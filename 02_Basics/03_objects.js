// singleton

// object literals

// Object.create

const mySym = Symbol("key1")

const JsUser = {

    name : "Rishi"  ,             // name is treated as string ie "name"
    "full name" : "Rishi Sahu",
    age : 20 ,
        //  mySym: "mykey1" , 
    [mySym]: "mykey1" , 
    location : "Jhansi",
    email : "rishi@google.com",
    isLoggedIn = false,
    lastLoginDays : ["Monday", " Tuesday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);   // cant access using dot(.)
// console.log(JsUser.mySym);
console.log(JsUser[mySym]);

console.log(typeof JsUser.mySym);

JsUser.email = "rishi.iiitranchi@ac.in"
//  Object.freeze(JsUser);
JsUser.email = "rishi@origin.com"
console.log(JsUser);

JsUser.greeting = function(){

    console.log("Hello Js User");
    
}
JsUser.greetingTwo = function(){

    console.log(`Hello Js User , ${this.name}`);
    
}

// console.log(JsUser.greeting); 
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
