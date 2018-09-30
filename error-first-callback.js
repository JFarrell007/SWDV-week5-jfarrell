/*
SWDV-620
Name: Jim Farrell
Description: error first callback
*/
var fs = require("fs");

//readFile is an asynchronous function.  
//The callback function uses two parameters err and data
fs.readFile('errorFirst.txt', 'utf8', function(err, data){
    //Handle the err and print to console log
    if(err) {
    console.log(err);
    }
    //There was no error so print out the file contents
    else {
        console.log(data);
    }
});

//Put this in to show that readFile is called first but is not synchronous
console.log("readFile called first but completes last");