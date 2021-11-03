let inArr = process.argv.slice(2);
let fs = require("fs");
let path = require("path");
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
    html:["html"],
    css:["css"],
    archives:["zip","7z","rar","tar","ar","iso","xz","gz"],
    documents:["docx","doc","pdf","xlsx","xls","txt","odp","odg","ods","odf","jpeg","jpg","md","png"],
    apps:["exe","dmg","pkg","deb","msi"]
};

switch(command)
{
    case "tree":
        tree(inArr[1]);
        break;
    case "organize":
        organising(inArr[1]);
        break;
    case "help":
        help();
        break;
    default:
        console.log("🤣🤣 Command Dal  Dum Ha Toh ");
}

//help function
//1. Multiline string implemented by string template using backticks and also remains the order same in
// which you write
function help()
{
    console.log(`List Of All Commands
                node main.js tree "directoryPath"   
                node main.js organize "directoryPath"
                node main.js help
    `);
}

// tree function
function tree(dirPath)
{
    // 1.)input  -> directory Path Given
    let destPath;
    if(dirPath == undefined)
    {
        console.log("Enter The Path: ");
        return;
    }
    else
    {

        //checking path is correct or not
        let doesExist = fs.existsSync(dirPath);
        if(doesExist)
        {
            treeHelper(dirPath,"");
        }
    }
}


//tree helper function
function treeHelper(dirPath, indent)
{
    if(isFile(dirPath))
    {
        //this is  a file 
        let fileName = path.basename(dirPath);
        console.log(indent + " |- " + fileName);
    }
    else
    {
        // this is a folder
         let dirName = path.basename(dirPath);
         console.log(indent + " |------> " + dirName);
         let childs = fs.readdirSync(dirPath);
         for(let i = 0; i<childs.length; i++)
         {
             let childPath = path.join(dirPath,childs[i]);
             treeHelper(childPath,indent+"\t");
         }
    }
}

//is file or folder
function isFile(dirPath)
{
    return fs.lstatSync(dirPath).isFile();
}

//organize function
function organising(dirPath)
{
    // 1.)input  -> directory Path Given
    let destPath;
    if(dirPath == undefined){
        console.log("Enter The Path: ");
        return;
    }
    else{

        //checking path is correct or not
        let doesExist = fs.existsSync(dirPath);
        if(doesExist)
        {
            // 2.)create -> organized files Directory
                destPath = path.join(dirPath,"organized_files");
            if(fs.existsSync(destPath) == false)
                fs.mkdirSync(destPath);
        }else
        {
                console.log("Enter The Correct Path ");
                return;
        }
    }
    
    // 3.) identify categories of all the files present in input directory
    organizeHelper(dirPath,destPath);
    // 4.) copy/cut all the files  inside any categories of organized directory
}

//organizehelper function
function organizeHelper(src,dest)
{
    let childNames = fs.readdirSync(src);
    for(let i = 0; i<childNames.length; i++)
    {
        let childAddress = path.join(src,childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if(isFile)
        {
            
            // 4.) copy/cut all the files  inside any categories of organized directory
            let category = getCategory(childNames[i]);
            console.log(childNames[i] + "                              " + category);
            sendFile(childAddress,dest,category);
        }
    }
}

//function getCategory
function getCategory(names)
{
    let ext = path.extname(names);
    ext = ext.slice(1);
    for(let type in types)
    {
        let cTypeArray = types[type];
        for(let i =0; i<cTypeArray.length; i++)
        {
            if(ext == cTypeArray[i])
            return type;
        }
    }
    return "others";
}


//function sendFile
function sendFile(srcFilePath,dest,category)
{
     let categoryPath = path.join(dest,category);
     if(fs.existsSync(categoryPath == false))
       {
            fs.mkdirSync(categoryPath);
       }

    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath,fileName);
    fs.copyFileSync(srcFilePath,destFilePath);
    // fs.unlinkSync(srcFilePath);  //for cut and paste
    console.log(fileName);
}

//npm rebuild node-sass

          