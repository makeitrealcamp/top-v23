const port = process.argv[2]
const net = require('node:net');
const strftime = require("strftime")

const server = net.createServer(function (socket) {  
    // Format "YYYY-MM-DD hh:mm"  
    const myDate = strftime('%F %R', new Date()) + "\n"
    // socket handling logic
    socket.write(myDate)
    socket.end()
  })
server.listen(port) 


