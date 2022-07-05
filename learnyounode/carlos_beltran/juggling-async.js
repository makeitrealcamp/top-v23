
  const http = require("http")
  const bl = require("bl")
  const url = []

  for (let i = 2; i < 5; i++) {
      url.push(process.argv[i])
  }

  for (let j = 0; j < url.length; j++) {

    http.get(url[j], (res)=>{
    
        res.pipe(bl((err, data)=>{

            const dataToString = data.toString()
            console.log(dataToString)
        }))
 
     })
  }
 


