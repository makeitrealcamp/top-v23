
  const fs = require("fs")
  const argv = process.argv[2]
  const bufferStr =  fs.readFileSync(argv).toString()

  console.log(bufferStr.split("\n").length - 1)
  