/* Write a program that accepts one or more numbers as command-line arguments
and prints the sum of those numbers to the console (stdout). */
let result = 0 // set a variable for adding 

for (var i = 2; i < process.argv.length; i++) {// starts in second postition,  i< length
    result += Number(process.argv[i]); // result is the sting  process.argv[i] in Number not string
  }

console.log(result)

/* console.log(process.argv) = 
[
    'C:\\Program Files\\nodejs\\node.exe',
    'd:\\1TOP\\11-ejercicio-nodejs\\top-v23\\learnyounode\\andres_berrio_forero\\baby-steps.js'
  ] */

