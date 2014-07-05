var fs = require('fs')

buf = fs.readFileSync(process.argv[2]);
console.log(buf.toString().split('\n').length-1);
