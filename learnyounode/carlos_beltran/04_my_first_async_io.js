const fs = require('fs');

fs.readFile(process.argv[2], (err, fileContents) => {
  if (err) console.log(err);
  const lines = fileContents.toString().split('\n').length - 1;
  console.log(lines);
});
