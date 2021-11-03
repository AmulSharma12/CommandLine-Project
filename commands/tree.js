// tree function
let fs = require("fs");
let path = require("path");
function tree(dirPath)
{
    // 1.)input  -> directory Path Given
    let destPath;
    if(dirPath == undefined)
    {
        //if path not exist we would write tree of current working directory
        treeHelper(process.cwd(),"");
    }
    else
    {

        //checking path is correct or not
        let doesExist = fs.existsSync(dirPath);
        if(doesExist)
        {
            console.log("FOLDERS "+ " |- ");
            console.log("FILES "+ " |---------------------> ");
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
         console.log(indent + " |---------------------> " + dirName);
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
    let isFile =  fs.lstatSync(dirPath).isFile();
    return isFile;
}

module.exports={
    treeKey:tree
}