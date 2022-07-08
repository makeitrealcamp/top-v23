const listExtFiles = require('./mymodule');

const directory = process.argv[2];
const extension = process.argv[3];

listExtFiles(directory, extension, (err, res) => { console.log(res.join('\n')); });
