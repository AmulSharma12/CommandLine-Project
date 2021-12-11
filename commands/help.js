//help function
//1. Multiline string implemented by string template using backticks and also remains the order same in
// which you write
function help()
{
    console.log(`List Of All Commands
USAGE : run [help] [tree] [organize]

These are common commands used :-
        help        ->  Shows all the Commands
        tree        ->  Shows Hierarchy Of Files/Folders
        organize    ->  Create Organized Folder and Categorised
    `);
}
module.exports={
    helpKey:help
}