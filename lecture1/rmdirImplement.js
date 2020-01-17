let fs = require("fs");

for(let i = 1;i<=50;i++){
    fs.rmdirSync("folder"+i);
}