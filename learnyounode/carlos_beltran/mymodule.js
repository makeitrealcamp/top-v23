const fs = require("fs")
const path = require("path")

module.exports = function (directory, extension, callback){

    fs.readdir(directory, function (err, content){
   
        if(err) return callback(err)

        let response = content.filter((file) => path.extname(file) === '.' + extension)
        return callback(null, response)
    })
}

