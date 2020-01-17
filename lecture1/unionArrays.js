let arr1 = [1,2,3];
let arr2 = [4,5,6,1];

for(let i = 0;i<arr2.length;i++){
    arr1.push(arr2[i]);
}

arr1.sort();
let arr = [];
for(let i= 0;i<arr1.length;i++){
    if(arr1[i] != arr1[i+1]){
        arr.push(arr1[i]);
    }
}
console.log(arr);