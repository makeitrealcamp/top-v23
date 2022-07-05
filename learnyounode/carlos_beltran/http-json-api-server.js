const http = require('http')
const url = require('url')
const port = process.argv[2]

const server = http.createServer( (req, res)=>{

    const urlStr = url.parse(req.url, true)
    const urlPath = urlStr.pathname
    const query = urlStr.query
    const iso = query.iso

    var date = new Date(iso);

    if(urlPath === '/api/parsetime'){
       dataObj = {
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        }
    } else if (urlPath === '/api/unixtime'){
        dataObj ={
            "unixtime": date.getTime()
        }
    } else {
        res.write("no Data")
    }
    res.writeHead(200, {'content-Type': 'application/json'})
    res.end(JSON.stringify(dataObj))
})
server.listen(port)

/* 
    'use strict'
    const http = require('http')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime: time.getTime() }
    }
    
    const server = http.createServer(function (req, res) {
      const parsedUrl = new URL(req.url, 'http://example.com')
      const time = new Date(parsedUrl.searchParams.get('iso'))
      let result
    
      if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
      } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
      }
    
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2])) */