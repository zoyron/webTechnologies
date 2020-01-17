"use strict";
//print using console
console.log("hello IT and CSE");

//data types => primitive and non-primitive
//primitive datatypes cannot be dived further, they are the basic data types
//undefined, Strings, Numbers, Boolean, null, Symbol are the 6 primitive data types
for(let i = 1;i<=20;i++){
    if(i%3 == 0 && i%5 == 0)
        console.log("fizzbuzz");
    else if(i%3 == 0)
        console.log("fizz");
    else if(i%5 == 0)
        console.log("buzz");
    else
        console.log(i);
}

//non-primitive data types are functions, arrays and objects
function myfunc(whatToSay){
    console.log("Hi "+whatToSay);
}

myfunc("Sagar");

//function for decimal to binary

function decToBi(value){
	let bin = "";
	while(value>0){
		bin = bin + value%2;
		value = Math.floor(value/2);
	}
	return bin.split("").reverse().join();
}

console.log(decToBi(13));
