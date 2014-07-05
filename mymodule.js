var fs = require('fs');

module.exports = function(dir, fileExt, func) {
   fs.readdir(dir, function(error, files) {
       if (error) return func(error, files);
       var result = files.filter(function(file) {
           return file.indexOf("." + fileExt) > -1;
       });
       func(error, result);
   });
}
