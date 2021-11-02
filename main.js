let inArr = process.argv.slice(2);
console.log(inArr); 

//The command we implement
// node main.js tree "directoryPath"   
// node main.js organize "directoryPath"
// node main.js help
// if you run then first index conatins command and second index contains directoryPath

//so what we can do we take it command in one variable and on the basis ofit implement tree,orgainze,help
let command = inArr[0];
switch(command)
{
    case "tree":
        tree(inArr[1]);
        break;
    case "organize":
        organize(inArr[1]);
        break;
    case "help":
        help();
        break;
    default:
        console.log("🤣🤣 Command Dal  Dum Ha Toh ");
}

// tree function
function tree(dirPath){
    console.log(" Tree Implemented");
}

//organize function
function organize(dirPath)
{
    console.log("organize Implemented");
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