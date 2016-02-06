var fs = require('fs');

console.log("about to read the file");
fs.readFile('test.txt', function(err, data){
	if (err){
		console.log("unable to read test.txt");
	}
	else {

	console.log(data.toString());

	}
});

console.log("Called fs.readFile()\n");