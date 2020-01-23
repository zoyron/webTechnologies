const arr = [1,2,3,4,5,6];

let arr1 = [];

function doubleIt(value){
    return value*2;
}
function transformer(values,func){
    for(let i = 0;i<values.length;i++){
        arr1.push(func(values[i]));
    }
}
transformer(arr,doubleIt);
console.log(arr);
console.log(arr1);