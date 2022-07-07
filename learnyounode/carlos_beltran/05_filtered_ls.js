/*
  The list of files should be printed to the console, one file per line. You  
  must use asynchronous I/O.  */
const fs = require("fs")
const directory = process.argv[2]
const extension = `.${process.argv[3]}`

fs.readdir(directory, function (err, content){
   
    content.filter( (file) => {
      if (file.indexOf(extension) !== -1) {
        console.log(file)
      }
    })
})







