// organize function
let fs = require("fs");
let path = require("path");
function organising(dirPath)
{
    // 1.)input  -> directory Path Given
    let destPath;
    if(dirPath == undefined){
        let destPath = process.cwd();
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
    fs.open(destFilePath,"w");
    fs.copyFileSync(srcFilePath,destFilePath);
    // fs.unlinkSync(srcFilePath);  //for cut and paste
    console.log(fileName);    
}


module.exports={
    organizeKey:organising
};