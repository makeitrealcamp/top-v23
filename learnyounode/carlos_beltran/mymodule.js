const fs = require('fs');
const path = require('path');

module.exports = function (directory, extension, callback) {
  fs.readdir(directory, (err, content) => {
    if (err) return callback(err);

    const response = content.filter((file) => path.extname(file) === `.${extension}`);
    return callback(null, response);
  });
};
