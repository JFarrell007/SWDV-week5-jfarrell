/*
SWDV-620
Name: Jim Farrell
Description: Week 5 Promise
*/
require("promise");
var fs = require("fs");
//create a new Promise using callback function with two parameters resolve,reject
var fPromise = new Promise(function(resolve, reject) {
    //Read the file
    fs.readFile('promisefile.txt', 'utf8', function(err,data) {
        //if there is an error "reject"
        if (err) {
            reject(err);
        }
        //No error so call resolve
        resolve(data);
    });
});

//If there was no error print out the contents of the file
fPromise.then(function(fromResolve) {
    console.log(fromResolve);
//If there was an error catch the error and print out the error
}).catch(function(fromReject) {
    console.log(fromReject);
});

//Put this in to show that readFile is called first but is not synchronous
console.log("readFile is called first but completes last")