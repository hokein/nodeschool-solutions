var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function(res) {
   var result = "";
   res.on('data', function(chunk) {
       result += chunk.toString();
   });
   res.on('end', function() {
       console.log(result.length);
       console.log(result);
   });
   //res.pipe(bl(function (err, data) {
      //if (err)
          //return console.err(err);
      //console.log(data.toString().length);
      //console.log(data.toString());
   //}));
});
