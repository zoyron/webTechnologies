let arr = [1,2,3,4,5];
function mult(val1,val2){
    return val1*val2;
}

function composer(values, func){
    let prod = 1;
    for(let i = 0;i<values.length;i++){
        prod = func(values[i],prod);
    }
    return prod;
}

console.log(composer(arr,mult));