let result = 0

for (var i = 2; i < process.argv.length; i++) {
    result += Number(process.argv[i]);
  }

console.log(result)

/* console.log(process.argv) = 
[
    'C:\\Program Files\\nodejs\\node.exe',
    'd:\\1TOP\\11-ejercicio-nodejs\\top-v23\\learnyounode\\andres_berrio_forero\\baby-steps.js'
  ] */

