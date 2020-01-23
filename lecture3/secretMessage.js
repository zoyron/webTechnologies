const arr = ['Hen','elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
function secMsg(str){
    return str[0];
}

let msg = arr.map(secMsg);
let finalMsg = "";
for(let i = 0;i<msg.length;i++){
    finalMsg+=msg[i];
}
console.log(finalMsg);
