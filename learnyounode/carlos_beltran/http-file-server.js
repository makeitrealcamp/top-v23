const http = require('http')
const fs = require('fs')
const port = process.argv[2] 
const fileLocation = process.argv[3]

const server = http.createServer( (req, res) => {

   
   let readStream = fs.createReadStream(fileLocation)
   readStream.pipe(res)
})  
server.listen(port)  