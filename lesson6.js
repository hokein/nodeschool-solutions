var my = require('./mymodule.js')

my(process.argv[2], process.argv[3], function(err, data) {
    if (err) return;
    for (var i = 0; i < data.length; ++i)
        console.log(data[i]);
})
