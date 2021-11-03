#!/usr/bin/env node
let inArr = process.argv.slice(2);
let fs = require("fs");
let path = require("path");
let helpObj = require("./commands/help");
let organizeObj = require("./commands/organize");
let treeObj = require("./commands/tree");
// console.log(inArr); 

//The command we implement
// node main.js tree "directoryPath"   
// node main.js organize "directoryPath"
// node main.js help
// if you run then first index conatins command and second index contains directoryPath

//so what we can do we take it command in one variable and on the basis ofit implement tree,orgainze,help
let command = inArr[0];

//decided on the basis of type
let types={
    html:['html'],
    css:['css'],
    archives:["zip","7z","rar","tar","ar","iso","xz","gz"],
    documents:["docx","doc","pdf","xlsx","xls","txt","odp","odg","ods","odf","jpeg","jpg","md","png"],
    apps:["exe","dmg","pkg","deb","msi"]
};

switch(command)
{
    case "tree":
        treeObj.treeKey(inArr[1]);
        break;
    case "organize":
        organizeObj.organizeKey(inArr[1]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("🤣🤣 Command Dal  Dum Ha Toh ");
}

//npm rebuild node-sass
//nodejs provide feature if you put object in module.export it 
//then object wrap and exports the function

          