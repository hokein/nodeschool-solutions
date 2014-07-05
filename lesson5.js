var fs = require('fs')

fs.readdir(process.argv[2], function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
        if (file.indexOf("."+process.argv[3]) > -1)
            console.log(file);
    });
});
