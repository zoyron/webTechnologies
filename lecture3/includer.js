let arr = [1,2,3,4,5,6,7,8,9,10];
let arr1 = [];

function isOdd(value){
    if(value%2 == 1)
        return value;
}

function includer(values,func){
    for(let i = 0;i<values.length;i++){
        let temp = func(values[i]);
        if(temp!= undefined){
            arr1.push(temp);
        }
    }
}

includer(arr,isOdd);
console.log(arr);
console.log(arr1);