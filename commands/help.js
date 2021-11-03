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
module.exports={
    helpKey:help
}