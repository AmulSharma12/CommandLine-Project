let cp = require("child_process");
const { mainModule } = require("process");
function start(inputArr){
    let command = inputArr[0];                      //it will have command                    
    if(inputArr.length != 1){
        let whatStart = inputArr[1];                 //it will have which application to start
        whichStart(whatStart); 
    }
    else{
        console.log("give the flag also like :-  run start chrome");
        return false;
    }
    
}


function whichStart(whatStart)
{
    switch(whatStart)
    {
        case "chrome":
            cp.execSync("start chrome")
            break;
        case "calc":
            cp.execSync("calc");
            break;
        case "code":
            cp.execSync("code");
            break;
    }
    return true;
}

module.exports={
    startKey:start
}
