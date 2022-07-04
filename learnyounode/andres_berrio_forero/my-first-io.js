/* Write a program that uses a single synchronous filesystem operation to
read a file and print the number of newlines (\n) it contains to the
console (stdout), similar to running cat file | wc -l.

The full path to the file to read will be provided as the first
command-line argument (i.e., process.argv[2]). You do not need to make
your own test file. */
//file system require file system
var fs = require('fs');
//the contents of readfile sinc obeject since de 3rd position 
var contents = fs.readFileSync(process.argv[2]);
var lines = contents.toString().split('\n').length - 1; //lines are contents to string split using \n , the lenght -1

console.log(lines);