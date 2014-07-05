var http = require('http')
var bl = require('bl')

var content1, content2, content3;

function finish() {
   if (content1 && content2 && content3) {
     console.log(content1);
     console.log(content2);
     console.log(content3);
   }
};

http.get(process.argv[2], function(res) {
   var result = "";
   res.pipe(bl(function (err, data) {
      if (err)
         return console.err(err);
      content1 = data.toString();
      finish();
   } ));
});

http.get(process.argv[3], function(res) {
   res.pipe(bl(function (err, data) {
      if (err)
         return console.err(err);
      content2 = data.toString();
      finish();
   }));
});

http.get(process.argv[4], function(res) {
   var result = "";
   res.pipe(bl(function (err, data) {
      if (err)
         return console.err(err);
      content3 = data.toString();
      finish();
   }));
});
