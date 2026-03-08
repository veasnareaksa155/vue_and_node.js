const os = require('os');
console.log("Os type:", os.type());

const fs = require('fs');
fs.writeFile('example.txt', 'Hello, this is a sample file.', (err) => {
    if (err) throw err;
    console.log('File has been created.');
});


const path = require('path');
const filePath = path.join(__dirname, 'example.txt');
console.log('File path:', filePath);