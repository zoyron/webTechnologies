"use strict";
let os = require("os");
let fs = require("fs");
let folderName = process.argv[2];
if(folderName == undefined){
    console.log("enter a folder name");
    return;
}
if(fs.existSync(folderName) == true){
    console.log("this name already exists, enter another name");
    return;
}
else{
    for(let i = 1;i<=50;i++){
        fs.mkdirSync(folderName+i);
    }
    return;
}